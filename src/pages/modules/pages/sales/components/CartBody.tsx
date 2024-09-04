import { Table } from "@/components/ui/table";
import { ROUTES } from "@/constants/globalConsts";
import { ConditionalWrapper } from "@/pages/components/ConditionalWrapper";
import { useBrowse } from "@/pages/hooks/useBrowse";
import { useTable } from "@/pages/hooks/useTable";
import { CART_TABLE_COLUMNS } from "../const/SalesConsts";
import data from "../data/data.json";
import { CartTableBody } from "./CartTableBody";
import { CartTableHeader } from "./CartTableHeader";
import { ProductCartEditModal } from "./ProductCartEditModal";
import { SearchByCode } from "./SearchByCode";

export const CartBody = () => {
	const { pathname } = useBrowse();
	const { table } = useTable({
		data,
		columns: CART_TABLE_COLUMNS,
	});

	const maxHeight =
		pathname === ROUTES.SALES
			? "max-h-[calc(100vh_-_183px)]"
			: "max-h-[calc(100vh_-_142px)]";
	// console.log('AAAAAAA');
	return (
		<main className="relative overflow-y-hidden">
			<ConditionalWrapper condition={pathname === ROUTES.SALES}>
				<SearchByCode />
			</ConditionalWrapper>
			<Table containerClassName={maxHeight}>
				<CartTableHeader table={table} />
				<CartTableBody table={table} />
			</Table>
			<ProductCartEditModal />
			{/* <ClearCart /> */}
		</main>
	);
};
