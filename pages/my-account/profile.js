import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Col, Row, Collapse, message } from 'antd'
import { useSelector } from 'react-redux'
import EditUserDetails from '../../components/Modal/EditUserDetails'
import EditPassword from '../../components/Modal/EditPassword'
import { useSession } from 'next-auth/react'

const Personal = () => {

    const { data, status } = useSession()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
    const router = useRouter()
    // const { user } = useSelector(state => state.rootReducer.user.currentUser)

    const handlePasswordReset = () => {
        setIsPasswordModalVisible(true)
    }

    const handleDelete = () => {
        message.success('Your Account will delete in 2 hours')
    }

    const handleEditDetails = () => {
        setIsModalVisible(true)
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Account - adidas Online Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container w-full p-4 px-4 lg:px-10">
                <hr />
            </div>

            <EditUserDetails setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />
            {/* <EditPassword setIsPasswordModalVisible={setIsPasswordModalVisible} isPasswordModalVisible={isPasswordModalVisible} /> */}

            {
                data ? <>
                    <div className="container w-full p-4 px-4 lg:px-10 mt-10">
                        <Row className="flex flex-col xl:flex-row">
                            <Col span={24} xl={2}></Col>
                            <Col span={24} xl={15} className="p-4">
                                <h1 className="font-bold text-4xl uppercase">MY DETAILS</h1>
                                <p className="mb-4">Feel free to edit any of your details below so your account is up to date.</p>

                                <h1 className="font-bold text-2xl mt-8 uppercase">Personal DEtails</h1>
                                <h1 className="font-bold text-lg mt-4 uppercase">Name</h1>
                                <p className="my-1 uppercase">{data.user.name}</p>
                                {/* <p className="my-1 uppercase">{user.gender}</p> */}
                                <p className="underline mt-3 mb-8 cursor-pointer" onClick={handleEditDetails}>Edit</p>

                                <h1 className="font-bold text-2xl mt-4 uppercase">Login DEtails</h1>
                                <h1 className="font-bold text-lg mt-4 uppercase">Email</h1>
                                <p className="my-1">{data.user.email}</p>

                                <h1 className="font-bold text-2xl mt-4 uppercase">MANAGE ACCOUNT</h1>
                                <button type="submit" className="border-2 cursor-pointer bg-black text-white py-3 px-6 my-4 flex items-center uppercase" onClick={handleDelete}>Delete Account &nbsp; <ArrowRightOutlined /></button>
                                <p className="my-4">By deleting your account you will no longer have access to the information stored in your adidas account such as order history or your wishlist.</p>
                            </Col>

                            <Col span={24} xl={5} className="p-4">
                                <Link href="/my-account">
                                    <p className="mt-3 underline cursor-pointer">My Account</p>
                                </Link>
                                <Link href="/my-account/profile">
                                    <p className="font-bold mt-3 cursor-pointer">Personal Information</p>
                                </Link>
                                <Link href="/my-account/address-book">
                                    <p className="underline mt-3 cursor-pointer">Address Book</p>
                                </Link>
                                <Link href="/my-account/order-history">
                                    <p className="underline mt-3 cursor-pointer">Order History</p>
                                </Link>
                                <Link href="/wishlist">
                                    <p className="underline mt-3 cursor-pointer">Wish List</p>
                                </Link>
                                <hr className="my-4" />
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
                </> : "Loading..."
            }

        </div>
    )
}

export default Personal

