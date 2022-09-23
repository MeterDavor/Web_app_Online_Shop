import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkLogoHeader = styled(Link)`
  color: #ffffff;
  display: flex;
  font-weight: bold;
  align-items: center;
  text-decoration: none;
  font-size: 30px;
  padding: 0 0.5rem;
  height: 100%;
  width: 252px;
  cursor: pointer;
  &:hover{
    background-color: #575757;
  }
  @media screen and (max-width: 1000px) {
    height: 50%;
  }
  @media screen and (max-width: 768px) {
    height: 70px;
    padding-top: 18px;
    padding-bottom: 18px;
  }
  @media screen and (max-width: 400px) {
    width:auto;
    font-size: 8.3vw;
  }
`;

export const NavLinkLogoFooter = styled(Link)`
  color: #ffffff;
  display: flex;
  font-weight: bold;
  align-items: center;
  text-decoration: none;
  font-size: 30px;
  padding: 0 0.5rem;
  height: 100%;
  cursor: pointer;
  &:hover{
    background-color: #575757;
  }
  @media screen and (max-width: 400px) {
    font-size: 8.3vw;
  }
`;