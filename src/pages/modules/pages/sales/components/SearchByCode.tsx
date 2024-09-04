import { Command, CommandInput } from "@/components/ui/command";

export const SearchByCode = () => {
	return (
		<Command className="w-full h-auto">
			<CommandInput placeholder="Añadir producto por codigo." />
		</Command>
	);
};
