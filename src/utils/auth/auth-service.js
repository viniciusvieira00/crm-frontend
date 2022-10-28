import React from "react";
import api from "../api";

const login = (email,password) => {
    return api.post('api/users/login', {email, password}).then((res) => {
          if(res.data.token) {
            localStorage.setItem("user", JSON.stringify(res.data))
          }

          return res.data;
        })
      
}

const verify = (userid,token) => {
  return api.post(`api/users/verify/${userid}`, {token: token}).then((res) => {
        if(res.data.token) {
          localStorage.setItem("verificationToken", JSON.stringify(res.data))
        }

        return res.data;
      })
    
}

const getCurrentUser = () => {
    return (JSON.parse(localStorage.getItem("user")))
}


const authService = {
    login,
    getCurrentUser,
    verify
};

export default authService;