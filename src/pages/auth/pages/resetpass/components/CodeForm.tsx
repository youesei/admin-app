import { useFormulary } from "@hooks/useFormulary";
import { Button } from "@ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@ui/form";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@ui/input-otp";
import { codeInitialValues } from "../constants/sendCodeInitialValues";
import { useResetPassContext } from "../hooks/useResetPassContext";
import { verificationCodeSchema } from "../schemas/resetPassSchemas";

export const CodeForm = () => {
	const { form } = useFormulary(verificationCodeSchema, codeInitialValues);
	const { handleChangeState } = useResetPassContext();

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((values) => console.log(values))}
				className="flex flex-col w-full gap-y-4"
			>
				<FormField
					control={form.control}
					name="code"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Digita el código que te enviamos a tu correo electrónico.
							</FormLabel>

							<FormControl>
								<InputOTP
									maxLength={4}
									{...field}
									onComplete={() => console.log("AAAA")}
								>
									<InputOTPGroup className="w-full">
										<InputOTPSlot className="grow" index={0} />
										<InputOTPSlot className="grow" index={1} />
										<InputOTPSlot className="grow" index={2} />
										<InputOTPSlot className="grow" index={3} />
									</InputOTPGroup>
								</InputOTP>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					onClick={() =>
						handleChangeState({
							route: "changePass",
							sectionTitle: "Restablecer Contraseña",
						})
					}
					variant="default"
					type="submit"
				>
					Validar Codigo
				</Button>
			</form>
		</Form>
	);
};
