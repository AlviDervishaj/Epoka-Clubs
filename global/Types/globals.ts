export type FilterQuery = {
  [key: string]: string;
};
export type AvailableDatabases = "Club";

export type RequestStatus = "Pending" | "Accepted" | "Rejected";

export type AvailableCollections = `${AvailableDatabases}Data`;

export type ErrorTypes =
  | "invalid-password"
  | "invalid-token"
  | "student-not-found"
  | "student-inactive";

export type SuccessTypes =
  | "valid-token"
  | "valid-password"
  | "student-found"
  | "student-created"
  | "student-active";
