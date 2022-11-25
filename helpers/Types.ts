export type AvailableDatabases = "Student" | "Club" | "Staff";

export type BulkDocuments = Array<StudentData | ClubData | StaffData | RequestData>;

export type FilterQuery = {
  [key: string]: string;
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
  status: "Pending" | "Accepted" | "Rejected",
}

