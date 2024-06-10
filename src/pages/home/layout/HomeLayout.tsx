import { AppLayout } from "@/layout";
import { HomeBar } from "../components";
import type { ReactNode } from "react";

export const HomeLayout = ({
	children,
	title,
}: { children: ReactNode; title?: string }) => {
	return (
		<AppLayout>
			<section className="flex w-full h-full p-10 gap-x-4">
				<HomeBar />
				<div className="grid w-full py-4 grid-rows-[auto_1fr] gap-y-4">
					<header className="px-2">
						<h1 className="text-2xl font-bold">{title}</h1>
					</header>
					{children}
				</div>
			</section>
		</AppLayout>
	);
};
