import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;