import { Input, Select } from "antd";
import { useEffect } from "react";
import TaskTable from "../components/TaskTable";

function TaskPage() {



  return (
    <div className='flex flex-wrap justify-center items-center w-full h-full text-slate-800'>
      <div className="w-full h-full px-10 py-5 flex items-center justify-between bg-slate-800">
        <h1 className="text-4xl text-center font-bold text-white" style={{fontFamily:'Altone vf'}}>Tasks</h1>
        <img src="https://uploads-ssl.webflow.com/5fe3b693bf78e3c51c663ec9/6068bfb416f374b6420915c7_logo-white.svg" className="w-44" alt='formica'></img>

      </div>
      <TaskTable></TaskTable>
 
    </div>
  )
}

export default TaskPage;