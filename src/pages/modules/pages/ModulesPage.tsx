import {
	AccountingIcon,
	CartIcon,
	ContactsIcon,
	DeliveryIcon,
	InventoryIcon,
	ReportsIcon,
	SettingsIcon,
	TurnIcon,
} from "@/components/icons";
import { AppLayout } from "@/layout";

export const ModulesPage = () => {
	return (
		<AppLayout>
			<section className="grid grid-cols-4 gap-10">
				<div className="p-5 cursor-pointer bg-card rounded-2xl">
					<CartIcon width="4rem" height="4rem" />
				</div>
				<div className="p-5 cursor-pointer bg-card rounded-2xl">
					<InventoryIcon width="4rem" height="4rem" />
				</div>
				<div className="p-5 cursor-pointer bg-card rounded-2xl">
					<ContactsIcon width="4rem" height="4rem" />
				</div>
				<div className="p-5 cursor-pointer bg-card rounded-2xl">
					<DeliveryIcon width="4rem" height="4rem" />
				</div>
				<div className="p-5 cursor-pointer bg-card rounded-2xl">
					<ReportsIcon width="4rem" height="4rem" />
				</div>
				<div className="p-5 cursor-pointer bg-card rounded-2xl">
					<SettingsIcon width="4rem" height="4rem" />
				</div>
				<div className="p-5 cursor-pointer bg-card rounded-2xl">
					<TurnIcon width="4rem" height="4rem" />
				</div>
				<div className="p-5 cursor-pointer bg-card rounded-2xl">
					<AccountingIcon width="4rem" height="4rem" />
				</div>
			</section>
		</AppLayout>
	);
};
