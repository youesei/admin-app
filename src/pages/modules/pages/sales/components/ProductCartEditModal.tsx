import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/pages/context/modal/hooks/useModal";

export const ProductCartEditModal = () => {
	const { state, handleShowModal } = useModal();

	return (
		<Dialog
			open={state?.productCartEditModal}
			onOpenChange={handleShowModal({
				key: "productCartEditModal",
				value: false,
			})}
		>
			<DialogContent className="max-w-2xl">
				<DialogHeader>
					<DialogTitle>Producto 1</DialogTitle>
				</DialogHeader>
				{/* <Form>
					<form
					// onSubmit={form.handleSubmit((values) => console.log(values))}
					>
						<FormField
							// control={form.control}
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
							// control={form.control}
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
							// control={form.control}
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

						<Button
							// onClick={() => console.log("AAAAAAAAaa")}
							// onClick={form.handleSubmit((values) => console.log(values))}
							variant="default"
							className="col-span-2"
							type="submit"
						>
							Crear
						</Button>
					</form>
				</Form> */}
			</DialogContent>
		</Dialog>
	);
};
