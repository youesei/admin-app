import { TableIcon, UserIcon } from "@/components/icons/components/Icons";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/globalConsts";
import { useModalStoreHandler } from "@/hooks/useModalStoreHandler";
import { ConditionalWrapper } from "@/pages/components/ConditionalWrapper";
import { useModal } from "@/pages/context/modal/hooks/useModal";
import { useBrowse } from "@/pages/hooks/useBrowse";
// import { Profiler, useEffect, useState } from "react";
import { ClientModal } from "./ClientModal";
import { TablesModal } from "./TablesModal";

export const CartHeader = () => {
	const { handleShowModal } = useModal();
	const { pathname } = useBrowse();
	// const { handleShowModal } = useModalStoreHandler()

	return (
		<header className="flex items-center justify-between p-3 shadow-2xl bg-primary">
			<Button
				// disabled={true}
				className="shadow gap-x-2 disabled:opacity-100 "
				// onClick={handleShowModal({ key: "clientModal", value: true })}
				// onClick={() => {
				// 	console.time('handleShowModal to state update');
				// 	// handleShowModal({ key: "clientModal", value: true })
				// }}
				variant="white"
			>
				<UserIcon />
				<span className="max-w-[110px] truncate">
					DISTRIPLASTICO PINBALL S.A.S
				</span>
			</Button>
			<ClientModal />

			<ConditionalWrapper condition={pathname === ROUTES.SALES}>
				<Button
					variant="outline"
					className="shadow gap-x-2"
					onClick={handleShowModal({ key: "tablesModal", value: true })}
				// onClick={() =>
				// 	handleShowModal({ key: "tablesModal", value: true })
				// }
				// onClick={() => handleShowModal(true)}
				>
					<TableIcon />
					Mesas
				</Button>
				{/* <Profiler id="Modals" onRender={onRender}> */}
				<TablesModal />
				{/* </Profiler> */}
			</ConditionalWrapper>
		</header>
	);
};
