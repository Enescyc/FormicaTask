import TaskTable from "../components/TaskTable";

function TaskPage() {
    return(
        <div className='flex flex-col w-full h-full text-white'>
          <TaskTable></TaskTable>
          <div className='relative w-full h-full p-9'>
            <button className='px-4 py-4 bg-green-500 absolute bottom-0 right-0 rounded-xl text-white text-md font-bold'>Create New Task</button>
          </div>
          </div>
    )
}

export default TaskPage;