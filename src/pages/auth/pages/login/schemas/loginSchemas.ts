import { emailSchema, passwordSchema } from "@schemas/globalsSchemas";
import { z } from "zod";

export const loginSchema = z.object({
	email: emailSchema,
	password: passwordSchema,
});
