import {
	emailSchema,
	firstNameSchema,
	lastNameSchema,
	passwordConfirmSchema,
	passwordSchema,
	phoneSchema,
} from "@schemas/globalsSchemas";
import { z } from "zod";

export const registerSchema = z.object({
	firstName: firstNameSchema,
	lastName: lastNameSchema,
	email: emailSchema,
	phone: phoneSchema,
	password: passwordSchema,
	passwordConfirm: passwordConfirmSchema,
});
