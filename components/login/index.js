import { useState } from "react";
import axios from "../../pages/api/axios";
import { ButtonLight, ButtonOrginal } from '../button';
import LoadingIcon from '../loadingIcon/index'

export default function Login({ onLogin = () => { } }) {
    const [user, setUser] = useState(null);
    const [openForm, setOpenForm] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [load, setLoad] = useState(false);
    async function getData({ userName = '', password = '' }) {
        await axios.post('auth/login', { userName, password })
            .then(response => setUser(response.data))
            .catch(() => setUser(null));
        onLogin(user);


    }
    const LoginForm = (<div class="fixed justify-center z-50 top-0 left-0 bottom-0 right-0 bg-backloginModal">
        <div class='relative grid justify-center content-center bg-modalLogin w-3/4 h-3/4 min-w-350 min-h-300 m-auto mt-16 '>

            <div class="relative text-center text-xl md:text-2xl xl:text-3xl  ">ورود به حساب کاربری</div>
            <div class='w-72 m-auto mt-4 xl:mt-7'>
                <div class="text-lg">نام کاربری</div>
                <img src='/loginIcons/icon.png' class='inline-block -ml-8 '></img>
                <input type='text' class="w-full h-10 xl:h-14 rounded-xl pr-10 border border-solid border-inputBorderNormal" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
            </div>
            <div class='w-72 m-auto mt-2 xl:mt-5'>
                <div class="text-lg">رمز عبور</div>
                <img src='/loginIcons/lock.png' class='inline-block -ml-8'></img>
                <input type='password' class="w-full h-10 xl:h-14 rounded-xl pr-10 border border-solid border-inputBorderNormal" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div class='w-72 m-auto mt-5 xl:mt-5'>

                <ButtonOrginal onClick={() => getData({ userName, password })}>

                    <div class="flex justify-center">
                        {load ? <LoadingIcon /> : null}
                        ورود
                    </div>

                </ButtonOrginal>
            </div>
        </div>

    </div>)

    if (user) return (<div>{user?.fullName}</div>)
    return (<div>
        <ButtonLight onClick={() => setOpenForm(true)}>ورود</ButtonLight>
        {!user && openForm ? LoginForm : null}
    </div>)

}