import { Navigate, Route, Routes } from "react-router-dom";

import { MainHome, OneHome } from "@components/screens/Main";
import Filter from "@components/screens/Main/Home/Filter/Filter";

const HomePage = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<MainHome />} />
        <Route path="one" element={<Navigate to="/" />} />
        <Route path="one/:announceId" element={<OneHome />} />
        <Route path="filter" element={<Filter />} />

        <Route path="*" element={<MainHome />} />
      </Route>
    </Routes>
  );
};

export default HomePage;
