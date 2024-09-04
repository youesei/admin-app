import { CartBody } from "./CartBody";
import { CartFooter } from "./CartFooter";
import { CartHeader } from "./CartHeader";

export const Cart = () => {
	console.log('AAAAAAAAA')
	return (
		<aside className="grid w-[400px] grid-rows-[70px_minmax(0,1fr)_min-content] h-screen bg-card">
			<CartHeader />
			<CartBody />
			<CartFooter />
		</aside>
	);
};
