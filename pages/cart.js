import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
// import { ArrowRightOutlined } from '@ant-design/icons'
// import { Col, message, Row, Spin } from 'antd'
// import { useSelector, useDispatch } from 'react-redux'
// import CartCover from '../components/Card/CartCover'
// import BillingCard from '../components/Card/BillingCard'

const Cart = () => {

    const cart = useSelector(state => state.cart)
    const { products, quantity, total } = cart;

    const handleCoupanCode = () => {
        message.error("This code was not recognised, please check it and try again.")
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Cart - adidas IN</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container w-full p-4 px-4 lg:px-10 mt-20">
                <Row className="flex flex-col xl:flex-row">
                    <Col span={24} xl={1}></Col>

                    <Col span={24} xl={13} className="p-4">
                        {
                            products.length === 0 ? (
                                <>
                                    <h1 className="font-bold text-4xl uppercase">YOUR BAG IS EMPTY</h1>
                                    <p className="my-4">Once you add something to your bag - it will appear here. Ready to get started?</p>
                                    <Link href="/" passHref>
                                        <button className="border-2 cursor-pointer bg-black text-white py-4 px-6 mb-4 flex items-center">Shop Now &nbsp; <ArrowRightOutlined /></button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <h1 className="font-bold text-4xl uppercase">YOUR BAG</h1>
                                    <p className="my-4 text-base">TOTAL <span className=''>[{quantity} item]</span> &nbsp; ₹{total}</p>
                                    <div className="">
                                        {
                                            products.map((e, index) => <CartCover key={index} data={e} />)
                                        }
                                    </div>
                                </>
                            )
                        }
                    </Col>

                    <Col span={24} xl={1}></Col>

                    <Col span={24} xl={6} className="p-4">
                        {
                            products.length === 0 ? (
                                <>
                                    <h1 className="font-bold text-xl uppercase">NEED HELP?</h1>
                                    <p className="underline mt-3 cursor-pointer">Delivery</p>
                                    <p className="underline mt-3 cursor-pointer">Return & Refund</p>
                                    <p className="underline mt-3 cursor-pointer">Ordering & Payment</p>
                                    <p className="underline mt-3 cursor-pointer">Promotions & Vouchers</p>
                                </>
                            ) : (
                                <>
                                    <BillingCard />
                                    <Link href="/delivery" passHref>
                                        <button className="font-bold cursor-pointer bg-black text-white w-full py-4 px-6 my-4 flex items-center uppercase">CheckOut &nbsp; <ArrowRightOutlined /></button>
                                    </Link>
                                    <hr />
                                    <input type='text' className="w-full border outline-none my-4 p-3" placeholder="Enter Code Here..." />
                                    <button className="font-bold cursor-pointer bg-black text-white w-full py-4 px-6 mb-4 flex items-center uppercase" onClick={handleCoupanCode}>Apply &nbsp; <ArrowRightOutlined /></button>
                                    <hr />
                                    <h1 className="font-bold text-xl mt-4 uppercase">NEED HELP?</h1>
                                    <p className="underline mt-3 cursor-pointer">Delivery</p>
                                    <p className="underline mt-3 cursor-pointer">Return & Refund</p>
                                    <p className="underline mt-3 cursor-pointer">Ordering & Payment</p>
                                    <p className="underline mt-3 cursor-pointer">Promotions & Vouchers</p>
                                </>
                            )
                        }

                    </Col>

                    <Col span={24} xl={1}></Col>
                </Row>

            </div>
        </div>
    )
}

export default Cart
