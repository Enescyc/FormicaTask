import { Divider, Input, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { getAllUser } from "../service/user.service";
import type { ColumnsType } from 'antd/es/table';

export interface UserDataType {
    id:number;
    email : string;
    name:string,
    secondName:string,
    detail: JSX.Element
}

const columns: ColumnsType<UserDataType> = [
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Second Name',
        dataIndex: 'secondName',
    },
    {
        title: 'Detail',
        dataIndex: 'detail',
    },
];



const UserTable: React.FC = () => {

    const [userList,setUserList] = useState<UserDataType[]>();

    useEffect(()=> {
        getAllUser().then(res => {
            const users : UserDataType[] = res;
            users.map(u => {
                u.detail= <a key={u.id} className='px-4 py-4 bg-slate-800 rounded-xl text-white' href={'/admin/user/'+u.id}>Detail</a>
            })
            setUserList(users);
        }) 
        console.log(userList)
    },[])
    
    return (
        <div className='flex flex-col w-full h-full container'>
            <div>
                <Divider />
                <Table columns={columns} dataSource={userList} />
            </div>
        </div>

    )
}


export default UserTable;