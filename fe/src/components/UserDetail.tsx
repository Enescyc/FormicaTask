import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUser, getUserById, updateUser, UpdateUser } from "../service/user.service";


const UserDetail: React.FC = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState<UpdateUser>({
        email: '',
        id: 0,
        name: '',
        password: '',
        secondName: ''
    });

    const onHandleChange = (e: any) => {
        setUser({ ...user, [e.target.name]: e.target.value.toLowerCase() } as UpdateUser);
    }
    useEffect(() => {
        getUserById(id).then(res => {
            setUser(res);
        })
    }, [])


    return (
        <div className='flex flex-wrap w-full h-full items-center justify-center'>
            <div className="mt-40 bg-slate-900 px-4 py-4 text-white rounded-xl shadow-xl">
                <form className="flex flex-col">
                    <div className="flex justify-center items-center">
                        <label className="font-bold  w-24 h-10 ">Email:</label>
                        <Input onChange={onHandleChange} value={user?.email} name={"email"} className="w-full h-10 mb-2" type="email"></Input>
                    </div>
                    <div className="flex justify-center items-center">
                        <label className="font-bold  w-24 h-10 ">Password:</label>
                        <Input onChange={onHandleChange} value={user?.password} name={"password"} className="w-full h-10 mb-2" type="password"></Input>
                    </div>
                    <div className="flex justify-center items-center">
                        <label className="font-bold w-24 h-10 ">Name:</label>
                        <Input onChange={onHandleChange} value={user?.name} name={"name"} className="w-full h-10 mb-2" type="text"></Input>
                    </div>
                    <div className="flex justify-center items-center">
                        <label className="font-bold w-24 h-10 " >Second Name:</label>
                        <Input onChange={onHandleChange} value={user?.secondName} name={"secondName"} className="w-full h-10" type="email"></Input>
                    </div>
                    <div className="w-full self-end mt-4">
                        <Button className="bg-white"
                            onClick={() => {
                                updateUser(user).then(res => {
                                    if (res.status === 200) {
                                        alert('Güncelleme Başarılı');
                                        getUserById(id).then(res => {
                                            setUser(res);
                                        })

                                    }
                                    else {
                                        alert('error')
                                    }
                                });
                            }}
                        >Güncelle</Button>

                        <Button className="bg-sky-900 font-bold w-24 hover:bg-white-800 ml-5 hover:text-black text-white"
                            onClick={()=> {
                                deleteUser(id).then(res => {
                                    if(res.status===200) {
                                        alert('Kullanıcı Silindi');
                                        navigate('/admin/user')
                                    }
                                    else {
                                        alert(res.status)
                                    }
                                });
                            }}
                        >Sil </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default UserDetail;