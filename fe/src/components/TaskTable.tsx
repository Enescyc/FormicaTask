import { Button, Divider, Radio, Table } from 'antd';
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

    useEffect(() => {
        // get task data
    }, [])
    return (
        <div className='flex flex-col w-full h-full'>
            <div>
                <Divider />
                <Table
                    columns={columns}
                />
            </div>

            </div>
    );
};

export default TaskTable;