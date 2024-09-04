import { ROUTES } from "@constants/globalConsts";
import { ConditionalWrapper } from "@pages/components/ConditionalWrapper";
import { Navbar } from "@pages/components/navbar/components/Navbar";
import { useBrowse } from "@pages/hooks/useBrowse";
import { Outlet } from "react-router-dom";
import { Cart } from "../components/Cart";

export const SalesLayout = () => {
	const { pathname } = useBrowse();
	return (
		<section className="grid size-full grid-cols-[auto_min-content]">
			<div className="grid grid-rows-[70px_min-content_1fr] overflow-hidden">
				<Navbar />
				<Outlet />
			</div>
			<ConditionalWrapper condition={pathname !== ROUTES.PAYMENTSUMMARY}>
				<Cart />
			</ConditionalWrapper>
		</section>
	);
};
