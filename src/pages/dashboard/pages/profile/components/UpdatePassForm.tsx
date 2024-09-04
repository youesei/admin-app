import { Button } from "@/components/ui/button";
import { useFormulary } from "@hooks/useFormulary";
import { userSchema } from "@schemas/userSchemas";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@ui/form";
import { Input } from "@ui/input";
import { updatePassnitialValues } from "../constants/updatePassnitialValues";

export const UpdatePassForm = () => {
	const { form } = useFormulary(userSchema, updatePassnitialValues);
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
