import type { ActionTypes } from "./types/types";
import { createUpdateStateByAction } from "./utils/createUpdateStateByAction";

export const stateManagerReducer = <TState>(
	state: TState,
	action: ActionTypes<TState>,
): TState => {
	const updateStateByAction = createUpdateStateByAction<TState>();
	const updateState = updateStateByAction[action.type];
	return updateState ? updateState(state, action) : state;
};
