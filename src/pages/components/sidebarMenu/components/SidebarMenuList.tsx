import { memo } from "react";
import { ICON_SIZE_MENU } from "../contanst/sidebarConstanst";
import { MENU_LIST_OPTIONS } from "../data/MenuListOptions";
import { SidebarMenuButton } from "./SidebarMenuButton";

export const SidebarMenuList = memo(() => {
	return MENU_LIST_OPTIONS.map(({ key, label, icon, route }) => (
		<SidebarMenuButton key={key} route={route}>
			{icon({ ...ICON_SIZE_MENU })}
			{label}
		</SidebarMenuButton>
	));
});
