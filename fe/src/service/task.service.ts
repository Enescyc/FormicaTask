import axios from "axios";


const BASE_PATH = process.env.REACT_APP_BASE_PATH;

const config = {
  
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
 
}
export async function getAllTask () {
    return await axios.get(BASE_PATH+'/task',config).then(res =>  res) 
}

export async function getTaskById (id:string|undefined) {
    return await axios.get(BASE_PATH+'/task/'+id,config).then(res =>  res)
}