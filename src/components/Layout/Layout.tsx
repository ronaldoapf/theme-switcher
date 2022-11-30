import { Outlet } from 'react-router-dom';

import { Topbar } from "./Topbar";
import { Navbar } from "./Navbar";
import { LayoutContainer } from './styles';

export const Layout = () => {
  return (
    <>
      <LayoutContainer>
      <Topbar />
        <div>
          <Navbar />
          <Outlet />
        </div>
      </LayoutContainer>
    </>
  )
};  
