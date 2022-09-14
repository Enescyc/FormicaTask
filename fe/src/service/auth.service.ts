import axios from "axios";

const BASE_PATH = process.env.REACT_APP_BASE_PATH;

const config = {
  
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
 
}

export interface Register {
    email:string,
    password:string|any,
    name: string|any,
    secondName: string|any
    
    }


export async function register(body: Register) {
    return await axios.post(BASE_PATH+'/auth/register',body).then(res => res.data).catch(err => console.log(err));
    
}