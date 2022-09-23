import React from 'react';
import Footer from '../components/Footer/Footer';
import LoginPage from '../components/LoginPage/LoginPage';
import './pages.css'
  
const Login = () => {
  document.title = "OGS Login";
  return (
    <div className='pages'>
        <LoginPage/>
        <Footer/>
    </div>
  );
};
  
export default Login;