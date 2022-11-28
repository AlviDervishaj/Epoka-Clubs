'use client';
// React & Next
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Helpers
import { LayoutProps, APIReturnType } from '../../helpers';

// Components
import { Loading, Navigation, Footer } from "../components";

// Axios
import axios, { AxiosResponse } from "axios";

// Layout default export can have any name.
export default function RootLayout({ children }: LayoutProps) {


  const [loading, setLoading] = useState(true);
  const router: AppRouterInstance = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      const token: String | null = localStorage.getItem('token');
      if (token === null) return router.push("/");
      // validate user token
      const response: AxiosResponse<APIReturnType> = await axios.post('/api/auth/validate', { token });
      const { data } = response;
      console.log({ data })
      if (data.error === "auth/invalid-token") {
        // remove token from local storage if it exists
        return router.push("/");
      }
      // if token is valid continue to the page
      setLoading(false);
    }
    checkToken();
  }, [router])

  if (loading) {
    return <Loading />
  }
  return (
    <section className='w-full h-full bg-gradient-to-br from-sky-500 to-blue-500'>
      <Navigation />
      {children}
      <Footer />
    </section>
  )
}
