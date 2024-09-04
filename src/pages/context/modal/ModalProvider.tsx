import { useStateManagerReducer } from "@reducers/stateManagerReducer/hooks/useStateManagerReducer";
import { createContext, useCallback, useEffect } from "react";
import { MODAL_PROVIDER_DEFAULT_VALUES } from "./constants/ModalProviderConsts";
import type { ModalContextTypes, ModalProviderTypes, handleShowModalDataTypes } from "./types/types";

export const ModalContext = createContext<ModalContextTypes>(MODAL_PROVIDER_DEFAULT_VALUES);

export const ModalProvider = ({ children }: ModalProviderTypes) => {
	const { state, setItemProp } = useStateManagerReducer<ModalContextTypes>(MODAL_PROVIDER_DEFAULT_VALUES);

	const handleShowModal = useCallback(
		(data: handleShowModalDataTypes) => () => {
			console.time('handleShowModal to state update');
			setItemProp(data);
		},
		[setItemProp]
	);

	useEffect(() => {
		console.timeEnd('handleShowModal to state update');
	}, [state]);

	return (
		<ModalContext.Provider
			value={{
				...state,
				handleShowModal
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};
