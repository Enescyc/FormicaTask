import { Button, Divider, Input, Modal, Radio, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { createNewTask, getAllTask } from '../service/task.service';

export interface TaskDataType {
    id: number;
    title: string;
    description: string;
    taskDescription:string;
    createdDate: number;
    updatedDate: string;
    state: string;
    detail: JSX.Element
}

const columns: ColumnsType<TaskDataType> = [
    {
        title: 'Id',
        dataIndex: 'id'
    },
    {
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },
    {
        title: 'Created Date',
        dataIndex: 'createdDate',
    },
    {
        title: 'Update Date',
        dataIndex: 'updatedDate',
    },
    {
        title: 'State',
        dataIndex: 'state',
    },
    {
        title: 'Details ',
        dataIndex: 'detail',
    }
];


// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: TaskDataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: TaskDataType) => ({
    }),
};

const TaskTable: React.FC = () => {


    const getTasks = () => {
        getAllTask().then(res => {
            const l: TaskDataType[] = res.data;
            l.map(r => r.detail = <a key={r.id} className='bg-slate-800 px-4 py-4 rounded-md text-white font-bold text-sm'
                href={'/admin/task/' + r.id} >Details</a>)
            setTaskData(l);
        });
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [taskData, setTaskData] = useState<TaskDataType[]>([]);
  

    useEffect(() => {
        getTasks();
    }, [])


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        // TODO FETCH TASKS. 
        // Inıtılaze the table
    }, [])

    return (
        <div className='flex flex-col w-full h-full'>
            <div>
                <Divider />
                <Table dataSource={taskData}
                    columns={columns}
                />
            </div>
            <div className='relative w-full h-full p-10'>
            <div>
        <button onClick={showModal}
          className='px-4 py-4 m-4 bg-green-500 absolute bottom-0 right-0 rounded-xl text-white text-md font-bold'>Create New Task</button>
      </div>

      <Modal title="New Task" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input value={title} onChange={(e: any) => { setTitle(e.target.value) }} size='large' className='mt-5' placeholder='Title'></Input>
        <Input value={description} onChange={(e: any) => { setDescription(e.target.value) }} size='large' className='mt-5' placeholder='Description'></Input>
        <Button onClick={() => {
          createNewTask({title:title,description:description})
          .then(res => {
            if(res.status===201) {
              alert(alert('Task Created'))
            }
          })
          .finally(()=> {getTasks();setIsModalOpen(false)});
        }}className="mt-4">Create</Button>
      </Modal>
            </div>

        </div>
    );
};

export default TaskTable;