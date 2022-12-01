// React
import { useEffect, useState } from "react";

export const useToken = (): { token: string } => {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const checkToken = () => {

      const _token: string | null = localStorage.getItem('token');
      if (_token === null) return;
      else return setToken(_token);
    }

    checkToken();
    return () => checkToken();
  }, [])

  return { token };

} 
