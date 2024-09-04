import type { AppLayoutTypes } from "../types/types";

export const AppLayout = ({ children }: AppLayoutTypes) => {
	return (
		<main className="flex flex-col items-center justify-center h-screen">
			{children}
		</main>
	);
};
