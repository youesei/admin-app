import { emailSchema, passwordSchema } from "@/pages/schemas";
import { z } from "zod";

export const loginSchema = z.object({
	email: emailSchema,
	password: passwordSchema,
});
