import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../types/auth.type";
import Login from "../types/user.type";


export type AuthContextType = {
    user: UserAuth;
    token : string;
    validateToken: (email: string) => void;
    login : (user:Login) => void;
  };

interface Props {
    children: React.ReactNode,
}

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<Props> = ({ children }: Props) => {

    const [user, setUser] = React.useState<UserAuth>({
        email:'',
        exp:0,
        iat:0,
        sub:4
    });
    const [token,setToken] = useState<string>('');


    async function validateToken(email: string) {
        await axios.post(process.env.REACT_APP_BASE_PATH + '/auth/validate', { email: email })
            .then(res => {
                if(res.status === 200) {
                    setUser(res.data.user);
                }
                
            })
            .catch(err => console.log('Validate error'));
    }

    async function login(user:Login) {
        
        await axios.post(process.env.REACT_APP_BASE_PATH + '/auth/login',user)
            .then(res => {
                if(res.status === 200) {
                    setToken(res.data.access_token);
                    localStorage.setItem('token',res.data.access_token);
                }
                
            })
            .catch(err => console.log('Validate error'));
        
    }

    return <AuthContext.Provider value={{token,user,validateToken,login}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;