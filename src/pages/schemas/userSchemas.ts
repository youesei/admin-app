import {
	emailSchema,
	firstNameSchema,
	lastNameSchema,
	passwordConfirmSchema,
	passwordSchema,
	phoneSchema,
} from "./globalsSchemas";
import { z } from "zod";

export const userSchema = z.object({
	firstName: firstNameSchema,
	lastName: lastNameSchema,
	email: emailSchema,
	phone: phoneSchema,
	password: passwordSchema,
	passwordConfirm: passwordConfirmSchema,
});
