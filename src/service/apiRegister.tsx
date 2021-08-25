import { RegisterFormSubmitValues } from "../DataType/RegisterType";
import { Fetch } from "../tools/fetch";

export const Register = async (value: RegisterFormSubmitValues) => {
  const res = await Fetch({ method: "POST",
   path: "/users/register" , 
   data:value});

   return res;
};
