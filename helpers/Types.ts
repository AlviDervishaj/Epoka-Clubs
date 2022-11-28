import { InsertOneResult, WithId, Document } from 'mongodb';

export type AvailableDatabases = "Student" | "Club" | "Staff";
export type RequestStatus = "Pending" | "Accepted" | "Rejected";
export type AvailableCollections = "StudentData" | "ClubData" | "StaffData" | "RequestData";
export type AuthErrorTypes = "auth/incorrect-password" | "auth/invalid-token" | "auth/student-not-found";
export type ErrorTypes = AuthErrorTypes;
export type BulkDocuments = Array<StudentData | ClubData | StaffData | RequestData>;

export type FilterQuery = {
  [key: string]: string;
}

export type APIReturnType = {
  info: string,
  getUser?: WithId<Document> | null,
  insertedResult?: InsertOneResult<Document>,
  error?: ErrorTypes,
  code: 200 | 400 | 401 | 500,
}

export type StudentData = {
  name: string,
  epokaId: string,
  email: string,
  photoURL: string,
  emailVerified: boolean,
  password: string
  dateCreated: string,
}
export type ClubData = {
  name: string,
  description: string,
  email: string,
  logo: string,
  dateCreated: string,
  clubId: string,
  members: Array<string>,
  requests: Array<string>,
}

export type StaffData = StudentData;

export type RequestData = {
  email: string,
  dateRequested: string,
  clubId: string,
  reviewed: boolean,
  status: RequestStatus,
}

