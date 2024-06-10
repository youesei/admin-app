import { Toggle } from "@/components/ui";
import { LogoutIcon, StoreIcon, UserIcon } from "@/components/icons";
import { useLocation, useNavigate } from "react-router-dom";

type RouteTypes = "/business" | "/profile";

export const HomeBar = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const handleNavigate = (route: RouteTypes) => () => {
		navigate(route);
	};

	return (
		<nav className="flex flex-col justify-between h-full p-3 rounded-3xl bg-card">
			<div className="flex flex-col justify-center items-4enter gap-y-4 grow">
				<li className="list-none">
					<Toggle
						onClick={handleNavigate("/business")}
						pressed={pathname === "/business"}
						className="px-3 py-6"
						aria-label="business"
					>
						<StoreIcon width="1.8rem" height="1.8rem" />
					</Toggle>
				</li>
				<li className="list-none">
					<Toggle
						onClick={handleNavigate("/profile")}
						pressed={pathname === "/profile"}
						className="px-3 py-6"
						aria-label="profile"
					>
						<UserIcon width="1.8rem" height="1.8rem" />
					</Toggle>
				</li>
			</div>
			<li className="list-none">
				<Toggle pressed={false} className="px-3 py-6" aria-label="business">
					<LogoutIcon width="1.8rem" height="1.8rem" />
				</Toggle>
			</li>
		</nav>
	);
};
