import { Button, Divider, Input, Modal, Radio, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';

interface DataType {
    title: React.Key;
    description: string;
    createdDate: number;
    updatedDate: string;
    state: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Title',
        dataIndex: 'title',
        render: (text: string) => <a>{text}</a>,
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
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
    }),
};

const TaskTable: React.FC = () => {


    const [data, setData] = useState<DataType | undefined>(undefined);

    const [isModalOpen, setIsModalOpen] = useState(false);

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
                <Table
                    columns={columns}
                />
            </div>
            <div className='relative w-full h-full p-10'>
                <button onClick={showModal}
                    className='px-4 py-4 m-4 bg-green-500 absolute bottom-0 right-0 rounded-xl text-white text-md font-bold'>Create New Task</button>
            </div>

            <Modal title="New Task" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input size='large' className='mt-5' placeholder='Title'></Input>
                <Input size='large' className='mt-5' placeholder='Description'></Input>
            </Modal>

        </div>
    );
};

export default TaskTable;