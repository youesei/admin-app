import { useContext } from "react";
import { ResetPassContext } from "../context";
import type { ResetPassContextTypes } from "../types";

export const useResetPassContext = () => {
	const context = useContext(ResetPassContext) as ResetPassContextTypes;

	if (!context) {
		throw Error("Error!!, el proveedor de contexto no esta definido.");
	}

	return { ...context };
};
