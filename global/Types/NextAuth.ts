import { Account, Profile, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { CredentialInput } from "next-auth/providers";

export type NextAuthSignIn = {
  user: User | AdapterUser;
  account: Account | null;
  profile: Profile | undefined;
  email: {
    verificationRequest?: boolean | undefined;
  } | undefined;
  credentials: Record<string, CredentialInput>;
};
