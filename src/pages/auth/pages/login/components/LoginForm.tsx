import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Button,
} from "@/components/ui";
import { Link } from "react-router-dom";
import { useFormulary } from "@/pages/hooks";
import { loginSchema } from "../schemas";
import { loginInitValues } from "../models";

export const LoginForm = () => {
	const { form } = useFormulary(loginSchema, loginInitValues);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((values) => console.log(values))}
				className="flex flex-col w-full gap-y-4"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => {
						// console.log(field);
						return (
							<FormItem>
								<FormLabel>Correo Electrónico</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="correo@correo.com"
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
					name="password"
					render={({ field }) => {
						// console.log(field);
						return (
							<FormItem>
								<div className="flex items-center justify-between">
									<FormLabel>Contraseña</FormLabel>
									<Link className="text-sm underline" to="/resetpass">
										Olvidaste tu contraseña?
									</Link>
								</div>
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

				<Button variant="default" type="submit">
					Ingresar
				</Button>
			</form>

			<p className="flex items-center justify-center mt-2 text-xs text-gray-400 gap-x-1">
				¿No tienes una cuenta?
				<Link className="text-xs underline hover:text-gray-100" to="/register">
					Regístrate
				</Link>
			</p>
		</Form>
	);
};
