import styled from "styled-components";
export const NavbarContainer = styled.aside`
  width: 270px;
  height: calc(100vh - 60px);
  padding: 16px;
  border: 1px #eaeaea solid;
  background-color: ${props => props.theme.colors.backgroundNavbar};
`;

export const Menu = styled.ul`
  list-style: none;
`

export const MenuItem = styled.li`
  padding: 10px;
  
`;