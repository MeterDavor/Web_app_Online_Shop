import { createContext } from "react";

export const UserContext = createContext(
    {
    username:null,
    money:null,
    loggedIn:false,
    userId:null
    }
)