import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { AiFillCar } from 'react-icons/ai'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import BillingCard from '../components/Card/BillingCard';
import AuthCard from '../components/Card/AuthCard';
import OrderCover from '../components/Card/OrderCover';

const Delivery = ({ }) => {

    const dispatch = useDispatch()
    const router = useRouter()
    const cart = useSelector(state => state.cart)
    // const { isAuth, currentUser } = useSelector(state => state.user)
    const { products, quantity, total } = cart;

    const [country, setCountry] = useState()
    const [region, setRegion] = useState()

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

                        <form>
                            <div className="flex items-center flex-col lg:flex-row w-full gap-3 mb-3">
                                <input type='text' className="w-full border outline-none  p-3" placeholder="Enter FirstName Here..." />
                                <input type='text' className="w-full border outline-none  p-3" placeholder="Enter LastName Here..." />
                            </div>
                            <div className="flex items-center flex-col lg:flex-row w-full gap-3 mb-3">
                                <input type='text' className="w-full border outline-none  p-3" placeholder="Enter Street Address Here..." />
                                <input type='text' className="w-full border outline-none  p-3" placeholder="Enter Nearest Landmark Here..." />
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
                                <input type='text' className="w-full border outline-none  p-3" placeholder="Enter City Here..." />
                                <input type='number' className="w-full border outline-none  p-3" placeholder="Enter Pincode Here..." maxLength={6} />
                            </div>
                            <button type="submit" className="font-bold cursor-pointer bg-black text-white py-4 px-6 my-4 flex items-center uppercase">Review & Pay &nbsp; <HiArrowNarrowRight /></button>
                        </form>
                        <hr />

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
                            <AuthCard />
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
