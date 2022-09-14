import axios from "axios";


const BASE_PATH = process.env.REACT_APP_BASE_PATH;

const config = {
  
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
 
}
export async function getAllTaskOnUser () {
    return await axios.get(BASE_PATH+'/userontask',config).then(res =>  res) 
}

export async function getUserOnTask (id:number|any) {
    return await axios.get(BASE_PATH+'/userontask/task/'+id,config).then(res =>  res.data) 
}

export async function getTaskOnUser (id:number|any) {
    return await axios.get(BASE_PATH+'/userontask/'+id,config).then(res =>  res) 
}