import {
	getCoreRowModel,
	getSortedRowModel,
	useReactTable,
	type SortingState,
} from "@tanstack/react-table";
import { useState } from "react";
import type { useTableTypes } from "../types/types.d";

export const useTable = <TData>({ data, columns }: useTableTypes<TData>) => {
	const [sorting, setSorting] = useState<SortingState>([]);

	const table = useReactTable<TData>({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onSortingChange: setSorting,
		isMultiSortEvent: () => true,
		state: {
			sorting,
		},
	});

	return { table };
};
