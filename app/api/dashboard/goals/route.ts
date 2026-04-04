import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "@/lib/session";
import { dashboardGoalSchema } from "@/lib/validators";

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

export async function GET() {
  const session = await getServerSession().catch(() => null);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const goals = await db.dashboardGoal.findMany({
    where: { userId: session.user.id },
    orderBy: [{ achieved: "asc" }, { createdAt: "asc" }],
  });

  return NextResponse.json({ goals });
}

export async function POST(request: Request) {
  const session = await getServerSession().catch(() => null);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const json = await request.json().catch(() => null);
  const parsed = dashboardGoalSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid goal payload" },
      { status: 400 }
    );
  }

  const targetDate = parsed.data.targetDate ? new Date(parsed.data.targetDate) : null;
  const achieved =
    parsed.data.achieved ?? parsed.data.currentAmount >= parsed.data.targetAmount;

  const goal = await db.dashboardGoal.create({
    data: {
      userId: session.user.id,
      name: parsed.data.name,
      emoji: parsed.data.emoji,
      targetAmount: parsed.data.targetAmount,
      currentAmount: parsed.data.currentAmount,
      targetDate,
      color: parsed.data.color,
      achieved,
      monthlyNeeded: calculateMonthlyNeeded(
        parsed.data.targetAmount,
        parsed.data.currentAmount,
        targetDate
      ),
    },
  });

  return NextResponse.json({ goal }, { status: 201 });
}
