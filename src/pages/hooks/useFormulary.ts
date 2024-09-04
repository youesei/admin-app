import type { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useFormulary = <T extends z.ZodSchema>(
	schema: T,
	initialValues: z.infer<T>,
) => {
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: initialValues,
	});
	return { form };
};
