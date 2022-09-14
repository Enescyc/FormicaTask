import axios from "axios";


const BASE_PATH = process.env.REACT_APP_BASE_PATH;

const config = {
  
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
 
}

export interface UpdateUser {
    id:number | any,
    email: string | any,
    password : string | any,
    name:string | any ,
    secondName: string | any 
}



export async function getAllUser() {
    return await axios.get(BASE_PATH+'/user',config).then(res => res.data).catch(err => console.log(err));
    
}



export async function getUserById(number:string|any) {
    return await axios.get(BASE_PATH+'/user/'+number,config).then(res => res.data).catch(err => console.log(err));
    
}

export async function updateUser(body: UpdateUser) {
    return await axios.put(BASE_PATH+'/user/',body,config).then(res => res).catch(err => err);
    
}

export async function deleteUser(number:string|any) {
    return await axios.delete(BASE_PATH+'/user/'+number,config).then(res => res).catch(err => err);
    
}


