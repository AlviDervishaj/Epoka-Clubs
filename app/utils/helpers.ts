import { AuthError } from "firebase/auth";

export interface ReturnType {
  info: string,
  error?: AuthError,
  code: 200 | 400 | 500,
}
