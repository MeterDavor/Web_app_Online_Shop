import React , {useState,useContext} from 'react';
import {
  Nav,
  NavLink,
  BarsClosed,
  BarsOpen,
  NavMenu,
  NavMenuHam,
  NavLinkHam,
} from './NavigationHeader';
import LogoHeader from '../Logo/LogoHeader';
import Search from '../Search/Search';
import SearchNavHam from './SearchNavHam/SearchNavHam';
import { UserContext } from '../../UserContext/UserContext';


const NavBar = () => {
  const {user} = useContext(UserContext);
  const [navbarOpen,setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  let logOrProfile = "LOGIN"
  if(user.loggedIn)
  {
    logOrProfile = "PROFILE"
  }
  else{
    logOrProfile = "LOGIN"
  }
  return(
    <>
      <Nav>
        <LogoHeader/>
        <NavMenu>
          <NavLink to='/' activestyle="true">
            HOME
          </NavLink>
          <NavLink to='/store' activestyle="true">
            STORE
          </NavLink>
          <NavLink to='/about' activestyle="true">
            ABOUT
          </NavLink>
          <NavLink to='/support' activestyle="true">
            SUPPORT
          </NavLink>
          <NavLink to='/login' activestyle="true">
            {logOrProfile}
          </NavLink>
        </NavMenu>
        <div className='wraper' onClick={handleToggle}>
          {navbarOpen ? <BarsOpen></BarsOpen> : <BarsClosed></BarsClosed>}
          {navbarOpen ? 
            <NavMenuHam>
              <SearchNavHam/>
              <NavLinkHam to='/' activestyle="true">
                HOME
              </NavLinkHam>
              <NavLinkHam to='/store' activestyle="true">
                STORE
              </NavLinkHam>
              <NavLinkHam to='/about' activestyle="true">
                ABOUT
              </NavLinkHam>
              <NavLinkHam to='/support' activestyle="true">
                SUPPORT
              </NavLinkHam>
              <NavLinkHam to='/login' activestyle="true">
                {logOrProfile}
              </NavLinkHam>
            </NavMenuHam>
          : ""}
        </div>
        <Search/>
      </Nav>
    </>
  );
};
  
export default NavBar;