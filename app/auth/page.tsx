'use client';
// React
import { useContext } from "react";

// Components
import { SessionContext } from "../components";

// Helpers
import { APIReturnType } from "../../helpers";

export default function Authentication() {

  const user: APIReturnType = useModifyResult(useContext<APIReturnType>(SessionContext));
  console.log({ user });
  return (
    <main className={"pt-20"}>
      <h2>Auth user </h2>
    </main>
  );
}
