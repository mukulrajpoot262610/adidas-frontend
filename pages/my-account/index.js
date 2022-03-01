import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../redux/authSlice'
import { useRouter } from 'next/router'
import { logout, UpdateDetails } from '../../services/api'
import toast from 'react-hot-toast'

const Account = () => {

    const dispatch = useDispatch()
    const router = useRouter()
    const [name, setName] = useState()
    const [genderSelect, setGenderSelect] = useState()
    const { user } = useSelector(state => state.auth)

    const handleLogout = async () => {
        try {
            const { data } = await logout()
            dispatch(setAuth(data))
            toast.success('Logout Successfull')
            router.replace('/')
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await UpdateDetails({ name, gender: genderSelect })
            dispatch(setAuth(data))
            toast.success('Added Successfully')
        } catch (err) {
            console.log(err)
        }
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

            <div className="lg:w-9/12 w-full mt-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div xl={15} className="p-6 w-full lg:w-8/12">
                        <div className="flex flex-col lg:flex-row justify-between items-center">
                            <h1 className="font-bold text-4xl uppercase">Hi {user?.name}</h1>
                            <div className="">
                                <h1 className="font-normal text-lg text-right" >Not {user?.name}? <span className="uppercase font-bold underline cursor-pointer" onClick={handleLogout}>Logout</span> </h1>
                                <p className="text-sm text-right">THIS WILL LOG YOU OUT FROM YOUR CURRENT DEVICE</p>
                            </div>
                        </div>
                        <hr />
                        {
                            user?.name ? "" : <div className="flex justify-between items-center mt-6 border p-6">
                                <form onSubmit={handleSubmit} className="w-full">
                                    <h1 className="uppercase font-bold text-xl mb-3 mt-5">Enter your name</h1>
                                    <input type='text' className="w-full border outline-none p-3 px-5" onChange={(e) => setName(e.target.value)} placeholder="Name" />

                                    <h1 className="uppercase font-bold text-xl mb-3 mt-5">Gender</h1>
                                    <div className="flex items-center mb-3">
                                        <input type='radio' value="men" name="gender" onChange={(e) => setGenderSelect(e.target.value)} />
                                        <label className="text-xl mr-4">Men</label>
                                        <input type='radio' value="women" name="gender" onChange={(e) => setGenderSelect(e.target.value)} />
                                        <label className="text-xl mr-4">Women</label>
                                        <input type='radio' value="other" name="gender" onChange={(e) => setGenderSelect(e.target.value)} />
                                        <label className="text-xl ">Other</label>
                                    </div>

                                    <button type="submit" className=" cursor-pointer bg-black text-white py-3 px-6 mb-4 flex items-center uppercase font-bold mt-5">
                                        Save &nbsp; <HiArrowNarrowRight /></button>
                                </form>
                            </div>
                        }


                        <div className='flex flex-col lg:flex-row bg-gray-400 mt-20'>
                            <div className='p-6 w-full lg:w-7/12'>
                                <h1 className="font-medium text-white text-4xl uppercase">YOU ARE A CHALLENGER</h1>
                                <p className='text-xs text-white my-3'>Its go time. You now have access to all Challenger level rewards. Explore your rewards and start earning points to unlock the next level.</p>
                                <button className="cursor-pointer bg-black text-white py-3 px-6 mb-4 flex items-center uppercase font-bold mt-4">View Your Rewards &nbsp; <HiArrowNarrowRight /></button>
                            </div>
                            <div className='w-full lg:w-5/12'>
                                <img src='https://www.adidas.co.in/on/demandware.static/-/Sites-adidas-IN-Library/default/dwe8130ce7/GlassCreatorsClub/lvl1.png' alt='' />
                            </div>
                        </div>

                    </div>

                    <div xl={5} className="p-6 w-full lg:w-4/12">
                        <Link href="/my-account">
                            <p className="mt-3 font-bold cursor-pointer">My Account</p>
                        </Link>
                        <Link href="/my-account/profile">
                            <p className="underline mt-3 cursor-pointer">Personal Information</p>
                        </Link>
                        <Link href="/my-account/address-book">
                            <p className="underline mt-3 cursor-pointer">Address Book</p>
                        </Link>
                        <Link href="/my-account/order-history">
                            <p className="underline mt-3 cursor-pointer">Order History</p>
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

