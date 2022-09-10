import { Button, Input, InputProps } from "antd";
import { UserOutlined, LockOutlined, } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import axios from "axios";

export function LoginPage() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onEmailHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const onPasswordHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const onLoginButtonClick = (e: any) => {

        console.log(email, password)
        try {
            axios.post('http://localhost:3333/auth/login', { email, password }).then((res: { status: number; data: any; }) => {
               console.log(res)
            })

        } catch (error) {
            console.log('eerorr')
        }

    }

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-slate-800 ">
            <div className="flex flex-col items-center xl:w-1/4 xl:h-3/5 h-3/4 w-3/4 bg-slate-800 shadow-2xl">
                <div className="px-4 py-4">
                    <img src="formica.svg"></img>
                </div>
                <h1 className="lg:text-2xl text-lg text-white font-semibold pt-10">Welcome The Formica</h1>
                <h1 className="xl:text-3xl text-3xl text-white font-semibold pt-4">Task Managment System</h1>

                <form className="w-full h-full flex flex-col justify-start items-center pt-5">
                    <div className="flex flex-col flex-wrap w-3/5 mt-10">
                        <Input value={email} onChange={onEmailHandleChange} type="text" size="large" placeholder="Email" prefix={<UserOutlined></UserOutlined>}></Input>
                        <Input value={password} onChange={onPasswordHandleChange} className="mt-5" size="large" placeholder="Password" type="password" prefix={<LockOutlined />}></Input>
                        <Button onClick={onLoginButtonClick} shape="round" size="large" className="mt-5 bg-white"> Login</Button>

                        <Button shape="round" size="large" className="mt-5 bg-white"> Register</Button>
                        <h1 className="text-md text-white mt-2 ml-2  opacity-80">Don't have a account?</h1>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;


