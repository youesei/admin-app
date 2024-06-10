import {
	Form,
	FormControl,
	// FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Button,
} from "@/components/ui";
import { Link } from "react-router-dom";
import { useFormulary } from "@/pages/hooks";
import { registerInitialValues } from "../models";
import { registerSchema } from "../schemas";

export const RegisterForm = () => {
	const { form } = useFormulary(registerSchema, registerInitialValues);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((values) => console.log(values))}
				className="flex flex-col w-full gap-y-4"
			>
				<fieldset className="flex gap-x-4">
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => {
							// console.log(field);
							return (
								<FormItem>
									<FormLabel>Nombres</FormLabel>
									<FormControl>
										<Input placeholder="Jhon" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>

					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => {
							// console.log(field);
							return (
								<FormItem>
									<FormLabel>Apellidos</FormLabel>
									<FormControl>
										<Input placeholder="Doe" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
				</fieldset>

				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => {
						// console.log(field);
						return (
							<FormItem>
								<FormLabel>Celular</FormLabel>
								<FormControl>
									<Input
										type="tel"
										placeholder="Ingresa tu celular"
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

				<Button variant="default" type="submit">
					Registrarse
				</Button>
			</form>

			<p className="flex items-center justify-center mt-2 text-xs text-gray-400 gap-x-1">
				¿Ya tienes una cuenta?
				<Link className="text-xs underline hover:text-gray-100" to="/login">
					Accede
				</Link>
			</p>
		</Form>
	);
};
