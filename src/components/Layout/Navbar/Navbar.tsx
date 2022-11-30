import { NavbarContainer, Menu, MenuItem } from "./styles"; 

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Menu>
        <MenuItem>Reports</MenuItem>
        <MenuItem>Customers</MenuItem>
        <MenuItem>Orders</MenuItem>
        <MenuItem>Products</MenuItem>
      </Menu>
    </NavbarContainer>
  )
};