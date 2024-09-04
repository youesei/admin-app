import { Button } from "@/components/ui/button";

export const CheckoutPage = () => {
	return (
		<main className="flex flex-col items-center justify-center h-screen">
			<p>Total a pagar:</p>
			<select>
				<option>Efectivo</option>
				<option>Pagos por tarjeta</option>
				<option>Otros pagos</option>
				<option>Pagos en linea</option>
			</select>
			<input />
			<footer>
				<Button>$10.000</Button>
				<Button>$20.000</Button>
				<Button>$50.000</Button>
				<Button>$100.000</Button>
			</footer>
		</main>
	);
};
