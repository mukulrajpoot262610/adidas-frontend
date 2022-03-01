import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import CartCover from '../components/Card/CartCover'
import BillingCard from '../components/Card/BillingCard'
import toast from 'react-hot-toast';

const Cart = () => {

    const cart = useSelector(state => state.cart)
    const { products, quantity, total } = cart;

    const handleCoupanCode = () => {
        toast.error("This code was not recognised, please check it and try again.")
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Cart - adidas IN</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="lg:w-9/12 w-full mt-10">
                <div className="flex flex-col xl:flex-row gap-16">
                    <div className="p-4 w-full lg:w-8/12">
                        {
                            products.length === 0 ? (
                                <>
                                    <h1 className="font-black text-4xl uppercase">YOUR BAG IS EMPTY</h1>
                                    <p className="mb-4">Once you add something to your bag - it will appear here. Ready to get started?</p>
                                    <Link href="/" passHref>
                                        <button className="cursor-pointer bg-black text-white py-3 text-xs font-bold uppercase px-6 mb-4 flex items-center">Shop Now &nbsp; <HiArrowNarrowRight className='text-lg' /></button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <h1 className="font-bold text-4xl uppercase">YOUR BAG</h1>
                                    <p className="my-4 text-base">TOTAL <span className=''>[{quantity} item]</span> &nbsp; ₹{total}</p>
                                    <div className="flex flex-col gap-4">
                                        {
                                            products.map((e, index) => <CartCover key={index} data={e} />)
                                        }
                                    </div>
                                </>
                            )
                        }
                    </div>

                    <div className="p-4 w-full lg:w-4/12">
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
                                    <Link href="/delivery" passHref>
                                        <button className="font-bold cursor-pointer bg-black text-white w-full py-4 px-6 my-4 flex items-center uppercase">CheckOut &nbsp; <HiArrowNarrowRight /></button>
                                    </Link>
                                    <BillingCard />
                                    <hr />
                                    <input type='text' className="w-full border outline-none my-4 p-3" placeholder="Enter Code Here..." />
                                    <button className="font-bold cursor-pointer bg-black text-white w-full py-4 px-6 mb-4 flex items-center uppercase" onClick={handleCoupanCode}>Apply &nbsp; <HiArrowNarrowRight /></button>
                                    <hr />
                                    <h1 className="font-bold text-xl mt-4 uppercase">NEED HELP?</h1>
                                    <p className="underline mt-3 cursor-pointer">Delivery</p>
                                    <p className="underline mt-3 cursor-pointer">Return & Refund</p>
                                    <p className="underline mt-3 cursor-pointer">Ordering & Payment</p>
                                    <p className="underline mt-3 cursor-pointer">Promotions & Vouchers</p>
                                </>
                            )
                        }

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Cart
