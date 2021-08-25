import { UpdateuserType } from "../DataType/UpdateuserType";
import { Fetch } from "../tools/fetch";

export const updateUser = async (value: UpdateuserType, id:number) => {
  const res = await Fetch({ method: "PUT", 
   path: `/users/${id}` , 
   data:value});

   console.log(value)

   return res;
};
