import { useContext } from "react";
import { ModalContext } from "../context";

export const useModal = () => {
	const context = useContext(ModalContext);

	if (!context) {
		throw Error("Error!!, el proveedor de contexto no esta definido.");
	}

	return { ...context };
};
