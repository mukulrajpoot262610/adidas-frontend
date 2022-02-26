import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Col, Row, Alert } from 'antd'

const Account = () => {

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Account - adidas Online Store</title>
                <link passHref rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container w-full p-4 px-4 lg:px-10">
                <hr />
            </div>

            <div className="container w-full p-4 px-4 lg:px-10">
                <Row className="flex flex-col xl:flex-row">
                    <Col span={24} xl={2}></Col>
                    <Col span={24} xl={15} className="p-6">
                        <h1 className="font-bold text-4xl uppercase">my wishlist</h1>
                        <p className="uppercase my-4">1 Item</p>

                        <div className="flex flex-wrap">

                        </div>

                    </Col>

                    <Col span={24} xl={5} className="p-6">
                        <Link passHref href="/my-account">
                            <p className="mt-3 underline cursor-pointer">My Account</p>
                        </Link>
                        <Link passHref href="/my-account/profile">
                            <p className="underline mt-3 cursor-pointer">Personal Information</p>
                        </Link>
                        <Link passHref href="/my-account/address-book">
                            <p className="underline mt-3 cursor-pointer">Address Book</p>
                        </Link>
                        <Link passHref href="/my-account/order-history">
                            <p className="underline mt-3 cursor-pointer">Order History</p>
                        </Link>
                        <Link passHref href="/wishlist">
                            <p className="font-bold mt-3">Wish List</p>
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

