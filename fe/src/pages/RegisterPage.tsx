import { Button, Input } from "antd";
import { UserOutlined, LockOutlined, } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { register, Register } from "../service/auth.service";
import { useNavigate } from "react-router-dom";


export function RegisterPage() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string | any>();
    const [name, setName] = useState<string | any>();
    const [secondName, setSecondName] = useState<string | any>();
    const navigate = useNavigate();



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
                        <Input value={email} onChange={(e: any) => setEmail(e.target.value)} type="email" size="large" placeholder="Email" prefix={<UserOutlined></UserOutlined>}></Input>
                        <Input value={password} onChange={(e: any) => setPassword(e.target.value)} className="mt-5" size="large" placeholder="Password" type="password" prefix={<LockOutlined />}></Input>
                        <Input value={name} onChange={(e: any) => setName(e.target.value)} className="mt-5" size="large" placeholder="Name" type="text" ></Input>
                        <Input value={secondName} onChange={(e: any) => setSecondName(e.target.value)} className="mt-5" size="large" placeholder="Second Name" type="text"></Input>
                        <Button
                            onClick={() => {
                                register({ email: email, password: password, name: name, secondName: secondName })
                                    .then(res => {
                                        if (res.message) {
                                            alert(res.message);
                                        }
                                        else {
                                            alert('Kayıt başarılı');
                                            navigate('/')
                                        }
                                    })

                            }}
                            shape="round" size="large" className="mt-5 bg-white"> Register</Button>
                        <h1 className="text-md text-white mt-2 ml-2  opacity-80">Don't have a account?</h1>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default RegisterPage;


