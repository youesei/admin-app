// import type { ActionTypes, PayloadTypes } from "../types/types";
import { useReducer } from "react";
import { STATE_MANAGER_ACTIONS } from "../constanst/stateManagerConts";
import { stateManagerReducer } from "../stateManagerReducer";

export const useStateManagerReducer = <TState>(initialState: TState) => {
	const [state, dispatch] = useReducer(
		stateManagerReducer<TState>,
		initialState,
	);

	const setItemProp = <K extends keyof TState>({
		key,
		value,
	}: { key: K; value: TState[K] }) =>
		dispatch({
			type: STATE_MANAGER_ACTIONS.SET_STATE,
			payload: { key, value },
		});

	return { state, setItemProp };
};
