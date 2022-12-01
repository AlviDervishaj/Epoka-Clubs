'use client';
// React
import { useContext } from "react";

// Components
import { SessionContext, useToken } from "../components";

// Helpers
import { APIReturnType } from "../../helpers";

export default function Authentication() {

  //const { token }: { token: string } = useToken();
  //const user: APIReturnType = useContext<APIReturnType>(SessionContext);
  return (
    <main className={"pt-20"}>
      <h2>Auth user </h2>
    </main>
  );
}
