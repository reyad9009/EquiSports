import React, { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRout;
