import { NavbarContainer, Menu, MenuItem } from "./styles"; 
import { useLocation } from 'react-router-dom'; 
import { useEffect } from "react";

export const Navbar = () => {
  const location = useLocation();

  return (
    <NavbarContainer>
      <Menu>
        <MenuItem>
          Home
        </MenuItem>
        <MenuItem>
          Customers
        </MenuItem>
        <MenuItem>
          Orders
        </MenuItem>
        <MenuItem>
          Products
        </MenuItem>
      </Menu>
    </NavbarContainer>
  )
};