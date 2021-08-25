import React, { useEffect, useState } from "react";
import { getRole } from "../service/apiRole";
import EditProfile from "./EditProfile";

const MyProfile = () => {
  const [res, setRes] = useState<any>({});

  useEffect(() => {
    User();
  }, []);

  const User = async () => {
    const token = localStorage.getItem("userrole_token");
    const res = await getRole({ accessToken: token });
    setRes({
      id: res.id,
      username: res.username,
      email: res.email,
    });
  };

  return (
    <div>
      <h1>Email: {res.email}</h1>
      <h1>Username: {res.username}</h1>

      <EditProfile data={res} />
    </div>
  );
};

export default MyProfile;
