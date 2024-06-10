import { z } from "zod";
import {
	codeSchema,
	emailSchema,
	passwordConfirmSchema,
	passwordSchema,
} from "@/pages/schemas";

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
