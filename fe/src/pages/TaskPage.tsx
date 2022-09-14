import { Input, Select } from "antd";
import { StickyOffsets } from "rc-table/lib/interface";
import React, { useEffect, useState } from "react";
import MyHeader from "../components/MyHeader";
import TaskTable from "../components/TaskTable";
import { getAllTask } from "../service/task.service";
import {Task} from './../types/task.type';
function TaskPage() {


  return (
    <div className='flex flex-col justify-center items-center w-full h-full text-slate-800'>
      <MyHeader></MyHeader>
      <TaskTable></TaskTable>
    </div>
  )
}

export default TaskPage;