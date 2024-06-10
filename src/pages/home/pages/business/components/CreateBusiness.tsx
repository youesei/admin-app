import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui";
import { useFormulary, useModal } from "@/pages/hooks";
import { createBusinessSchema } from "../schemas";
import { businessInitialValues } from "../models";

export const CreateBusiness = () => {
	const { show, handleModal } = useModal();
	const { form } = useFormulary(createBusinessSchema, businessInitialValues);

	return (
		<Dialog open={show} onOpenChange={(value) => handleModal(value)}>
			<DialogContent className="max-w-2xl">
				<DialogHeader>
					<DialogTitle>Crear Negocio</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit((values) => console.log(values))}
						className="grid grid-cols-2 gap-8"
					>
						<fieldset className="flex flex-col justify-between grow gap-y-3">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => {
									// console.log(field);
									return (
										<FormItem>
											<FormLabel>Nombre</FormLabel>
											<FormControl>
												<Input placeholder="Ingresa el nombre" {...field} />
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
						</fieldset>

						<fieldset className="flex flex-col justify-between grow gap-y-3">
							<FormField
								control={form.control}
								name="address"
								render={({ field }) => {
									// console.log(field);
									return (
										<FormItem>
											<FormLabel>Dirección</FormLabel>
											<FormControl>
												<Input placeholder="Ingresa la dirección" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									);
								}}
							/>

							<FormField
								control={form.control}
								name="nit"
								render={({ field }) => {
									// console.log(field);
									return (
										<FormItem>
											<FormLabel>NIT</FormLabel>
											<FormControl>
												<Input placeholder="Ingresa el NIT" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									);
								}}
							/>

							<FormField
								control={form.control}
								name="category"
								render={({ field }) => {
									return (
										<FormItem>
											<Select onValueChange={field.onChange}>
												<FormControl>
													<SelectTrigger className="mt-8">
														<SelectValue placeholder="Categoria" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="light">Light</SelectItem>
													<SelectItem value="dark">Dark</SelectItem>
													<SelectItem value="system">System</SelectItem>
												</SelectContent>
												<FormMessage />
											</Select>
										</FormItem>
									);
								}}
							/>
						</fieldset>

						<fieldset className="grid grid-cols-3 col-span-2 gap-x-4">
							<FormField
								control={form.control}
								name="country"
								render={({ field }) => {
									return (
										<FormItem>
											<Select onValueChange={field.onChange}>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="País" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="light">Light</SelectItem>
													<SelectItem value="dark">Dark</SelectItem>
													<SelectItem value="system">System</SelectItem>
												</SelectContent>
												<FormMessage />
											</Select>
										</FormItem>
									);
								}}
							/>

							<FormField
								control={form.control}
								name="country"
								render={({ field }) => {
									return (
										<FormItem>
											<Select onValueChange={field.onChange}>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Departamento" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="light">Light</SelectItem>
													<SelectItem value="dark">Dark</SelectItem>
													<SelectItem value="system">System</SelectItem>
												</SelectContent>
												<FormMessage />
											</Select>
										</FormItem>
									);
								}}
							/>

							<FormField
								control={form.control}
								name="city"
								render={({ field }) => {
									return (
										<FormItem>
											<Select onValueChange={field.onChange}>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Ciudad" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="light">Light</SelectItem>
													<SelectItem value="dark">Dark</SelectItem>
													<SelectItem value="system">System</SelectItem>
												</SelectContent>
												<FormMessage />
											</Select>
										</FormItem>
									);
								}}
							/>
						</fieldset>
						<Button
							// onClick={() => console.log("AAAAAAAAaa")}
							onClick={form.handleSubmit((values) => console.log(values))}
							variant="default"
							className="col-span-2"
							type="submit"
						>
							Crear
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
