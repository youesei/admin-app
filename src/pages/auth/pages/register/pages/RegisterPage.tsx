import { AuthHeader, AuthLayout } from "../../../layout";
import { RegisterForm } from "../components";

export const RegisterPage = () => {
	return (
		<AuthLayout className="max-w-sm">
			<AuthHeader title="Registrate" />
			<RegisterForm />
		</AuthLayout>
	);
};
