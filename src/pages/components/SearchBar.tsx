import { Command, CommandInput } from "@/components/ui/command";

export const SearchBar = () => {
	return (
		<Command className="w-full">
			<CommandInput
				className="min-w-64"
				placeholder="Type a command or search..."
			/>
		</Command>
	);
};
