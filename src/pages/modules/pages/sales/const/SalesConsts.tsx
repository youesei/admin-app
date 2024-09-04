import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/globalConsts";
import { TrashIcon } from "@radix-ui/react-icons";
import type { ColumnDef } from "@tanstack/react-table";
import type { CartTableColumnTypes } from "../types/types";

export const CART_TABLE_COLUMNS: ColumnDef<CartTableColumnTypes>[] = [
	{
		header: "Nombre",
		accessorKey: "nombre",
		size: 30,
		enableMultiSort: true,
	},
	{
		header: "Cantidad",
		accessorKey: "cantidad",
		size: 20,
		enableMultiSort: true,
	},
	{
		header: "P. Unitario",
		accessorKey: "precio_unitario",
		size: 20,
	},
	{
		header: "Total",
		accessorKey: "total",
		size: 15,
	},
	{
		id: "actions",
		header: "Acciones",
		size: 19,
		cell: ({ row }) => (
			<Button
				className="bg-transparent text-destructive hover:bg-transparent hover:text-white"
				onClick={(event) => {
					event.stopPropagation();
					// console.log(row);
				}}
			>
				<TrashIcon color="currentcolor" width="1.4rem" height="1.4rem" />
			</Button>
		),
	},
];

export const CHARGE_ROUTES = {
	[ROUTES.SALES]: ROUTES.CHECKOUT,
	[ROUTES.CHECKOUT]: ROUTES.PAYMENTSUMMARY,
} as const;
