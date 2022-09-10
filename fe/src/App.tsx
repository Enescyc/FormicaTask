import { Layout, Tabs } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import './App.css';
import MyHeader from './components/MyHeader';
import { LoginPage } from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TaskManagmentPage from './pages/TaskManagmentPage';
import TaskPage from './pages/TaskPage';
import UserPage from './pages/UserPage';

const items = [
  { label: 'Tasks', key: 'item-1', children: 'Content 1' },
  { label: 'Users', key: 'item-2', children: 'Content 2' },
  { label: 'Task Managment', key: 'item-3', children: 'Content 3' },
  { label: 'Login Page', key: 'item-4', children: '' },
  { label: 'Register Page', key: 'item-5', children: '' },
];



function App() {



  return (
    <Layout className='text-white'>
      <Header>
        
        <MyHeader></MyHeader>

      </Header>
      <Content className="min-h-full w-full px-10 py-10 bg-white shadow-sm">
        <Tabs>

          <Tabs.TabPane tab="Tasks" key="item-1">
            <TaskPage></TaskPage>
          </Tabs.TabPane>

          <Tabs.TabPane tab="User" key="item-2">
            <UserPage></UserPage>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Task Managment" key="item-3">
            <TaskManagmentPage></TaskManagmentPage>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Login Page" key="item-4">
            <TaskManagmentPage></TaskManagmentPage>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Register Page" key="item-5">
            <RegisterPage></RegisterPage>
          </Tabs.TabPane>

        </Tabs>

      </Content>
      <Footer>
         <LoginPage></LoginPage>
      </Footer>
   
    </Layout>
  );
}

export default App;
