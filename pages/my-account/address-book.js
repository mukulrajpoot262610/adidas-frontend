import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Col, Row, Alert, Modal, Button, Form, Input } from 'antd'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import AddressModal from '../../components/Modal/AddressModal';
import { useSelector } from 'react-redux';

const Account = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    // const { user } = useSelector(state => state.user.currentUser)

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Account - adidas Online Store</title>
                <link passHref rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container w-full p-4 px-4 lg:px-10">
                <hr />
            </div>

            <div className="container w-full p-4 px-4 lg:px-10 mt-10">
                <Row className="flex flex-col xl:flex-row">
                    <Col span={24} xl={2}></Col>
                    <Col span={24} xl={15} className="p-6">
                        <h1 className="font-bold text-4xl uppercase">ADDRESS BOOK</h1>
                        <p className="my-3 mb-8">You have <span className="font-bold"> address slots</span> remaining.</p>

                        <div className="flex flex-wrap">
                            <div className="relative m-2 w-96 border border-gray-300 h-56 p-6 flex justify-between flex-col items-start hover:border-black cursor-pointer" onClick={showModal}>
                                <h1>New Address</h1>
                                <PlusOutlined className="text-2xl" />
                            </div>

                            {
                                user && user.address.map((e, i) => <div key={i} className="relative w-96 border m-2 border-gray-300 h-56 p-6 flex justify-between flex-col items-start hover:border-black cursor-pointer" >
                                    <div>
                                        <h1><span className='font-bold uppercase'>Landmark: </span>{e.landmark}</h1>
                                        <h1><span className='font-bold uppercase'>Street: </span>{e.street}</h1>
                                        <h1><span className='font-bold uppercase'>City: </span>{e.city}</h1>
                                        <h1><span className='font-bold uppercase'>State: </span>{e.state}</h1>
                                        <h1><span className='font-bold uppercase'>Country: </span>{e.country}</h1>
                                        <h1><span className='font-bold uppercase'>Pincode: </span>{e.pincode}</h1>
                                    </div>
                                    <div className='flex justify-end w-full'>
                                        <EditOutlined className="text-2xl mx-2" />
                                        <DeleteOutlined className="text-2xl" />
                                    </div>
                                </div>)
                            }
                        </div>

                        <AddressModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />

                    </Col>

                    <Col span={24} xl={5} className="p-6">
                        <Link passHref href="/my-account">
                            <p className="mt-3 underline cursor-pointer">My Account</p>
                        </Link>
                        <Link passHref href="/my-account/profile">
                            <p className="underline mt-3 cursor-pointer">Personal Information</p>
                        </Link>
                        <Link passHref href="/my-account/address-book">
                            <p className="font-bold mt-3 cursor-pointer">Address Book</p>
                        </Link>
                        <Link passHref href="/my-account/order-history">
                            <p className="underline mt-3 cursor-pointer">Order History</p>
                        </Link>
                        <Link passHref href="/wishlist">
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

