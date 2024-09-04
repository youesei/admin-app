import { ROUTES } from "@constants/globalConsts";
import { useBrowse } from "@hooks/useBrowse";
import { StoreIcon, UserIcon } from "@icons/Icons";
import { LogoutButton } from "@pages/components/LogoutButton";
import { Toggle } from "@ui/toggle";

export const DashboardMenu = () => {
	const { handleNavigate, pathname } = useBrowse();

	return (
		<nav className="flex flex-col justify-between h-full p-3 rounded-3xl bg-card">
			<div className="flex flex-col justify-center items-4enter gap-y-4 grow">
				<li className="list-none">
					<Toggle
						onClick={handleNavigate(ROUTES.BUSINESS)}
						pressed={pathname === ROUTES.BUSINESS}
						className="px-3 py-6"
						aria-label="business"
					>
						<StoreIcon width="1.8rem" height="1.8rem" />
					</Toggle>
				</li>
				<li className="list-none">
					<Toggle
						onClick={handleNavigate(ROUTES.PROFILE)}
						pressed={pathname === ROUTES.PROFILE}
						className="px-3 py-6"
						aria-label="profile"
					>
						<UserIcon width="1.8rem" height="1.8rem" />
					</Toggle>
				</li>
			</div>
			<li className="list-none">
				<LogoutButton />
			</li>
		</nav>
	);
};
