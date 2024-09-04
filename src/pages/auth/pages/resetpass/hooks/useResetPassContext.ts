import { useContext } from "react";
import { ResetPassContext } from "../context/ResetPassContext";
import type { ResetPassContextTypes } from "../types/types.d";

export const useResetPassContext = () => {
	const context = useContext(ResetPassContext) as ResetPassContextTypes;

	if (!context) {
		throw Error("Error!!, el proveedor de contexto no esta definido.");
	}

	return { ...context };
};
