import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@types": path.resolve(__dirname, "./src/types"),
			"@constants": path.resolve(__dirname, "./src/constants"),
			"@ui": path.resolve(__dirname, "./src/components/ui"),
			"@icons": path.resolve(__dirname, "./src/components/icons/components"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@context": path.resolve(__dirname, "./src/pages/context"),
			"@hooks": path.resolve(__dirname, "./src/pages/hooks"),
			"@schemas": path.resolve(__dirname, "./src/pages/schemas"),
			"@reducers": path.resolve(__dirname, "./src/pages/reducers"),
		},
		// alias: [
		// 	{
		// 		find: "@",
		// 		replacement: path.resolve(__dirname, "src"),
		// 	},
		// 	{
		// 		find: "@pages",
		// 		replacement: path.resolve(__dirname, "/src/pages"),
		// 	},
		// 	{
		// 		find: "@const",
		// 		replacement: path.resolve(__dirname, "/src/const"),
		// 	},
		// 	{
		// 		find: "@ui",
		// 		replacement: path.resolve(__dirname, "/src/components/ui"),
		// 	},
		// 	{
		// 		find: "@icons",
		// 		replacement: path.resolve(__dirname, "/src/components/icons"),
		// 	},
		// 	{
		// 		find: "@components",
		// 		replacement: path.resolve(__dirname, "/src/pages/components"),
		// 	},
		// 	{
		// 		find: "@schemas",
		// 		replacement: path.resolve(__dirname, "/src/pages/schemas"),
		// 	},
		// 	{
		// 		find: "@models",
		// 		replacement: path.resolve(__dirname, "/src/pages/models"),
		// 	},
		// 	{
		// 		find: "@hooks",
		// 		replacement: path.resolve(__dirname, "/src/pages/hooks"),
		// 	},
		// 	{
		// 		find: "@authLayout",
		// 		replacement: path.resolve(__dirname, "/src/pages/auth"),
		// 	},
		// ],
	},
});
