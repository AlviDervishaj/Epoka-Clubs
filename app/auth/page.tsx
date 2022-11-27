'use client';
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Components
import { Loading } from "../components";

export default function Authentication() {

  const [loading, setLoading] = useState(true);
  const router: AppRouterInstance = useRouter();

  useEffect(() => {
    const checkToken = () => {
      const token: String | null = localStorage.getItem('token');
      if (token) return setLoading(false);
      else router.push("/");
    }
    checkToken();
  }, [router])

  if (loading) {
    return <Loading />
  }

  return (
    <main className={"pt-20"}>
      <h2>Auth user </h2>
    </main>

  );
}

