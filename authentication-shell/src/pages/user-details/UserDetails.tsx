import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../../services/service";
export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    isActive: true,
  });
  useEffect(() => {
    console.log(id);
    getUserDetails(id).then((res) => {
      setUser(res.data);
    });
  }, []);

  return <div>{user && <p>{user.firstName}</p>}</div>;
}
