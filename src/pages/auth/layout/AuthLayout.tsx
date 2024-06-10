import { AppLayout } from "@/layout";
import type { ReactNode } from "react";

export const AuthLayout = ({
	children,
	className,
}: { children: ReactNode; className?: string }) => {
	return (
		<AppLayout>
			<section
				className={`grid w-full p-10 place-items-center rounded-xl bg-card ${className}`}
			>
				{children}
			</section>
		</AppLayout>
	);
};
