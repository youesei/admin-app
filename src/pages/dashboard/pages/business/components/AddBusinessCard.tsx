import { PlusIcon } from "@icons/Icons";
import { useModal } from "@pages/context/modal/hooks/useModal";
import { CardDescription, CardHeader, CardTitle } from "@ui/card";
import { CardLayout } from "../layout/CardLayout";
import { CreateBusiness } from "./CreateBusiness";

export const AddBusinessCard = () => {
	const { handleShowModal } = useModal();
	return (
		<>
			<CardLayout
				className="bg-neutral-800"
				onClick={handleShowModal({ key: "createBusiness", value: true })}
			>
				<CardHeader className="flex items-center justify-center p-0">
					<CardTitle className="p-4 rounded-full bg-background/30">
						<PlusIcon width="1.5rem" height="1.5rem" />
					</CardTitle>
					<CardDescription>Crear Negocio</CardDescription>
				</CardHeader>
			</CardLayout>
			<CreateBusiness />
		</>
	);
};
