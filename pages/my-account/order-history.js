import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import OrderHistoryCover from '../../components/Card/OrderHistoryCover'
import { HiArrowNarrowRight } from 'react-icons/hi'
import OrderTrackModal from '../../components/Modal/OrderTrackModal'

const Account = () => {

    const [showModal, setShowModal] = useState(false);
    const { user } = useSelector(state => state.auth)

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Account - adidas Online Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container w-full p-4 px-4 lg:px-10">
                <hr />
            </div>

            {
                showModal && <OrderTrackModal setShowModal={setShowModal} />
            }


            <div className="lg:w-9/12 w-full">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="p-6 lg:w-8/12 w-full">
                        <h1 className="font-bold text-4xl uppercase tracking-tighter">Order History</h1>

                        <div className='my-8'>
                            {
                                user.orders.length > 0 ? user.orders.map((e) => <OrderHistoryCover key={e._id} data={e} />) : <>
                                    <h1 className='font-bold uppercase'>No ORders found...</h1>
                                </>
                            }
                        </div>
                        <Link href="/products/explore" passHref>
                            <button className="cursor-pointer bg-black text-white py-3 px-6 my-4 flex items-center uppercase font-bold">Shop More &nbsp; <HiArrowNarrowRight /></button>
                        </Link>


                        <p className="mt-10">Looking for an order from a different account?</p>
                        <p className="underline uppercase font-bold my-3 hover:bg-black hover:text-white inline-block cursor-pointer"
                        onClick={() => setShowModal(true)}
                        >Track the Order</p>

                    </div>

                    <div className="p-6 lg:w-4/12 w-full">
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
                        <hr className="my-6 border-black" />
                        <h1 className="font-bold text-xl mt-4 uppercase">Need Help?</h1>
                        <p className="underline mt-3 cursor-pointer">Products</p>
                        <p className="underline mt-3 cursor-pointer">Delivery</p>
                        <p className="underline mt-3 cursor-pointer">Return & Refund</p>
                        <p className="underline mt-3 cursor-pointer">Ordering & Payment</p>
                        <p className="underline mt-3 cursor-pointer">Promotions & Vouchers</p>
                        <p className="underline mt-3 cursor-pointer">Company Information</p>
                    </div>
                </div>

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