import { InsertOneResult, WithId, Document } from "mongodb";
import { ErrorTypes, SuccessTypes, RequestStatus } from "./globals";

export type AuthResponseTypes = `auth/${ErrorTypes | SuccessTypes}`;
export type BulkDocuments = Array<
  StudentDataType | ClubDataType | StaffDataType | RequestDataType
>;
export type UserSessionType = {
  token: string;
  lastLogin: string;
  status: "active" | "inactive";
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

export type StudentDataType = {
  name: string;
  epokaId: string;
  email: string;
  photoURL: string;
  emailVerified: boolean;
  password: string;
  dateCreated: string;
};
export type ClubDataType = {
  name: string;
  description: string;
  email: string;
  logo: string;
  dateCreated: string;
  clubId: string;
  members: Array<string>;
  requests: Array<string>;
};


export type StaffDataType = StudentDataType;

export type RequestDataType = {
  email: string;
  dateRequested: string;
  clubId: string;
  reviewed: boolean;
  status: RequestStatus;
};
