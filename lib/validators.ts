import {z} from "zod"

export const signupSchema = z.object({
    name:z.string().min(2,"Name must be atleast 2 characters"),
    email:z.string().email("Invalid email"),
    password:z.string().min(8,"password must be atleast 8 character ")
    .regex(/[A-Z]/, "Must contain uppercase")
    .regex(/[a-z]/, "Must contain lowercase")
    .regex(/[0-9]/, "Must contain number")
})

export const dashboardGoalSchema = z.object({
    name: z.string().trim().min(2, "Goal name must be at least 2 characters"),
    emoji: z.string().trim().min(1, "Emoji is required"),
    targetAmount: z.coerce.number().int().positive("Target amount must be positive"),
    currentAmount: z.coerce.number().int().min(0, "Current amount cannot be negative"),
    targetDate: z.string().datetime().optional().nullable(),
    color: z.string().trim().min(4, "Color is required"),
    achieved: z.boolean().optional(),
})

export const dashboardGoalUpdateSchema = dashboardGoalSchema.partial().refine(
    (value) => Object.keys(value).length > 0,
    "At least one field must be provided"
)
