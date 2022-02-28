import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { AiOutlinePlus, AiFillDelete } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'
import { AiFillCar } from 'react-icons/ai'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import BillingCard from '../components/Card/BillingCard';
import AuthCard from '../components/Card/AuthCard';
import OrderCover from '../components/Card/OrderCover';
import { AddAddress, DeleteAddress } from '../services/api'
import { setAuth } from '../redux/authSlice';

const Delivery = ({ }) => {

    const dispatch = useDispatch()
    const router = useRouter()
    const cart = useSelector(state => state.cart)
    const { isAuth, user } = useSelector(state => state.auth)
    const { products, quantity, total } = cart;

    const [country, setCountry] = useState()
    const [region, setRegion] = useState()
    const [street, setStreet] = useState()
    const [landmark, setLandmark] = useState()
    const [pincode, setPincode] = useState()
    const [city, setCity] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = { street, landmark, country, state: region, pincode, city }

        try {
            const { data } = await AddAddress(payload)
            dispatch(setAuth(data))
            router.push('/payment')
        } catch (err) {
            console.log(err)
        }
    }

    const handleDelete = async (e) => {
        try {
            const { data } = await DeleteAddress(e)
            dispatch(setAuth(data))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Delivery - adidas Online Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-11/12 lg:w-9/12 mt-10">
                <div className="flex flex-col xl:flex-row gap-16">
                    <div className="p-4 w-full lg:w-8/12">
                        <h1 className="font-bold text-4xl mb-4 uppercase">SHIPPING ADDRESS</h1>
                        {
                            user?.address?.length > 0 ?
                                <>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <div className="relative border border-gray-300 h-56 p-6 flex justify-between flex-col items-start hover:border-black cursor-pointer">
                                            <h1>New Address</h1>
                                            <AiOutlinePlus className="text-2xl" />
                                        </div>

                                        {
                                            user?.address?.map((e, i) => <div key={i} className={`elative border border-gray-300 h-56 p-6 flex justify-between flex-col items-start hover:border-black cursor-pointer `} >
                                                <div>
                                                    <h1><span className='font-bold uppercase'>Landmark: </span>{e.landmark}</h1>
                                                    <h1><span className='font-bold uppercase'>Street: </span>{e.street}</h1>
                                                    <h1><span className='font-bold uppercase'>City: </span>{e.city}</h1>
                                                    <h1><span className='font-bold uppercase'>State: </span>{e.state}</h1>
                                                    <h1><span className='font-bold uppercase'>Country: </span>{e.country}</h1>
                                                    <h1><span className='font-bold uppercase'>Pincode: </span>{e.pincode}</h1>
                                                </div>
                                                <div className='flex justify-between items-end w-full'>
                                                    <h1 className='text-xs underline'>Default</h1>
                                                    <div className='flex'>
                                                        {/* <FaEdit className="text-2xl mx-2"  /> */}
                                                        <AiFillDelete className="text-2xl" onClick={() => handleDelete(e._id)} />
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                    <button className="font-bold cursor-pointer bg-black text-white py-4 px-6 my-4 flex items-center uppercase">Review & Pay &nbsp; <HiArrowNarrowRight /></button>
                                </>
                                : <form onSubmit={handleSubmit} className="mt-10">
                                    <div className="flex items-center flex-col lg:flex-row w-full gap-3 mb-3">
                                        <input type='text' className="w-full border outline-none  p-3" onChange={(e) => setStreet(e.target.value)} placeholder="Enter Street Address Here..." />
                                        <input type='text' onChange={(e) => setLandmark(e.target.value)} className="w-full border outline-none  p-3" placeholder="Enter Nearest Landmark Here..." />
                                    </div>
                                    <div className="flex items-center flex-col lg:flex-row w-full gap-3 mb-3">
                                        <CountryDropdown
                                            defaultOptionLabel="Select a country, man."
                                            value={country}
                                            className="w-full border outline-none  p-3"
                                            onChange={(e) => setCountry(e)} />
                                        <RegionDropdown
                                            blankOptionLabel="No country selected, man."
                                            defaultOptionLabel="Now select a region, pal."
                                            country={country}
                                            value={region}
                                            className="w-full border outline-none  p-3"
                                            onChange={(e) => setRegion(e)} />
                                    </div>
                                    <div className="flex items-center flex-col lg:flex-row w-full gap-3 mb-3">
                                        <input type='text' className="w-full border outline-none  p-3" onChange={(e) => setCity(e.target.value)} placeholder="Enter City Here..." />
                                        <input type='number' className="w-full border outline-none  p-3" onChange={(e) => setPincode(e.target.value)} placeholder="Enter Pincode Here..." maxLength={6} />
                                    </div>
                                    <button type="submit" className="font-bold cursor-pointer bg-black text-white py-4 px-6 my-4 flex items-center uppercase">Review & Pay &nbsp; <HiArrowNarrowRight /></button>
                                </form>

                        }

                        <hr className='mt-4' />

                        <h1 className="font-bold text-2xl uppercase my-4">ARRIVING</h1>
                        <div className="border p-4 mb-8">
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold text-lg uppercase mb-2">Standard Delivery</h1>
                                <h1 className="font-bold text-lg uppercase mb-2">Free</h1>
                            </div>
                            <p className="cursor-pointer flex items-center"><AiFillCar /> &nbsp;within 3-9 business days</p>
                        </div>
                        <hr />
                    </div>

                    <div className="p-4 w-full lg:w-4/12">

                        {
                            !isAuth && <AuthCard />
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

                    </div>

                </div>

            </div >
        </div >
    )
}

export default (Delivery)
