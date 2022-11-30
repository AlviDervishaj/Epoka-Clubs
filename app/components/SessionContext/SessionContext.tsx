// React
import { createContext } from "react";
// Helpers
import { APIReturnType } from "../../../helpers";

export const SessionContext = createContext<APIReturnType>({} as APIReturnType);
