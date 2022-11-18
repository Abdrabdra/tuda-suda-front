import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Auth from "./pages/AuthPage";
import Error from "./pages/ErrorPage";
import LandingPage from "pages/LandingPage";

import { useTypedSelector } from "./store";

function App() {
  const { isAuth } = useTypedSelector((state) => state.auth);

  // React.useEffect(() => {
  //   if (localStorage.getItem("access_token")) {
  //     store.dispatch(refresh());
  //   }
  // }, []);

  return (
    <>
      <Routes>
        <Route index element={<Navigate to="app" />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route
          path="/app/*"
          element={isAuth ? <MainPage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth/*"
          element={isAuth ? <Navigate to="/app" /> : <Auth />}
        />
        <Route path="error" element={<Error />} />
        <Route path="*" element={<Navigate to={"/error"} />} />
      </Routes>
    </>
  );
}

export default App;
