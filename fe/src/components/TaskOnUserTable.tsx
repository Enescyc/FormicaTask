import { Button, Divider, Input, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { getAllUser } from "../service/user.service";
import type { ColumnsType } from 'antd/es/table';
import { UserDataType } from "./UserTable";
import { TaskDataType } from "./TaskTable";
import { getAllTask, getTaskById } from "../service/task.service";
import { Select } from 'antd';
import { useParams } from "react-router-dom";
import { getAllTaskOnUser, getUserOnTask } from "../service/tasksonuser.service";


const { Option, OptGroup } = Select;



const TaskManagmentComponent: React.FC = () => {

    const { id } = useParams();
    const [users, setUsers] = useState<UserDataType[]>();
    const [task, setTask] = useState<TaskDataType>();
    const [selectedUser, setSelectedUser] = useState<UserDataType[]>();
    const [assignesUser, setAssignesUser] = useState<any[]>();


    useEffect(() => {
        getTaskById(id).then(res => {
            setTask(res.data);
        });

        getAllUser().then(res => {
            const l: UserDataType[] = res;
            setUsers(l);
            console.log(id);
        })

        getUserOnTask(id).then(res => setAssignesUser(res))
    }, [])


    useEffect(() => {
        console.log(assignesUser)
    }, [assignesUser])


    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className='flex flex-col flex-wrap w-full h-full  items-center justify-center'>
            <div className="flex flex-wrap w-full h-full  items-center justify-center">

                <div className="bg-white w-3/5 mt-4 h-full text-white shadow-2xl rounded-xl">
                    <h5 className="text-center h-12 flex items-center justify-center text-xl font-bold bg-slate-800 w-full text-white"
                    >Title: {task?.title} </h5>
                    <div className="px-4">
                        <h5 className="text-black flex justify-start text-sm font-bold"> Description{task?.description}</h5>
                        <h5 className="text-black flex justify-end text-sm font-bold mt-4 "> State:{task?.state}</h5>
                        <div className="flex justify-end">
                            <h5 className="text-black flex justify-end text-sm font-bold ml-1"> Created Date: {task?.createdDate}</h5>
                            <h5 className="text-black flex justify-end text-sm font-bold ml-2"> Updated Date: {task?.createdDate}</h5>
                        </div>

                    </div>
                </div>

                <div className="w-1/5 text-white mt-10 ml-5 flex flex-col">
                    <h5>Assignes Users</h5>
                    {
                        (assignesUser && assignesUser?.length > 0) ?
                            assignesUser.map(a => <div className="text-black font-bold">Assigned: {a.user.name}</div>)
                            : <h1 className="text-red-900 font-bold">Not Assigned User </h1>
                    }
                    <div className="w-full flex mt-5 bg-slate-900 rounded-xl">
                        <label className="text-white h-10 text-center"> Select User </label>
                        <select className="w-full h-10 text-black">
                            {users?.map(u => <option key={u.id}>{u.name}</option>)}
                        </select>

                    </div>
                    <Button onClick={() => console.log("Assing İşlemi")} size='large' className="mt-4">Assign</Button>
                    <Button onClick={() => console.log("Assing Delete İşlemi")} size='large' className="mt-4">Delete</Button>
                </div>


            </div>

        </div>

    )
}


export default TaskManagmentComponent;