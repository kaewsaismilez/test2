import { LoginFormSubmitValues } from "../DataType/LoginType";
import { Fetch } from "../tools/fetch";

export const Login = async (value: LoginFormSubmitValues) => {
  const res = await Fetch({ method: "POST",
   path: "/users/login" , 
   data:value});

   return res;
};
