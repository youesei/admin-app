import { useFormulary } from "@hooks/useFormulary";
import { Button } from "@ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	// FormLabel,
	FormMessage,
} from "@ui/form";
import { Input } from "@ui/input";
import { sendCodeInitialValues } from "../constants/sendCodeInitialValues";
import { useResetPassContext } from "../hooks/useResetPassContext";
import { sendCodeSchema } from "../schemas/resetPassSchemas";

export const SendCodeForm = () => {
	const { form } = useFormulary(sendCodeSchema, sendCodeInitialValues);
	const { handleChangeState } = useResetPassContext();

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((values) => console.log(values))}
				className="flex flex-col w-full gap-y-4"
			>
				<p>
					Ingrese la dirección de correo electrónico de su cuenta y le
					enviaremos un codigo para restablecer su contraseña.
				</p>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => {
						// console.log(field);
						return (
							<FormItem>
								{/* <FormLabel>Correo Electrónico</FormLabel> */}
								<FormControl>
									<Input
										type="email"
										placeholder="Ingresa tu correo electrónico"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>

				<Button
					onClick={() =>
						handleChangeState({
							route: "validateCode",
							sectionTitle: "Validar Código",
						})
					}
					variant="default"
					type="submit"
				>
					Enviar Codigo
				</Button>
			</form>
		</Form>
	);
};
