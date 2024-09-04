import type { Cell, Header, Table } from "@tanstack/react-table";

export interface CartTableColumnTypes {
	nombre: string;
	cantidad: number;
	precio_unitario: number;
	total: number;
	id: string;
}

export interface CartTableTypes {
	table: Table<CartTableColumnTypes>;
}

export interface CartTableCellTypes {
	cell: Cell<CartTableColumnTypes, unknown>;
}

export interface CartTableHeaderButtonTypes {
	header: Header<CartTableColumnTypes, unknown>;
}

export interface CellWithInfoTypes extends CartTableCellTypes {}

export interface CartTableHeaderTypes extends CartTableTypes {}

export interface ColumnSort {
	id: string;
	desc: boolean;
}
