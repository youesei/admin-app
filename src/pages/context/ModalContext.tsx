import { type ReactNode, createContext, useState } from "react";
import type { ModalContextTypes } from "../types";

export const ModalContext = createContext<ModalContextTypes | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [show, setShow] = useState(false);

	const handleModal = (value: boolean) => {
		setShow(value);
	};

	return (
		<ModalContext.Provider
			value={{
				show,
				handleModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};
