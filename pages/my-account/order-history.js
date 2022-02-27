import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Col, Row, Alert } from 'antd'
import { getAllOrders } from '../../services/lib/orderHandler'
import { useSelector } from 'react-redux'
import OrderHistoryCover from '../../components/Card/OrderHistoryCover'

const Account = () => {

    const [orders, setOrders] = useState()
    const { user } = useSelector(state => state.user.currentUser)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await getAllOrders(user._id);
                if (res.data.success) {
                    setOrders(res.data.orders)
                }
            } catch (err) {
                console.log(err.response)
            }
        }
        fetchData()

    }, [user])

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Account - adidas Online Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container w-full p-4 px-4 lg:px-10">
                <hr />
            </div>

            <div className="container w-full p-4 px-4 lg:px-10">
                <Row className="flex flex-col xl:flex-row">
                    <Col span={24} xl={2}></Col>
                    <Col span={24} xl={15} className="p-6">
                        <h1 className="font-bold text-4xl uppercase">Order History</h1>

                        <div className='mt-8'>
                            {
                                orders ? orders.map((e) => <OrderHistoryCover key={e._id} data={e} />) : <><h1 className='font-bold uppercase'>No ORders found...</h1></>
                            }
                        </div>


                        <p className="mt-10">Looking for an order from a different account?</p>
                        <p className="underline uppercase font-bold my-3 hover:bg-black hover:text-white inline-block cursor-pointer">Track the Order</p>

                    </Col>

                    <Col span={24} xl={5} className="p-6">
                        <Link href="/my-account">
                            <p className="mt-3 underline cursor-pointer">My Account</p>
                        </Link>
                        <Link href="/my-account/profile">
                            <p className="underline mt-3 cursor-pointer">Personal Information</p>
                        </Link>
                        <Link href="/my-account/address-book">
                            <p className="underline mt-3 cursor-pointer">Address Book</p>
                        </Link>
                        <Link href="/my-account/order-history">
                            <p className="font-bold mt-3">Order History</p>
                        </Link>
                        <Link href="/wishlist">
                            <p className="underline mt-3 cursor-pointer">Wish List</p>
                        </Link>
                        <hr className="my-6 border-black" />
                        <h1 className="font-bold text-xl mt-4 uppercase">Need Help?</h1>
                        <p className="underline mt-3 cursor-pointer">Products</p>
                        <p className="underline mt-3 cursor-pointer">Delivery</p>
                        <p className="underline mt-3 cursor-pointer">Return & Refund</p>
                        <p className="underline mt-3 cursor-pointer">Ordering & Payment</p>
                        <p className="underline mt-3 cursor-pointer">Promotions & Vouchers</p>
                        <p className="underline mt-3 cursor-pointer">Company Information</p>
                    </Col>
                    <Col span={24} xl={2}></Col>
                </Row>

            </div>
        </div>
    )
}

export default (Account)

export async function getServerSideProps() {
    let orders = [];
    try {
        const res = await getAllOrders();
        if (res.data.success) {
            orders = res.data.orders;
        }
    } catch (err) {
        console.log(err.response)
    }

    return {
        props: { orders }
    }
}