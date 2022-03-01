import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useDispatch } from 'react-redux';
import { loginFail, loginStart, loginSuccess } from '../../redux/authSlice';
// import { userLogin } from '../../services/lib/authHandler';
// import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const AuthCard = () => {

    const router = useRouter();
    const dispatch = useDispatch()

    const onFinish = async (values) => {
        dispatch(loginStart());
        try {
            const res = await userLogin(values)
            dispatch(loginSuccess(res.data))
            message.success('Login Succesfull 🎉')
            Cookies.set('userToken', res.data.token)
        } catch (err) {
            dispatch(loginFail())
            console.log(err.response)
            message.error(err.response.data.msg)
        }

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <div className="border-2 border-black my-4 p-4 ">
        <h1 className="font-bold text-xl uppercase mb-2">Login</h1>
        <div>
            <form>
                <input type='email' className="w-full border outline-none  p-3 px-5" placeholder="Enter Email Here..." />
                <input className="w-full border outline-none  p-3 px-5 my-3" placeholder="Enter Password Here..." />
                <h1 className='hover:underline cursor-pointer mb-3'>Forgetten Your Password?</h1>

                <button type="submit" className="font-bold cursor-pointer bg-black text-white py-3 px-6 flex items-center uppercase">Log In &nbsp; <HiArrowNarrowRight /></button>
            </form>
        </div>
    </div>;
};

export default AuthCard;
