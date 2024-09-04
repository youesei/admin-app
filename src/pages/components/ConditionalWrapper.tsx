import type { ConditionalWrapperTypes } from "../types/types.d";

export const ConditionalWrapper = ({
	condition,
	children,
}: ConditionalWrapperTypes) => {
	return <>{condition ? children : null}</>;
};
