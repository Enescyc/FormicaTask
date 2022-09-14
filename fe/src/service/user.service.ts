import axios from "axios";


const BASE_PATH = process.env.REACT_APP_BASE_PATH;

const config = {
  
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
 
}


export async function getAllUser() {
    return await axios.get(BASE_PATH+'/user',config).then(res => res.data).catch(err => console.log(err));
    
}