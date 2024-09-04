import { ModalProvider } from "@/pages/context/modal/ModalProvider";
import { AppLayout } from "./layout/components/AppLayout";
import { AppRouter } from "./router/AppRouter";

function App() {
	return (
		<ModalProvider>
			<AppLayout>
				<AppRouter />
			</AppLayout>
		</ModalProvider>
	);
}

export default App;
