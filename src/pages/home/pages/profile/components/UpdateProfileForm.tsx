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

export const UpdateProfileForm = () => {
	const { form } = useFormulary(registerSchema, registerInitialValues);
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((values) => console.log(values))}
				className="flex flex-col p-4 gap-y-4 h-[20rem] rounded-xl bg-card"
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
									<FormMessage className="" />
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
								<FormMessage className="" />
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
								<FormMessage className="" />
							</FormItem>
						);
					}}
				/>

				<Button variant="default" type="submit">
					Actualizar
				</Button>
			</form>
		</Form>
	);
};
