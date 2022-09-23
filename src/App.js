import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import About from './pages/about.js';
import Login from './pages/login.js';
import Store from './pages/store.js';
import Support from './pages/support.js';
import NavBar from './components/NavigationHeader';
import GameDetails from './pages/gameDetails.js'
import { gamePageItems } from './constants/gamesDetailsData';
import { UserContext } from './UserContext/UserContext';
import {useState} from "react"
let listOfRoutesForGamePages = []
gamePageItems.map((value) => {
  listOfRoutesForGamePages.push(<Route key={value.idGame} path={value.link} element={<GameDetails gameDetails={value}/>}/>)
  return null;
})

function App() {
  const [user,setUser] = useState({
      username:null,
      money:null,
      loggedIn:false,
      userId:null,
      email:null,
  });
  return (
      <Router>
        <UserContext.Provider value={{user,setUser}}>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/login' element={<Login/>}/>
            {listOfRoutesForGamePages}
          </Routes>
        </UserContext.Provider>
      </Router>
  );
}

export default App;