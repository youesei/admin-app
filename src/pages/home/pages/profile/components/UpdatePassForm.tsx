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
import { registerInitialValues } from "@/pages/auth/pages/register/models";
import { registerSchema } from "@/pages/auth/pages/register/schemas";
import { useFormulary } from "@/pages/hooks";

export const UpdatePassForm = () => {
	const { form } = useFormulary(registerSchema, registerInitialValues);
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((values) => console.log(values))}
				className="flex flex-col p-4 h-[20rem] justify-between gap-y-4 bg-card rounded-xl"
			>
				<fieldset className="grid gap-y-4">
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => {
							// console.log(field);
							return (
								<FormItem>
									<FormLabel>Contraseña</FormLabel>
									<FormControl>
										<Input
											type="password"
											placeholder="Ingresa tu contraseña"
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
							// console.log(field);
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
				</fieldset>
				<Button variant="default" type="submit">
					Cambiar Contraseña
				</Button>
			</form>
		</Form>
	);
};
