import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from "@/components/ui";
import { useFormulary } from "@/pages/hooks";
import { changePassSchema } from "../schemas";
import { changePassInitialValues } from "../models";

export const ChangePassForm = () => {
	const { form } = useFormulary(changePassSchema, changePassInitialValues);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((values) => console.log(values))}
				className="flex flex-col w-full gap-y-4"
			>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => {
						// console.log(field);
						return (
							<FormItem>
								<FormLabel>Contraseña Nueva</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="Ingresa tu contraseña nueva"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>

				<FormField
					control={form.control}
					name="passwordConfirm"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Confirmar Contraseña</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="Ingresa tu contraseña nuevamente"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<Button variant="default" type="submit">
					Restablecer Contraseña
				</Button>
			</form>
		</Form>
	);
};
