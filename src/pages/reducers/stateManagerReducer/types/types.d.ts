export type StateManagerActionsTypes = "SET_STATE" | "UPDATE_STATE";

interface ActionTypes<TState> {
	type: StateManagerActionsTypes;
	payload: {
		key: keyof TState;
		value: TState[keyof TState];
	};
}

export type createUpdateStateByActionTypes<TState> = Record<
	StateManagerActionsTypes,
	(state: TState, action: ActionTypes<TState>) => TState
>;
