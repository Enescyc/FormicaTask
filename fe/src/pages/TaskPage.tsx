import MyHeader from "../components/MyHeader";
import TaskTable from "../components/TaskTable";

function TaskPage() {



  return (
    <div className='flex flex-col justify-center items-center w-full h-full text-slate-800'>
      <MyHeader></MyHeader>
      <TaskTable></TaskTable>

    </div>
  )
}

export default TaskPage;