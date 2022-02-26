import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { CarOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Col, Row, Form, Input, message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import OrderCover from '../components/Card/OrderCover'
import AuthCard from '../components/Card/AuthCard';
import Stepper from '../components/Steps/Stepper';
import { useRouter } from 'next/router';
import { updateUserData } from '../services/lib/userHandler';
import BillingCard from '../components/Card/BillingCard';

const Delivery = ({ }) => {

    const dispatch = useDispatch()
    const router = useRouter()
    const cart = useSelector(state => state.cart)
    const { isAuth, currentUser } = useSelector(state => state.user)
    const { products, quantity, total } = cart;

    const [country, setCountry] = useState()
    const [region, setRegion] = useState()

    const onFinish = async (values) => {

        if (!isAuth) {
            message.error('Please Sign in to Continue!')
        }


        try {
            const res = await updateUserData(currentUser.user._id, { address: values });
            sessionStorage.setItem('address', JSON.stringify(values))
            router.push('/payment')
        } catch (err) {
            console.log(err.response)
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Delivery - adidas Online Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Stepper page={2} />

            <div className="container w-full p-4 px-4 lg:px-10">
                <Row className="flex flex-col xl:flex-row">

                    <Col span={24} xl={2}></Col>

                    <Col span={24} xl={12} className="p-4">
                        <h1 className="font-bold text-4xl mb-4 uppercase">SHIPPING ADDRESS</h1>

                        <Form
                            name="basic"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            size="large"
                        >
                            <div className="flex items-center w-full">
                                <Form.Item
                                    className="mr-2 w-full"
                                    name="firstName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your FirstName!',
                                        },
                                    ]}
                                >
                                    <Input type='text' className="w-full border outline-none  p-3" placeholder="Enter FirstName Here..." />
                                </Form.Item>
                                <Form.Item
                                    className="ml-2 w-full"
                                    name="lastName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your LastName!',
                                        },
                                    ]}
                                >
                                    <Input type='text' className="w-full border outline-none  p-3" placeholder="Enter LastName Here..." />
                                </Form.Item>
                            </div>
                            <Form.Item
                                name="street"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Street Address!',
                                    },
                                ]}
                            >
                                <Input type='text' className="w-full border outline-none  p-3" placeholder="Enter Street Address Here..." />
                            </Form.Item>
                            <Form.Item
                                name="landmark"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input nearest Landmark!',
                                    },
                                ]}
                            >
                                <Input type='text' className="w-full border outline-none  p-3" placeholder="Enter Nearest Landmark Here..." />
                            </Form.Item>
                            <div className="flex items-center w-full">
                                <Form.Item
                                    className="mr-2 w-full"
                                    name="country"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please Select your Country!',
                                        },
                                    ]}
                                >
                                    <CountryDropdown
                                        defaultOptionLabel="Select a country, man."
                                        value={country}
                                        className="w-full border outline-none  p-3"
                                        onChange={(e) => setCountry(e)} />
                                </Form.Item>
                                <Form.Item
                                    className="ml-2 w-full"
                                    name="state"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please Select your State!',
                                        },
                                    ]}
                                >
                                    <RegionDropdown
                                        blankOptionLabel="No country selected, man."
                                        defaultOptionLabel="Now select a region, pal."
                                        country={country}
                                        value={region}
                                        className="w-full border outline-none  p-3"
                                        onChange={(e) => setRegion(e)} />
                                </Form.Item>
                            </div>
                            <div className="flex items-center w-full">
                                <Form.Item
                                    className="mr-2 w-full"
                                    name="city"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your City or town!',
                                        },
                                    ]}
                                >
                                    <Input type='text' className="w-full mr-2 border outline-none  p-3" placeholder="Enter City Here..." />
                                </Form.Item>
                                <Form.Item
                                    className="ml-2 w-full"
                                    name="pincode"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your pincode!',
                                        },
                                    ]}
                                >
                                    <Input type='number' className="w-full border outline-none  p-3" placeholder="Enter Pincode Here..." maxLength={6} />
                                </Form.Item>
                            </div>
                            <button type="submit" className="font-bold cursor-pointer bg-black text-white py-4 px-6 my-4 flex items-center uppercase">Review & Pay &nbsp; <ArrowRightOutlined /></button>
                        </Form>
                        <hr />

                        <h1 className="font-bold text-2xl uppercase my-4">ARRIVING</h1>
                        <div className="border p-4 mb-8">
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold text-lg uppercase mb-2">Standard Delivery</h1>
                                <h1 className="font-bold text-lg uppercase mb-2">Free</h1>
                            </div>
                            <p className="cursor-pointer flex items-center"><CarOutlined /> &nbsp;within 3-9 business days</p>
                        </div>
                        <hr />
                    </Col>

                    <Col span={24} xl={1}></Col>

                    <Col span={24} xl={7} className="p-4">

                        {
                            isAuth ? "" : <AuthCard />
                        }
                        <BillingCard />

                        <h1 className="font-bold text-xl uppercase mb-2 mt-4">Order details</h1>
                        <div>
                            {
                                products.map((e, i) => <OrderCover data={e} key={i} />)
                            }
                        </div>
                        <h1 className="font-bold text-xl mt-4 uppercase">NEED HELP?</h1>
                        <p className="underline mt-3 cursor-pointer">Delivery</p>
                        <p className="underline mt-3 cursor-pointer">Return & Refund</p>
                        <p className="underline mt-3 cursor-pointer">Ordering & Payment</p>
                        <p className="underline mt-3 cursor-pointer">Promotions & Vouchers</p>

                    </Col>

                    <Col span={24} xl={2}></Col>
                </Row>

            </div>
        </div>
    )
}

export default (Delivery)
