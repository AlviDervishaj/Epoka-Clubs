import { InsertOneResult, WithId, Document } from "mongodb";
import { Account, Profile, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { CredentialInput } from "next-auth/providers";

export type AvailableDatabases = "Student" | "Club" | "Staff" | "Session";
export type RequestStatus = "Pending" | "Accepted" | "Rejected";
export type AvailableCollections = `${AvailableDatabases}Data`;
export type ErrorTypes =
  | "incorrect-password"
  | "invalid-token"
  | "student-not-found"
  | "student-inactive";
export type SuccessTypes =
  | "valid-token"
  | "valid-password"
  | "student-found"
  | "student-created"
  | "student-active";
export type AuthResponseTypes = `auth/${ErrorTypes | SuccessTypes}`;
export type BulkDocuments = Array<
  StudentData | ClubData | StaffData | RequestData
>;
export type UserSessionType = {
  token: string;
  lastLogin: string;
  status: "active" | "inactive";
};

export type FilterQuery = {
  [key: string]: string;
};

export type ValidateReturnType = {
  data: APIReturnType;
  token: string;
};

export type APIReturnType = {
  info: string;
  code: AuthResponseTypes;
  getUser?: WithId<Document> | InsertOneResult<Document> | null;
};

export type StudentData = {
  name: string;
  epokaId: string;
  email: string;
  photoURL: string;
  emailVerified: boolean;
  password: string;
  dateCreated: string;
};
export type ClubData = {
  name: string;
  description: string;
  email: string;
  logo: string;
  dateCreated: string;
  clubId: string;
  members: Array<string>;
  requests: Array<string>;
};

export type NextAuthSignIn = {
  user: User | AdapterUser;
  account: Account | null;
  profile: Profile | undefined;
  email:
    | {
        verificationRequest?: boolean | undefined;
      }
    | undefined;
  credentials: Record<string, CredentialInput>;
};

export type StaffData = StudentData;

export type RequestData = {
  email: string;
  dateRequested: string;
  clubId: string;
  reviewed: boolean;
  status: RequestStatus;
};
