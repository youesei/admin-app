import type { handleChangePropsTypes } from "../types/types.d";

export const handleChangeProps = ({
	data,
	callback,
}: handleChangePropsTypes) => {
	callback(data);
};
