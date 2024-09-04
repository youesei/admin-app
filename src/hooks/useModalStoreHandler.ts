import { useModalStore } from "@/store/modal";

export const useModalStoreHandler = () => {
	const tablesModal = useModalStore((state) => state.tablesModal);
	const handleShowModal = useModalStore((state) => state.handleShowModal);

	return {
		tablesModal,
		handleShowModal,
	};
};
