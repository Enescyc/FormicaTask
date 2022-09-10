import { Button, Input } from "antd";
import { UserOutlined, LockOutlined, } from '@ant-design/icons';


export function RegisterPage() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-slate-800 ">
            <div className="flex flex-col items-center xl:w-1/4 h-3/4 w-3/4 bg-slate-800 shadow-2xl">
                <div className="">
                    <img src="formica.svg" className="mt-10"></img>
                </div>
                <h1 className="lg:text-2xl text-lg text-white font-semibold mt-10">Welcome The Formica</h1>
                <h1 className="xl:text-3xl text-3xl text-white font-semibold mt-10">Register Form</h1>

                <form className="w-full h-full flex flex-col justify-start items-center pt-5">
                    <div className="flex flex-col flex-wrap w-3/5 mt-10">
                        <Input type="email" size="large" placeholder="Email" prefix={<UserOutlined></UserOutlined>}></Input>
                        <Input className="mt-5" size="large" placeholder="Password" type="password" prefix={<LockOutlined />}></Input>
                        <Input className="mt-5" size="large" placeholder="Name" type="text" ></Input>
                        <Input className="mt-5" size="large" placeholder="Second Name" type="text"></Input>
                        <Button shape="round" size="large" className="mt-5 bg-white"> Register</Button>
                        <h1 className="text-md text-white mt-2 ml-2  opacity-80">Don't have a account?</h1>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;


