import { Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "../../components/layouts";

import HomePage from "./HomePage";

const MainPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home/*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainPage;
