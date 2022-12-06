// React
import { useState, useEffect } from "react";
// Axios 
import axios, { AxiosResponse } from "axios";
import { APIReturnType, ValidateReturnType } from "../../../helpers";
export const useValidate = ({ token }: { token: string }): ValidateReturnType => {
  const [data, setData] = useState<APIReturnType>({ info: 'Token is not valid.', code: 'auth/invalid-token' });
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

  return { data, token };
}
