import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Col, Row, Form, Input, message } from 'antd'
import { ArrowRightOutlined, GoogleOutlined, CheckOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import { userRegister } from '../services/lib/authHandler'
import { loginFail, loginStart, loginSuccess } from '../redux/userReducer'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

const Register = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const [redirect, setRedirect] = useState(router.query.redirect)
    const [genderSelect, setGenderSelect] = useState()

    const onFinish = async (values) => {
        values.gender = genderSelect;
        dispatch(loginStart())
        try {
            const res = await userRegister(values)
            dispatch(loginSuccess(res.data))
            message.success('Registration Succesfull 🎉')
            Cookies.set('userToken', res.data.token)
            redirect ? router.push(`/${redirect}`) : router.push('/')
        } catch (err) {
            dispatch(loginFail())
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


                    {/* LEFT */}
                    <Col span={24} xl={12} className="p-6">
                        <h1 className="font-bold text-5xl uppercase">REGISTER</h1>
                        <p className="my-4">Sign up with</p>
                        <div className="flex justify-between cursor-pointer my-4 border items-center p-3 px-5">
                            <h1 className="font-bold uppercase text-xl">Google</h1>
                            <GoogleOutlined className="text-2xl" />
                        </div>

                        <h1 className="font-bold text-xl uppercase my-4">OR</h1>

                        <Form
                            name="basic"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            size="large"
                        >
                            <Form.Item
                                name="firstName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter First name!',
                                    },
                                ]}
                            >
                                <Input type='text' className="w-full border outline-none p-3 px-5" placeholder="First Name" />
                            </Form.Item>
                            <Form.Item
                                name="lastName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter last name!',
                                    },
                                ]}
                            >
                                <Input type='text' className="w-full border outline-none p-3 px-5" placeholder="Last Name" />
                            </Form.Item>

                            <Form.Item
                                name="gender"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Please select your gender!',
                                    },
                                ]}
                            >
                                <h1 className="uppercase font-bold text-xl mb-2">Gender</h1>
                                <div className="flex items-center">
                                    <input type='radio' value="men" name="gender" onChange={(e) => setGenderSelect(e.target.value)} />
                                    <label className="text-xl mr-4">Men</label>
                                    <input type='radio' value="women" name="gender" onChange={(e) => setGenderSelect(e.target.value)} />
                                    <label className="text-xl mr-4">Women</label>
                                    <input type='radio' value="other" name="gender" onChange={(e) => setGenderSelect(e.target.value)} />
                                    <label className="text-xl ">Other</label>
                                </div>
                            </Form.Item>

                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter Valid Email!',
                                    },
                                ]}
                            >
                                <Input type='email' className="w-full border outline-none p-3 px-5" placeholder="Email" />
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
                                <Input.Password className="w-full border outline-none p-3 px-5" placeholder="Password" />
                            </Form.Item>

                            <button type="submit" className=" cursor-pointer bg-black text-white py-3 px-6 mb-4 flex items-center uppercase font-bold mt-4">Register &nbsp; <ArrowRightOutlined /></button>
                        </Form>

                    </Col>

                    {/* RIGHT */}
                    <Col span={24} xl={12} className="p-6">
                        <h1 className="font-bold text-4xl uppercase">JOIN THE CLUB. GET REWARDED.</h1>
                        <p className="my-3">Join the adidas Creators Club membership program:</p>
                        <p className="mt-3 cursor-pointer flex items-center"><CheckOutlined /> &nbsp; &nbsp;Get immediate access to all Challenger level rewards</p>
                        <p className="mt-3 cursor-pointer flex items-center"><CheckOutlined /> &nbsp; &nbsp;Earn access to shop limited edition products</p>
                        <p className="mt-3 cursor-pointer flex items-center"><CheckOutlined /> &nbsp; &nbsp;Level up for exclusive access to sport, yoga and music events</p>
                        <p className="mt-3 cursor-pointer flex items-center"><CheckOutlined /> &nbsp; &nbsp;Receive our best special offers and promotions</p>
                        <p className="my-3">Join now and start earning points to access new levels and rewards. Its time to unlock the best of adidas.</p>

                        <p className="mt-8">Want to learn more about the Creators Club ?</p>
                        <p className="underline cursor-pointer text-orange-800 mb-8">Read more about free membership</p>

                        <img src="https://www.adidas.co.in/glass/react/137ceff/assets/img/CC2.0_my_account_register.jpg" />
                    </Col>


                </Row>
            </div>
        </div>
    )
}

export default (Register)
