import type { handleShowModalDataTypes } from "../types/types";

export const MODAL_PROVIDER_DEFAULT_VALUES = {
	createBusinessModal: false,
	clientModal: false,
	tablesModal: false,
	productCartEditModal: false,
	handleShowModal: (_data: handleShowModalDataTypes) => () => {},
};
