import {
	AccountingIcon,
	CashRegisterIcon,
	ContactsIcon,
	DeliveryIcon,
	InventoryIcon,
	ReportsIcon,
	SettingsIcon,
	TurnIcon,
} from "@/components/icons/components/Icons";
import { ROUTES } from "@/constants/globalConsts";
import { GoBackButton } from "@/pages/components/GoBackButton";
import { LogoutButton } from "@/pages/components/LogoutButton";
import { ModulesLayout } from "../layout/ModulesLayout";

export const ModulesPage = () => {
	return (
		<article className="grid py-4 size-full grid-rows-[min-content_auto_min-content] justify-normal">
			<header className="pl-10">
				<GoBackButton route={ROUTES.BUSINESS} />
			</header>

			<section className="grid items-start justify-center h-full">
				<header className="flex flex-col items-center justify-center h-full gap-y-2">
					<h2 className="text-3xl font-bold">Bienvenido</h2>
					<h3 className="text-base">¿Qué deseas hacer?</h3>
				</header>
				<main className="grid grid-cols-4 gap-10 max-w-fit">
					<ModulesLayout title="ventas">
						<CashRegisterIcon width="4rem" height="4rem" />
					</ModulesLayout>
					<ModulesLayout title="inventario">
						<InventoryIcon width="4rem" height="4rem" />
					</ModulesLayout>
					<ModulesLayout title="contactos">
						<ContactsIcon width="4rem" height="4rem" />
					</ModulesLayout>
					<ModulesLayout title="domicilios">
						<DeliveryIcon width="4rem" height="4rem" />
					</ModulesLayout>
					<ModulesLayout title="reportes">
						<ReportsIcon width="4rem" height="4rem" />
					</ModulesLayout>
					<ModulesLayout title="turnos">
						<TurnIcon width="4rem" height="4rem" />
					</ModulesLayout>
					<ModulesLayout title="contabilidad">
						<AccountingIcon width="4rem" height="4rem" />
					</ModulesLayout>
					<ModulesLayout title="configuración">
						<SettingsIcon width="4rem" height="4rem" />
					</ModulesLayout>
				</main>
			</section>

			<footer className="flex justify-center">
				<LogoutButton />
			</footer>
		</article>
	);
};
