import { Dispatch, SetStateAction } from "react";
import { User } from "../../../types/User";

interface AccountSectionProps {
    ActiveUser: User | undefined;
    RenderedSectionHandler?: Dispatch<SetStateAction<string>>;
}

export default AccountSectionProps;