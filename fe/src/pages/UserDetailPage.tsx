
import { useParams } from "react-router-dom";
import MyHeader from "../components/MyHeader";
import TaskDetail from "../components/TaskDetail";
import UserDetail from "../components/UserDetail";


function UserDetailPage() {


    return (
        <div>
            <MyHeader></MyHeader>
            <UserDetail/>
        </div>
    )
}

export default UserDetailPage;