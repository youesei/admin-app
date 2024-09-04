import type { ChildrenTypes } from "@/types/types";

export type ModalOptions =
	| "createBusinessModal"
	| "clientModal"
	| "tablesModal"
	| "productCartEditModal";

export interface ModalContextTypes {
	createBusinessModal: boolean;
	clientModal: boolean;
	tablesModal: boolean;
	productCartEditModal: boolean;
	handleShowModal: (data: handleShowModalDataTypes) => () => void;
}

interface handleShowModalDataTypes {
	key: ModalOptions;
	value: boolean;
}

export interface ModalProviderTypes extends ChildrenTypes {}
