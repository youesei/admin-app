import { z } from "zod";

export const emailSchema = z.string().min(1, {
	message: "Username must be at least 2 characters.",
});

export const passwordSchema = z.string().min(1, {
	message: "Password must be at least 6 characters.",
});

export const firstNameSchema = z.string().min(1, {
	message: "First name must be at least 2 characters.",
});

export const lastNameSchema = z.string().min(1, {
	message: "Last name must be at least 2 characters.",
});

export const phoneSchema = z.string().min(1, {
	message: "Phone must be at least 2 characters.",
});

export const codeSchema = z.string().min(1, {
	message: "Code must be at least 4 characters.",
});

export const passwordConfirmSchema = z.string().min(1, {
	message: "Password must be at least 6 characters.",
});

export const digitSchema = z.string().min(1, {
	message: "Password must be at least 6 characters.",
});

export const addressSchema = z.string().min(1, {
	message: "Password must be at least 6 characters.",
});

export const nitSchema = z.string().min(1, {
	message: "Password must be at least 6 characters.",
});

export const categorySchema = z.string().min(1, {
	message: "Este campo es obligatorio.",
});

export const countrySchema = z.string().min(1, {
	message: "Password must be at least 6 characters.",
});
export const departmentSchema = z.string().min(1, {
	message: "Password must be at least 6 characters.",
});
export const citySchema = z.string().min(1, {
	message: "Password must be at least 6 characters.",
});
