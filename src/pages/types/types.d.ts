import type { ColumnDef } from "@tanstack/react-table";
import type { ChildrenTypes } from "@types/types.d";
import type { ReactNode } from "react";
import type { Location } from "react-router-dom";

export interface ConditionalWrapperTypes extends ChildrenTypes {
	condition: boolean;
}

export interface InfoPopupTypes extends ChildrenTypes {
	content: ReactNode;
	className?: string;
}

export interface useTableTypes<TData> {
	data: TData[];
	columns: ColumnDef<TData, unknown>[];
}

export interface handleChangePropsTypes {
	data: { key: string; value: string };
	callback: ({ key, value }: { key: string; value: string }) => void;
}

export type RoutesTypes =
	| "/login"
	| "/register"
	| "/resetpass"
	| "/profile"
	| "/business"
	| "/modules"
	| "/sales"
	| "/sales/checkout"
	| "/sales/paymentsummary"
	| "/inventory"
	| "/contacts"
	| "/delivery"
	| "/reports"
	| "/shifts"
	| "/accounting"
	| "/settings";

export interface RouteTypes {
	route: RoutesTypes;
}

interface TypedLocation extends Location {
	pathname: RoutesTypes;
}

export interface GoBackButtonTypes extends RouteTypes {}
export interface MenuButtonLogoutTypes extends ChildrenTypes {}
