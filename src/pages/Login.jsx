import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
//import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email ,setEmail]=React.useState("")
  const [password ,setPassword]=React.useState("")
  const{isAuth,handleAuth}=React.useContext(AuthContext)
  const navigate =useNavigate()
  function saveData(){
    console.log("click")
    let info={
      email:email,
      password:password
    }
    // fetch("https://reqres.in/api/login",{
    //   method:"POST",
    //   body:JSON.stringify(info),
    //   headers:{
    //     "Content-type":"application/json"
    //   }})
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res.token) {
    //        handleAUth()
    //       navigate("/");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })

    
    // console.log(info)
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
       
          handleAuth()
          console.log(isAuth)
          navigate("/");
        
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <label>Email</label>
      <input data-cy="login-email" type="text" placeholder="Type your email" onChange={(e)=>setEmail(e.target.value)}/>
      <label>Password</label>
      <input data-cy="login-password" type="text" placeholder="Type your email"  onChange={(e)=>setPassword(e.target.value)}/>
      <button data-cy="login-submit"  onClick={()=>saveData()}>Login</button>
    </div>
  );
};

export default Login;
