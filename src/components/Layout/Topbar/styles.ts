import styled from "styled-components";

const ContainerHeader = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 0 30px;
  font-weight: bold;
  align-items: center;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.primary};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const Button = styled.button`
  color: #fff;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px #eaeaea solid;
  transition: .2s ease-in-out;
  background-color: transparent;

  &:hover {
    color: #000;
    background-color: #fff;
  }
`;

export {
  Button,
  ContainerHeader
}