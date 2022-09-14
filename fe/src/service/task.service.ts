import axios from "axios";


interface CreateTask {
    title: string,
    description: string
}
export interface UpdateTask {
    id:number|any
    title: string | any,
    description: string | any,
    state: string | any,}

const BASE_PATH = process.env.REACT_APP_BASE_PATH;

const config = {

    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }

}
export async function getAllTask() {
    return await axios.get(BASE_PATH + '/task', config).then(res => res)
}

export async function getTaskById(id: string | undefined) {
    return await axios.get(BASE_PATH + '/task/' + id, config).then(res => res)
}

export async function createNewTask(params: CreateTask) {
    return await axios.post(BASE_PATH + '/task', params, config).then(res => res)

}
export async function deleteTaskByTaskId(id:number|any) {
    return await axios.delete(BASE_PATH + '/task/'+id,config).then(res => res);
}

export async function updateTask(params: UpdateTask) {
    return await axios.put(BASE_PATH + '/task/', params, config).then(res => res);
}
