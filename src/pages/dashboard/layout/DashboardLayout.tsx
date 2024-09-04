import { DashboardMenu } from "../components/DashboardMenu";
import type { DashboardLayoutTypes } from "../types/types";

export const DashboardLayout = ({ children, title }: DashboardLayoutTypes) => {
	return (
		<section className="flex w-full h-full p-10 gap-x-4">
			<DashboardMenu />
			<div className="grid w-full py-4 grid-rows-[auto_1fr] gap-y-4">
				<header className="px-2">
					<h1 className="text-2xl font-bold">{title}</h1>
				</header>
				{children}
			</div>
		</section>
	);
};
