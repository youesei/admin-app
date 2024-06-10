import {
	Form,
	FormControl,
	FormField,
	FormItem,
	// FormLabel,
	FormMessage,
	Input,
	Button,
} from "@/components/ui";
import { useFormulary } from "@/pages/hooks";
import { sendCodeInitialValues } from "../models";
import { sendCodeSchema } from "../schemas";
import { useResetPassContext } from "../hooks";

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
