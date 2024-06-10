import type { ReactNode } from "react";

export const AppLayout = ({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<main
			className={`flex flex-col items-center justify-center h-screen ${className}`}
		>
			{children}
		</main>
	);
};
