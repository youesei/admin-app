import { Button } from "@/components/ui/button";
import { InfoPopup } from "@/pages/components/InfoPopup";
import { useBrowse } from "@/pages/hooks/useBrowse";
import { CHARGE_ROUTES } from "../const/SalesConsts";

export const CartFooter = () => {
	const { handleNavigate, pathname } = useBrowse();

	const handleCharge = () => {
		const route = CHARGE_ROUTES[pathname];
		handleNavigate(route)();
	};

	return (
		<footer className="grid self-end grid-cols-3 items-center gap-2 p-3 shadow-[rgba(0,0,0.8,0.2)_0px_-2px_5px_0px]">
			<div>
				<InfoPopup content={<span>$32323323223</span>}>
					<span className="font-semibold">SubTotal:</span>
					<span className="truncate">$32323323223</span>
				</InfoPopup>

				<InfoPopup content={<span>$32323</span>}>
					<span className="font-semibold">Descuento:</span>
					<span className="truncate">$32323</span>
				</InfoPopup>
			</div>

			<InfoPopup content={<span>$$323232323222222222222222222222222222</span>}>
				<span className="font-semibold">Total:</span>
				<span className="truncate">$323232323222222222222222222222222222</span>
			</InfoPopup>

			<Button onClick={handleCharge} className="px-4 py-6 text-lg uppercase">
				Cobrar
			</Button>
		</footer>
	);
};
