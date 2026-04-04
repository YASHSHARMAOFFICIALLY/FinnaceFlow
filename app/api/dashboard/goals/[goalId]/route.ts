import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "@/lib/session";
import { dashboardGoalUpdateSchema } from "@/lib/validators";

function calculateMonthlyNeeded(targetAmount: number, currentAmount: number, targetDate?: Date | null) {
  if (!targetDate || currentAmount >= targetAmount) {
    return 0;
  }

  const today = new Date();
  const monthsRemaining =
    (targetDate.getFullYear() - today.getFullYear()) * 12 +
    (targetDate.getMonth() - today.getMonth()) +
    (targetDate.getDate() >= today.getDate() ? 0 : -1);

  return Math.max(0, Math.ceil((targetAmount - currentAmount) / Math.max(1, monthsRemaining)));
}

async function getOwnedGoal(userId: string, goalId: string) {
  return db.dashboardGoal.findFirst({
    where: {
      id: goalId,
      userId,
    },
  });
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ goalId: string }> }
) {
  const session = await getServerSession().catch(() => null);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { goalId } = await context.params;
  const existingGoal = await getOwnedGoal(session.user.id, goalId);

  if (!existingGoal) {
    return NextResponse.json({ error: "Goal not found" }, { status: 404 });
  }

  const json = await request.json().catch(() => null);
  const parsed = dashboardGoalUpdateSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid goal payload" },
      { status: 400 }
    );
  }

  const targetDate =
    parsed.data.targetDate === undefined
      ? existingGoal.targetDate
      : parsed.data.targetDate
        ? new Date(parsed.data.targetDate)
        : null;

  const targetAmount = parsed.data.targetAmount ?? existingGoal.targetAmount;
  const currentAmount = parsed.data.currentAmount ?? existingGoal.currentAmount;
  const achieved = parsed.data.achieved ?? currentAmount >= targetAmount;

  const goal = await db.dashboardGoal.update({
    where: { id: existingGoal.id },
    data: {
      ...parsed.data,
      targetDate,
      targetAmount,
      currentAmount,
      achieved,
      monthlyNeeded: calculateMonthlyNeeded(targetAmount, currentAmount, targetDate),
    },
  });

  return NextResponse.json({ goal });
}

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ goalId: string }> }
) {
  const session = await getServerSession().catch(() => null);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { goalId } = await context.params;
  const existingGoal = await getOwnedGoal(session.user.id, goalId);

  if (!existingGoal) {
    return NextResponse.json({ error: "Goal not found" }, { status: 404 });
  }

  await db.dashboardGoal.delete({
    where: { id: existingGoal.id },
  });

  return NextResponse.json({ success: true });
}
