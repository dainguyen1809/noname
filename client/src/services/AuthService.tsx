/** functions signing */

import axios from "../utils/axios";
import { errorMessage } from "../helpers/axiosHelper";
type loginPayload = {
  email: string;
  password: string;
};

const login = async (payload: loginPayload): Promise<boolean> => {
  // console.log(payload);
  try {
    await axios.post("/auth/login", {
      email: payload.email,
      password: payload.password,
    });

    return true;
  } catch (err: any) {
    errorMessage(err);
    return false;
  }
};

export { login };
