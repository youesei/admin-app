interface handleChangePropsTypes {
	data: { key: string; value: string };
	callback: ({ key, value }: { key: string; value: string }) => void;
}
export const handleChangeProps = ({
	data,
	callback,
}: handleChangePropsTypes) => {
	callback(data);
};
