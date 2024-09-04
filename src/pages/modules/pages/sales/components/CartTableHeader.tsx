import { CaretIcon } from "@/components/icons/components/Icons";
import { Button } from "@/components/ui/button";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender } from "@tanstack/react-table";
import type {
  CartTableHeaderButtonTypes,
  CartTableHeaderTypes,
} from "../types/types";

export const CartTableHeader = ({ table }: CartTableHeaderTypes) => {
  return (
    <TableHeader className="sticky top-0 bg-card">
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const isActionsHeader =
              header.column.columnDef.header === "Acciones";
            return (
              <TableHead
                key={header.id}
                className="p-0 text-center"
                style={{
                  minWidth: header.column.columnDef.size,
                  maxWidth: header.column.columnDef.size,
                }}
              >
                {!isActionsHeader ? (
                  <CartTableHeaderButton header={header} />
                ) : (
                  <>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </>
                )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
};

const CartTableHeaderButton = ({ header }: CartTableHeaderButtonTypes) => {
  const keySort = header.column.getIsSorted();
  // console.log(`${header.column.columnDef.header}`, keySort);
  const AscSortColor = keySort === "asc" ? "#fff" : "hsl(240, 5%, 64.9%)";
  const DescSortColor = keySort === "desc" ? "#fff" : "hsl(240, 5%, 64.9%)";

  const hasFocus =
    keySort === "asc" || keySort === "desc"
      ? "text-white"
      : "text-muted-foreground";

  return (
    <Button
      onClick={header.column.getToggleSortingHandler()}
      className={`p-0 hover:bg-transparent ${hasFocus} `}
      variant="ghost"
    >
      {flexRender(header.column.columnDef.header, header.getContext())}
      <CaretIcon upColor={AscSortColor} downColor={DescSortColor} />
    </Button>
  );
};
