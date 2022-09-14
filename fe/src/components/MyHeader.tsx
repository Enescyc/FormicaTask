import { PageHeader } from "antd";

const title = <h3 style={{ color: 'white', fontWeight: 'bold' }}>Formica Task App</h3>
const subTitle = <div>
    <a className="text-white ml-4 text-md font-bold hover:cursor-pointer hover:bg-slate-700 hover:text-white px-4 py-4 rounded-2xl " href="/admin/user">User</a>
    <a className="text-white ml-4 text-md font-bold hover:cursor-pointer hover:bg-slate-700 hover:text-white px-4 py-4 rounded-xl " href="/admin/task">Tasks</a>
    <a className="text-white ml-4 text-md font-bold hover:cursor-pointer hover:bg-slate-700 hover:text-white px-4 py-4 rounded-xl " href="/admin/managment">Task Managment</a>
</div>
const logo = <img src='https://uploads-ssl.webflow.com/5fe3b693bf78e3c51c663ec9/6068bfb416f374b6420915c7_logo-white.svg' alt='formica' style={{ width: "150px", height: "36px" }}></img>



function MyHeader() {
    return (
        <PageHeader className='bg-slate-900' style={{ color: '#888', width: '100%', height: '100%' }}
            title={title}
            subTitle={subTitle}
            extra={logo}>
        </PageHeader>
    )
}

export default MyHeader;