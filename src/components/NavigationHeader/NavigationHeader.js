import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import {IoMdClose} from 'react-icons/io';
export const Nav = styled.nav`
  background: #000000;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  position: fixed;
  justify-content: space-between;
  top: 0;
  z-index: 12;
  @media screen and (max-width: 1000px) {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  @media screen and (max-width: 768px) {
    height: 70px;
  }
`;


  //ZA HOVER JE DVOTOČKA! &:::::::hover
  //ZA ACTIVE JE TOČKA! &.......active
export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  font-weight: bold;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  padding: 0 0.75rem;
  margin: 0 0.25rem;
  height: 100%;
  cursor: pointer;
  &:hover{
    background-color: #575757;
  }
  &.active {
    color: #000000;
    background-color: #ffffff;
  }
  @media screen and (max-width: 1000px) {
    height: 100%;
  }
  
`;
  
export const BarsClosed = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 3rem;
    cursor: pointer;
  }
`;

export const BarsOpen = styled(IoMdClose)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 3rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    height: 50%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const NavMenuHam = styled.div`
display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000000;
  }
`;

export const NavLinkHam = styled(Link)`
  display: none;
  color: #ffffff;
  font-weight: bold;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  &:hover{
    background-color: #575757;
    outline-width: 2px;
    outline-style: outset;
    outline-color: #575757;
  }
  &.active {
    color: #000000;
    background-color: #ffffff;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    padding:  0 ;
    margin: 0.5rem 0;
    height: 70px;
    width: 70%;
    outline-width: 2px;
    outline-style: outset;
    outline-color: white;
  }
`;