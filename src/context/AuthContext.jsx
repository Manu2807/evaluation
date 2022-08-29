import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const [isAuth,setAuth] =React.useState(false)
function handleAuth(){
  setAuth(!isAuth)
}

  return <AuthContext.Provider value={{isAuth,handleAuth}}  >{children}</AuthContext.Provider>;
};
