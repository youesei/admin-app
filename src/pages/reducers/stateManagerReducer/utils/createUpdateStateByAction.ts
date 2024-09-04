import { STATE_MANAGER_ACTIONS } from "../constanst/stateManagerConts";
import type { createUpdateStateByActionTypes } from "../types/types";

export const createUpdateStateByAction = <
	TState,
>(): createUpdateStateByActionTypes<TState> => ({
	[STATE_MANAGER_ACTIONS.SET_STATE]: (state, action) => {
		const newState = { ...state, [action.payload.key]: action.payload.value };
		return newState;
	},
	[STATE_MANAGER_ACTIONS.UPDATE_STATE]: (state, action) => {
		console.log(action);
		return state;
	},
});
