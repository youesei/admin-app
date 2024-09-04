import { useBrowse } from "../../../hooks/useBrowse";
import { NAV_BAR_OPTIONS } from "../data/NavbarOptions";

export const Navbar = () => {
	const { pathname } = useBrowse();
	const navElements = NAV_BAR_OPTIONS[pathname];

	return (
		<nav className="flex bg-primary h-[70px] w-full justify-start items-center px-3">
			{navElements ? navElements() : null}
		</nav>
	);
};
