// Firebase
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Types
import { Auth } from "firebase/auth";

// Helpers
import { ReturnType } from "./helpers";
import { init_firebase } from "./init";

init_firebase();

// Global
let AUTH: Auth;

function _initialize_() {
  AUTH = getAuth();
  AUTH.useDeviceLanguage();
}

export const signInWithGoogle = async (): Promise<ReturnType> => {
  _initialize_();
  const provider: GoogleAuthProvider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(AUTH, provider)
    console.log({ result });
    return { info: `Result : ${result}`, code: 200 };
  }
  catch (error: any) {
    return { info: "An error occurred.", code: 400, error }
  }
}

export const logOut = async (): Promise<ReturnType> => {
  _initialize_();
  try {
    await signOut(AUTH);
    return { info: "Signed out Successfully !", code: 200 }
  } catch (error: any) {
    return {
      info: "An error occurred.", code: 400, error
    };
  }
}
