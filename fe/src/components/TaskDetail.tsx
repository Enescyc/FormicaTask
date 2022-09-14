import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import { getAllUser, getUserById } from "../service/user.service";

import { UserDataType } from "./UserTable";
import { TaskDataType } from "./TaskTable";
import { deleteTaskByTaskId, getTaskById, UpdateTask, updateTask } from "../service/task.service";
import { Select } from 'antd';
import { useNavigate, useParams } from "react-router-dom";
import { assignUserOnTask, getAllTaskOnUser, getUserOnTask } from "../service/tasksonuser.service";
import TextArea from "antd/lib/input/TextArea";


const { Option, OptGroup } = Select;



const TaskDetail: React.FC = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [users, setUsers] = useState<UserDataType[]>();
    const [task, setTask] = useState<TaskDataType>();
    const [selectedUser, setSelectedUser] = useState<UserDataType>();
    const [assignesUser, setAssignesUser] = useState<any[]>();
    const [userId , setUserId] = useState();
    const [formValues , setFormValues] = useState<{
        title:string,
        description:string,
        state:string
    }>();


    useEffect(() => {
        getTaskById(id).then(res => {
            if(res.status===200){
                setTask(res.data);
            }
            else {
                navigate('/admin/task')
            }
           
        });

        getAllUser().then(res => {
            const l: UserDataType[] = res;
            setUsers(l);
        })

        getUserOnTask(id).then(res => setAssignesUser(res));
    }, [])

    useEffect(()=> {
        if(assignesUser && assignesUser?.length>0) {
            setUserId(assignesUser[0].id);
        }
    },[assignesUser])

    const onHandleChange = (e:any) => {
        setTask({...task,[e.target.name]:e.target.value.toLowerCase() } as TaskDataType);
    }



    return (
        <div className='flex flex-wrap w-full h-full  items-center justify-center'>
            <div className="flex flex-wrap w-full h-full  items-center justify-center">
                <div className="w-96 text-white mt-10 ml-5 flex flex-col">
                    <h5>Assignes Users</h5>
                    {
                        (assignesUser && assignesUser?.length > 0) ?
                            assignesUser.map(a => <div className="text-black font-bold">Assigned: {a.user.name}</div>)
                            : <h1 className="text-red-900 font-bold">Not Assigned User </h1>
                    }
                    <div className="w-full flex mt-5 bg-slate-900 rounded-xl">
                        <label className="text-white h-10 text-center"> Select User </label>
                        <select className="w-full h-10 text-black" onChange={(e: any) => {
                            getUserById(e.target.value).then(res => setSelectedUser(res));
                        }}>
                            {users?.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                        </select>

                    </div>
                    <Button onClick={() => {
                        const body = { taskId: task?.id, userId: selectedUser?.id };
                        assignUserOnTask(body).then(res => {
                            if (res.status === 201) {
                                getUserOnTask(id).then(res => setAssignesUser(res))
                            }
                        })
                            .catch(err => alert('Cannot assign this user'));
                    }} size='large' className="mt-4">Assign</Button>
                    <Button onClick={() => {
                        deleteTaskByTaskId(id).then(res => {
                            if(res.status === 200) {
                                alert('silme işlemi başarılı')
                                navigate('/admin/task')
                            }
                        });
                        
                    }
                  }
                        size='large' className="mt-4">Delete Task</Button>
                </div>
                <div className="w-96">
                    <form className="flex flex-wrap w-full px-4 py-4">
                        <div className="flex flex-col w-full">
                            <div className="flex">
                                <label className="font-bold mt-4 mr-2 w-1/2">
                                    Title
                                </label>
                                <Input name="title" className="mt-2 w-full" 
                                value={task?.title} onChange={onHandleChange}></Input>
                            </div>
                            <div className="flex">
                                <label className="font-bold mt-4 mr-2 w-1/2">
                                    Description
                                </label>
                                <TextArea name='taskDescription' className="mt-2 w-full" 
                                value={task?.taskDescription} onChange={onHandleChange}></TextArea>
                            </div>
                            <div className="flex">

                                <label className="font-bold mt-4 mr-2 w-1/2">
                                    State
                                </label>
                                <Input name='state' className="mt-2 w-full" 
                                value={task?.state} onChange={onHandleChange}></Input>
                            </div>
                            <div className="flex items-center justify-center">
                                <label className="font-bold mt-4 mr-2 w-1/2">
                                    Created Date
                                </label>
                                <h1 className="mt-2 w-full"> {task?.createdDate}</h1>
                            </div>
                            <div className="flex items-center justify-center">
                                <label className="font-bold mt-4 mr-2 w-1/2">
                                    UpdatedDate
                                </label>
                                <h1 className="mt-2 w-full"> {task?.updatedDate ? task?.updatedDate : 'Not Updated'}</h1>
                            </div>




                            <h1 className="mt-2"> {task?.updatedDate}</h1>
                            <Button className="mt-2 w-24"
                                onClick={() => {
                                    const updateTaskObj : UpdateTask = {
                                        id:task?.id,
                                        description:task?.taskDescription,
                                        title:task?.title,
                                        state:task?.state
                                    }
                                    updateTask(updateTaskObj).then(res => {
                                        res.status === 200 ? alert('Güncellendi!') : alert('Hata') 
                                    }).finally(()=> {
                                        getTaskById(id).then(res => {
                                            setTask(res.data);
                                        });
                                    })
                                }} >Güncelle</Button>
                        </div>

                    </form>

                </div>



            </div>

        </div>

    )
}


export default TaskDetail;