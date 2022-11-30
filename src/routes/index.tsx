import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "../pages/NotFound";
import { useAuth } from "@hooks/useAuth";
import { Layout } from "@components/Layout";

import { Home } from "@pages/Home";
import { Loader } from "@components/Loader/Loader";

const AppRoutes = () => {
  const { loading } = useAuth();

  if (loading) return <Loader />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>

    </BrowserRouter>
  )
};

export default AppRoutes;