import React , {useState,useContext} from "react";
import {users_list} from '../../constants/users'
import './LoginPage.css'
import { UserContext } from "../../UserContext/UserContext";

const LoginPage = () => {
    const [user_emailValue,setUEValue] = useState(null);
    const [passwordValue,setPassValue] = useState(null);
    const {user,setUser} = useContext(UserContext);
    const handleInputUE = event => {
        setUEValue(event.target.value);
    }
    const [warningParagraf,setwarningParagraf] = useState(<></>);
    const handleInputPass = event => {
        setPassValue(event.target.value);
    }
    function loginButtonPress(){
        users_list.map((profile) => {
            if((profile.username === user_emailValue && profile.password === passwordValue)||(profile.email === user_emailValue && profile.password === passwordValue))
            {
                setUser({
                    username:profile.username,
                    money:profile.money,
                    loggedIn:true,
                    userId:profile.idU,
                    email:profile.email,
                })
                setUEValue(null)
                setPassValue(null)
            }
            return null
        })
        if(!user.loggedIn)
        {
            setwarningParagraf(<p className="warningParagraf">Invalid username/email/password!<br/>Please try again.</p>)
        }
    }
    function logoutButtonPress(){
        setUser({
            username:null,
            money:null,
            loggedIn:false,
            userId:null,
            email:null,
        })
        setwarningParagraf(<></>)
    }
    
    if(!user.loggedIn)
    {
        return(
            <div className="containerLogPg">
                <div className="user_and_pass_box">
                    <label className="username_email" htmlFor="u_e_input_form">Username or E-mail:</label>
                    <input className="u_e_input"
                    placeholder="Example@example.com"
                    name="u_e_input_form"
                    onChange={handleInputUE}/>

                    <label className="password"  htmlFor="pass_input_form">Password:</label>
                    <input className="pass_input"
                    type="password"
                    placeholder="password"
                    name="pass_input_form"
                    onChange={handleInputPass}/>
                </div>
                {warningParagraf}
                <button className="login_button" onClick={loginButtonPress}>Login</button>
            </div>
        )
    }
    else
    {
        return(
            <div className="containerLogPg">
                <div className="containerProfile">
                    <div><b>Username:</b> {user.username}</div>
                    <div><b>E-mail:</b> {user.email}</div>
                    <div><b>Account ballance:</b> {user.money.toFixed(2)}&euro;</div>
                </div>
                <button className="logout_button" onClick={logoutButtonPress}>Logout</button>
            </div>
        )
    }
}

export default LoginPage