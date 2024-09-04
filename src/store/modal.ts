import type { handleShowModalDataTypes } from "@/pages/context/modal/types/types";
import { create } from "zustand";

interface ModalState {
	createBusinessModal: false;
	clientModal: false;
	tablesModal: false;
	productCartEditModal: false;
	handleShowModal: (data: handleShowModalDataTypes) => void;
}

export const useModalStore = create<ModalState>()((set, get) => {
	return {
		createBusinessModal: false,
		clientModal: false,
		tablesModal: false,
		productCartEditModal: false,
		handleShowModal: (data: Partial<ModalState>) => {
			const state = get();
			console.log(state);
			console.log(data);
			set({ ...state, [data.key]: data.value });
		},
	};
});
