import { type ReactNode, createContext, useState } from "react";
import type { ResetPassContextTypes, ResetPassStateTypes } from "../types";

export const ResetPassContext = createContext<ResetPassContextTypes | null>(
	null,
);

export const ResetPassProvider = ({ children }: { children: ReactNode }) => {
	const [state, setState] = useState<ResetPassStateTypes>({
		email: "",
		code: "",
		password: "",
		confirmpassword: "",
		route: "sendCode",
		sectionTitle: "Restablecer Contraseña",
	});

	const handleChangeState = (data: Partial<ResetPassStateTypes>) => {
		setState((prevState) => ({ ...prevState, ...data }));
	};

	return (
		<ResetPassContext.Provider
			value={{
				...state,
				handleChangeState,
			}}
		>
			{children}
		</ResetPassContext.Provider>
	);
};
