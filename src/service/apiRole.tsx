import { UserRole } from "../DataType/Roles";
import { Fetch } from "../tools/fetch";

export const getRole = async (value: UserRole) => {
  const res = await Fetch({ method: "POST",
   path: "/users/getrole" , 
   data:value});

   return res;
};
