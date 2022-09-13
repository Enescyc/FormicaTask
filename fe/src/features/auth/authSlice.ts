import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";
import Login from "../../types/user.type";


export interface AuthState {
    token : string | '',
    name : string,
    secondName : string,
    email : string ,
}

const initialState : AuthState = {
    token:'',
    name :'',
    secondName:'',
    email:''
}



export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers :{
        login: (state,action) => {
            const token = localStorage.getItem('token')
            if(!token){
               console.log(state.token)
            }
            else {
                state.token = token
                console.log(state.token)
            }

        }
    },
})

export const {login} = authSlice.actions;
export default authSlice.reducer;