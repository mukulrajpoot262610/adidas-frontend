import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import UserDetailsModal from '../../components/Modal/UserDetailsModal'

const Personal = () => {

    const [showModal, setShowModal] = useState(false);
    const router = useRouter()
    const { user } = useSelector(state => state.auth)

    const handleDelete = () => {
        message.success('Your Account will delete in 2 hours')
    }

    const handleEditDetails = () => {
        setShowModal(true)
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

            {
                showModal && <UserDetailsModal setShowModal={setShowModal} />
            }

            <div className="lg:w-9/12 w-full mt-10">
                <div className="flex flex-col xl:flex-row gap-16">
                    <div className="p-4 w-full lg:w-8/12">
                        <h1 className="font-bold text-4xl uppercase">MY DETAILS</h1>
                        <p className="mb-4">Feel free to edit any of your details below so your account is up to date.</p>

                        <h1 className="font-bold text-2xl mt-8 uppercase">Personal DEtails</h1>
                        <h1 className="font-bold text-lg mt-4 uppercase">Name & gender</h1>
                        <p className="my-1 uppercase">{user?.name}</p>
                        <p className="my-1 uppercase">{user.gender}</p>
                        <p className="underline mt-3 mb-8 cursor-pointer" onClick={handleEditDetails}>Edit</p>

                        <h1 className="font-bold text-2xl mt-4 uppercase">Login DEtails</h1>
                        <h1 className="font-bold text-lg mt-4 uppercase">Email</h1>
                        <p className="my-1">{user?.email}</p>

                        <h1 className="font-bold text-2xl mt-8 uppercase">MANAGE ACCOUNT</h1>
                        <button type="submit" className="border-2 cursor-pointer bg-black text-white py-3 px-6 my-4 flex items-center uppercase" onClick={handleDelete}>Delete Account &nbsp; <HiArrowNarrowRight /></button>
                        <p className="my-4">By deleting your account you will no longer have access to the information stored in your adidas account such as order history or your wishlist.</p>
                    </div>

                    <div className="p-4 w-full lg:w-4/12">
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
                        <hr className="my-4" />
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

export default Personal

