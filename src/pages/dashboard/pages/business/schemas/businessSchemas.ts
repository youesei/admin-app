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
} from "@schemas/globalsSchemas";
import { z } from "zod";

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
