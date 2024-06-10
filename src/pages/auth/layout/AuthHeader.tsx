export const AuthHeader = ({ title }: { title: string }) => {
	return (
		<header className="flex flex-col items-center pb-5 gap-y-5">
			<h1 className="text-4xl font-bold">{title}</h1>
		</header>
	);
};
