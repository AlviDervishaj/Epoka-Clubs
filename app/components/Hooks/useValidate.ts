// React
import { useState, useEffect } from "react";
// Axios 
import axios, { AxiosResponse } from "axios";
import { APIReturnType } from "../../../helpers";
import { useToken } from "./useToken";

export const useValidate = () => {
  const { token }: { token: string } = useToken();
  const [data, setData] = useState<APIReturnType>({ info: 'Token is not valid.', error: 'auth/invalid-token', code: 400 } as APIReturnType);

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      if (token === '') return;
      // validate user token
      const response: AxiosResponse<APIReturnType> = await axios.post(
        "/api/auth/validate",
        { token }
      );
      const { data: _data }: { data: APIReturnType } = response;
      setData(_data);
      return;
    }
    fetchUser();
  }, [token]);

  return { data };
}