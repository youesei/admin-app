import { SettingsIcon } from "@/components/icons/components/Icons";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const TabBar = () => {
	return (
		<header className="flex justify-between gap-3 m-3">
			<Tabs
				defaultValue="account"
				className="overflow-x-scroll w-[40rem] grow scrollbar-hide"
			>
				<TabsList>
					<TabsTrigger value="account">Bebidas</TabsTrigger>
					<TabsTrigger value="comidas">Comidas</TabsTrigger>
					<TabsTrigger value="potres">Postres</TabsTrigger>
					<TabsTrigger value="proteinas">Proteinas</TabsTrigger>
					<TabsTrigger value="adicionales">Adicionales</TabsTrigger>
					<TabsTrigger value="adicionales">Adicionales</TabsTrigger>
					<TabsTrigger value="adicionales">Adicionales</TabsTrigger>
					<TabsTrigger value="adicionales">Adicionales</TabsTrigger>
					<TabsTrigger value="adicionales">Adicionales</TabsTrigger>
					<TabsTrigger value="adicionales">Adicionales</TabsTrigger>
					<TabsTrigger value="adicionales">Adicionales</TabsTrigger>
					<TabsTrigger value="adicionales">Adicionales</TabsTrigger>
					<TabsTrigger value="adicionales">Adicionales</TabsTrigger>
					<TabsTrigger value="adicionales">Adicionales</TabsTrigger>
					<TabsTrigger value="adicionales">Adicionales</TabsTrigger>
					<TabsTrigger value="adicionales">Adicionales</TabsTrigger>
				</TabsList>
			</Tabs>

			<Button variant="ghost">
				<SettingsIcon height="1.5rem" width="1.5rem" />
			</Button>
		</header>
	);
};
