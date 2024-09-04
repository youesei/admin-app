import { HamburguerMenu, LogoutIcon } from "@icons/Icons";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@ui/sheet";
import { AvatarDisplay } from "../../AvatarDisplay";
import { MenuButtonLogout } from "../../MenuButtonLogout";
import { ICON_SIZE_MENU } from "../contanst/sidebarConstanst";
import { SidebarMenuList } from "./SidebarMenuList";

export const SidebarMenu = () => {
	return (
		<Sheet>
			<SheetTrigger className="p-2 hover:shadow-lg">
				<HamburguerMenu height="1.5rem" width="1.5rem" />
			</SheetTrigger>

			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle className="grid mb-2 gap-y-4 place-items-center">
						<AvatarDisplay
							name="Daniel Montilla "
							imageUrl="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						/>
					</SheetTitle>
				</SheetHeader>

				<main className="flex flex-col overflow-y-auto max-h-[calc(100vh_-_230px)] scrollbar-hide gap-y-2">
					<SidebarMenuList />
					<MenuButtonLogout>
						<LogoutIcon stroke="currentcolor" {...ICON_SIZE_MENU} />
						cerrar sesión
					</MenuButtonLogout>
				</main>
			</SheetContent>
		</Sheet>
	);
};
