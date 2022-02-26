import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Col, Row, Spin, Form, Input, message } from 'antd'
import { ArrowRightOutlined, GoogleOutlined, CheckOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import JoinBanner from '../components/Home/JoinBanner'
import { login } from '../redux/api/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import { loginFail, loginStart, loginSuccess } from '../redux/userReducer'
import { userLogin } from '../services/lib/authHandler'
import Cookies from 'js-cookie'

const Login = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const { isFeteching } = useSelector(state => state.user)

    const onFinish = async (values) => {
        dispatch(loginStart());
        try {
            const res = await userLogin(values)
            dispatch(loginSuccess(res.data))
            message.success('Login Succesfull 🎉')
            Cookies.set('userToken', res.data.token)
            router.push('/')
        } catch (err) {
            dispatch(loginFail())
            console.log(err.response)
            message.error(err.response.data.msg)
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>adidas Online Shop | adidas IN</title>
                <link rel="icon" href="/logo.svg" />
            </Head>

            <div className="container w-full p-4 px-4 lg:px-10 mt-10">
                <Row className="flex flex-col xl:flex-row">

                    <Col span={24} xl={2}></Col>

                    {/* LEFT */}
                    <Col span={24} xl={10} className="p-6">
                        <h1 className="font-bold text-4xl uppercase">LOG IN</h1>
                        <Link href="/forgetpassword" passHref={true}>
                            <p className="my-2 inline-block text-black underline cursor-pointer">Forgotten your Password?</p>
                        </Link>
                        <Form
                            name="basic"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            size="large"
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter a valid email-address!',
                                    },
                                ]}
                            >
                                <Input type='email' className="w-full border outline-none mt-4 p-3 px-5" placeholder="Enter Email Here..." />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter a Password!',
                                    },
                                ]}
                            >
                                <Input.Password className="w-full border outline-none p-3 px-5" placeholder="Enter Password Here..." />
                            </Form.Item>

                            <button type="submit" className="border-0 cursor-pointer bg-black text-white py-3 px-6 mb-4 flex items-center uppercase font-bold mt-4" disabled={isFeteching}>Log In &nbsp; <ArrowRightOutlined /></button>
                        </Form>

                        <p>By clicking LOG IN, I agree to the <span className=" inline-block text-black underline cursor-pointer">Terms & Conditions</span>, the <span className=" inline-block text-black underline cursor-pointer">Creators Club Terms & Conditions</span> and the adidas <span className=" inline-block text-black underline cursor-pointer">Privacy Policy</span>.</p>

                        <h1 className="font-bold text-xl uppercase my-4">OR</h1>

                        <div className="flex justify-between cursor-pointer my-4 border items-center p-3 px-5">
                            <h1 className="font-bold uppercase text-xl">Google</h1>
                            <GoogleOutlined className="text-2xl" />
                        </div>

                    </Col>

                    {/* RIGHT */}
                    <Col span={24} xl={10} className="p-6">
                        <h1 className="font-bold text-4xl uppercase">JOIN THE CLUB. GET REWARDED.</h1>
                        <p className="my-3">Join the adidas Creators Club membership program:</p>
                        <p className="mt-3 cursor-pointer flex items-center"><CheckOutlined /> &nbsp; &nbsp;Get immediate access to all Challenger level rewards</p>
                        <p className="mt-3 cursor-pointer flex items-center"><CheckOutlined /> &nbsp; &nbsp;Earn access to shop limited edition products</p>
                        <p className="mt-3 cursor-pointer flex items-center"><CheckOutlined /> &nbsp; &nbsp;Level up for exclusive access to sport, yoga and music events</p>
                        <p className="mt-3 cursor-pointer flex items-center"><CheckOutlined /> &nbsp; &nbsp;Receive our best special offers and promotions</p>
                        <p className="my-3">Join now and start earning points to access new levels and rewards. Its time to unlock the best of adidas.</p>
                        <Link href="/account-register" passHref={true}>
                            <button className="cursor-pointer bg-black text-white py-4 px-6 mb-4 flex items-center uppercase font-bold mt-4">Join the club &nbsp; <ArrowRightOutlined /></button>
                        </Link>
                        <img src="https://www.adidas.co.in/glass/react/137ceff/assets/img/CC2.0_my_account_register.jpg" height={500} width={500} />
                    </Col>

                    <Col span={24} xl={2}></Col>

                </Row>
            </div>

            <JoinBanner />

        </div>
    )
}

export default (Login)
