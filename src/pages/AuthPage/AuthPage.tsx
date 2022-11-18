import { Grid } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../components/screens/Auth/Login";

import {
  Registration,
  URegistration,
} from "@components/screens/Auth/Registration";

const AuthPage = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="uregistration" element={<URegistration />} />
        </Route>
      </Routes>
    </>
  );
};

export default AuthPage;
