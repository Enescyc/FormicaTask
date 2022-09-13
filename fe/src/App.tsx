
import * as React from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TaskManagmentPage from "./pages/TaskManagmentPage";
import TaskPage from "./pages/TaskPage";
import UserPage from "./pages/UserPage";


const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  // TODO VALIDATE TOKEN
  return token ? <Outlet /> : <Navigate to="/" />
}


function App() {

  return (
    <div>
      <BrowserRouter>
          <Routes>
            < Route path='/' element={<LoginPage></LoginPage>}></Route>
            < Route path='/register' element={<RegisterPage></RegisterPage>}></Route>

            <Route path='/admin' element={<PrivateRoute></PrivateRoute>} >
              <Route path='/admin/managment' element={<TaskManagmentPage></TaskManagmentPage>}></Route>
              <Route path='/admin/user' element={<UserPage></UserPage>}></Route>
              <Route path='/admin/task' element={<TaskPage></TaskPage>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
