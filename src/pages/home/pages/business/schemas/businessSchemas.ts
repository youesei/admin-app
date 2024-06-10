import { z } from "zod";
import {
	addressSchema,
	categorySchema,
	citySchema,
	countrySchema,
	departmentSchema,
	emailSchema,
	firstNameSchema,
	nitSchema,
	phoneSchema,
} from "@/pages/schemas";

export const createBusinessSchema = z.object({
	name: firstNameSchema,
	email: emailSchema,
	phone: phoneSchema,
	address: addressSchema,
	nit: nitSchema,
	category: categorySchema,
	country: countrySchema,
	department: departmentSchema,
	city: citySchema,
});
