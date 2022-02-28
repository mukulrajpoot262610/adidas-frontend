import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import CartCover from '../components/Card/CartCover'
import OrderCover from '../components/Card/OrderCover'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import { addOrderData } from '../redux/orderReducer'
import BillingCard from '../components/Card/BillingCard'

const Payment = () => {

    const router = useRouter();
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
    const { products, quantity, total } = cart;

    const [paymentMethod, setPaymentMethod] = useState(1);

    const handlePlaceOrder = async () => {

        const payload = {
            user: {
                id: user._id,
                firstName: user.firstName,
                email: user.email,
            },
            orderItems: products,
            price: total,
            totalPrice: total,
            delivery: 0,
            address: JSON.parse(sessionStorage.getItem('address')),
            paymentMethod: paymentMethod === 1 ? "Card" : "COD",
        }

        try {
            const res = await placeOrder(user._id, payload)
            dispatch(addOrderData(res.data.order))
            router.push('/ordercomplete')
        } catch (err) {
            console.log(err.response)
        }
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Payment - adidas Online Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="lg:w-9/12 w-full mt-10">
                <div className="flex flex-col xl:flex-row gap-16">

                    <div className="p-4 w-full lg:w-8/12">
                        <h1 className="font-bold text-4xl uppercase">PAYMENT METHOD</h1>
                        <p className="mb-8">All transactions are safe and secure</p>
                        <div className="text-base font-bold uppercase">
                            {/*
                            <div header="Credit/Debit Card" key="1">
                                <p className="mb-4 font-normal capitalize text-sm">You may be directed to your bank 3D secure process to authenticate your information.</p>
                                <form>
                                    <input type='text' className="w-full border outline-none p-2" placeholder="Enter Card Number Here..." />
                                    <input type='text' className="w-full border outline-none p-2" placeholder="Enter Name On Card Here..." />
                                    <div className="flex items-center w-full">

                                        <input type='text' className="w-full border outline-none p-2" placeholder="Enter Expiry Date Here..." />

                                        <input type='text' className="w-full border outline-none p-2" placeholder="Enter CVV Here..." />
                                    </div>
                                </form>
                            </div>
                             */}
                            <div header="Cash on Delivery" key="2">
                                <div className="flex justify-between items-center border p-4">
                                    <h1 className="font-bold text-base uppercase">Cash On Delivery</h1>
                                    <img src="https://www.adidas.co.in/static/checkout/react/b5f86aa/assets/img/icon-adidas-cash-on-delivery.svg" alt="" />
                                </div>
                                <p className="my-4 font-normal text-sm">No online payment needed – pay in cash using the exact change once your items are delivered!

                                    Your bank account details will only be required if you wish to return anything for a refund.</p>
                            </div>
                        </div>
                        <h1 className='flex items-center mt-2'>
                            <span className='font-bold'>Selected Payment Method: &nbsp;</span>
                            {paymentMethod === 1 ? "Card" : "Cash On Delivery"}
                        </h1>

                        {
                            paymentMethod === 1 ? <button type="submit" form='card' className="cursor-pointer bg-black text-white py-4 px-6 my-4 flex items-center uppercase font-bold">Place Order &nbsp; <HiArrowNarrowRight /></button> : (
                                <button className="cursor-pointer bg-black text-white py-4 px-6 my-4 flex items-center uppercase font-bold" onClick={handlePlaceOrder}>Place Order &nbsp; <HiArrowNarrowRight /></button>
                            )
                        }


                        <hr />
                    </div>

                    <div className="p-4 w-full lg:w-4/12">

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

            </div>
        </div>
    )
}

export default Payment
