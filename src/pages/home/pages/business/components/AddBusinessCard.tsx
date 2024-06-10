import { PlusIcon } from "@/components/icons";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { CardLayout } from "../layout";
import { CreateBusiness } from "./CreateBusiness";
import { useModal } from "@/pages/hooks";

export const AddBusinessCard = () => {
	const { handleModal } = useModal();
	return (
		<>
			<CardLayout onClick={() => handleModal(true)} className="bg-neutral-800">
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
