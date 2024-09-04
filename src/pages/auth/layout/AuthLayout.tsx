import type { AuthLayoutTypes } from "../types/types.d";

export const AuthLayout = ({ children, className }: AuthLayoutTypes) => {
	return (
		<section
			className={`grid w-full p-10 place-items-center rounded-xl bg-card ${className}`}
		>
			{children}
		</section>
	);
};
