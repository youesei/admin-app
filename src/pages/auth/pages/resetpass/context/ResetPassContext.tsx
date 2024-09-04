import { createContext, useState } from "react";
import type {
	ResetPassContextTypes,
	ResetPassProviderTypes,
	ResetPassStateTypes,
} from "../types/types.d";

export const ResetPassContext = createContext<ResetPassContextTypes | null>(
	null,
);

export const ResetPassProvider = ({ children }: ResetPassProviderTypes) => {
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
