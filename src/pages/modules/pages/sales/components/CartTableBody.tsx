import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { InfoPopup } from "@/pages/components/InfoPopup";
import { useModal } from "@/pages/context/modal/hooks/useModal";
import { flexRender } from "@tanstack/react-table";
import type { CartTableHeaderTypes, CellWithInfoTypes } from "../types/types";

export const CartTableBody = ({ table }: CartTableHeaderTypes) => {
	const { handleShowModal } = useModal();
	return (
		<TableBody>
			{table.getRowModel().rows.map((row) => (
				<TableRow
					className="cursor-pointer"
					key={row.id}
					onClick={handleShowModal({
						key: "productCartEditModal",
						value: true,
					})}
				>
					{row.getVisibleCells().map((cell) => {
						const isActionsHeader = cell.column.columnDef.header === "Acciones";
						return (
							<TableCell
								key={cell.id}
								style={{
									minWidth: cell.column.columnDef.size,
									maxWidth: cell.column.columnDef.size,
								}}
							>
								{isActionsHeader ? (
									flexRender(cell.column.columnDef.cell, cell.getContext())
								) : (
									<CellWithInfo cell={cell} />
								)}
							</TableCell>
						);
					})}
				</TableRow>
			))}
		</TableBody>
	);
};

const CellWithInfo = ({ cell }: CellWithInfoTypes) => {
	return (
		<InfoPopup
			className="justify-center"
			content={flexRender(cell.column.columnDef.cell, cell.getContext())}
		>
			<span className="truncate">
				{flexRender(cell.column.columnDef.cell, cell.getContext())}
			</span>
		</InfoPopup>
	);
};
