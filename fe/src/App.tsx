
import * as React from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TaskManagmentPage from "./pages/TaskManagmentPage";
import TaskPage from "./pages/TaskPage";
import UserPage from "./pages/UserPage";
import jwtDecode from 'jwt-decode';


const PrivateRoute = () => {

  const token = localStorage.getItem('token');
  try {
    if (token) {
      const decode = jwtDecode(token);
    }
  }
  catch (err) {
    return <Navigate to='/login'></Navigate>
  }



  return token ? <Outlet /> : <Navigate to="/login" />
}


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          < Route path='/login' element={<LoginPage></LoginPage>}></Route>
          < Route path='/register' element={<RegisterPage></RegisterPage>}></Route>

          <Route path='/admin' element={<PrivateRoute></PrivateRoute>} >
            <Route path='/admin/task/:id' element={<TaskManagmentPage></TaskManagmentPage>}></Route>
            <Route path='/admin/user' element={<UserPage></UserPage>}></Route>
            <Route path='/admin/task' element={<TaskPage></TaskPage>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
