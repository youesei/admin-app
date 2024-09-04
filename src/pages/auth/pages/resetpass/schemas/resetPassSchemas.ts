import {
	codeSchema,
	emailSchema,
	passwordConfirmSchema,
	passwordSchema,
} from "@schemas/globalsSchemas";
import { z } from "zod";

export const changePassSchema = z.object({
	password: passwordSchema,
	passwordConfirm: passwordConfirmSchema,
});

export const sendCodeSchema = z.object({
	email: emailSchema,
});

export const verificationCodeSchema = z.object({
	code: codeSchema,
});
