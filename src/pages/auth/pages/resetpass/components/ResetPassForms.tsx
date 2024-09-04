import { AuthHeader } from "@pages/auth/layout/AuthHeader";
import { useResetPassContext } from "../hooks/useResetPassContext";
import { ChangePassForm } from "./ChangePassForm";
import { CodeForm } from "./CodeForm";
import { SendCodeForm } from "./SendCodeForm";

const RESET_PASS_FORMS = {
	sendCode: <SendCodeForm />,
	validateCode: <CodeForm />,
	changePass: <ChangePassForm />,
};

export const ResetPassForms = () => {
	const { route, sectionTitle } = useResetPassContext();
	return (
		<>
			<AuthHeader title={sectionTitle} />
			{RESET_PASS_FORMS[route]}
		</>
	);
};
