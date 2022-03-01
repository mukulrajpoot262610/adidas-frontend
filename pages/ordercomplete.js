import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { AiFillCar } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import OrderCover from '../components/Card/OrderCover'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'

const OrderComplete = () => {

    const { products, total } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
    const { order } = useSelector(state => state.order)

    const [originalPrice, setOriginalPrice] = useState()
    const [discount, setDiscount] = useState()

    useEffect(() => {
        products.length && setOriginalPrice(products.map((e) => {
            return ({ price: e.product.price, qty: e.qty })
        }).map(e => +e.price * +e.qty).reduce((a, b) => a + b))

        products.length && setDiscount(products.map((e) => {
            return ({ price: e.product.salePrice, qty: e.qty })
        }).map(e => +e.price * +e.qty).reduce((a, b) => a + b))

    }, [products])

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Order - adidas Online Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="lg:w-9/12 w-full mt-10">
                <div className="flex flex-col xl:flex-row gap-16">

                    <div className="p-4 w-full lg:w-8/12">
                        {
                            Object.keys(order).length ?
                                <>
                                    <h1 className="font-bold text-4xl uppercase tracking-tighter">YOUR ORDER WAS PLACED SUCCESSFULLY</h1>
                                    <p className="my-4">Order Number: {order._id}</p>
                                    <p className="my-4">Hi, thanks for shopping with adidas! We will send a confirmation email to <span className="font-bold">{user.email}</span> shortly</p>
                                    <hr />
                                    <div className="border p-4 mb-4">
                                        <div className="flex justify-between items-center">
                                            <h1 className="font-bold text-xl uppercase mb-2">Standard Delivery</h1>
                                            <h1 className="font-bold text-xl uppercase mb-2">Free</h1>
                                        </div>
                                        <p className="cursor-pointer flex items-center"><AiFillCar /> &nbsp;within 3-9 business days</p>
                                    </div>
                                    <p className="my-4">Track and trace details will be sent to your email upon shipment.</p>
                                    <hr />
                                    <h1 className="mt-4 mb-2 text-xl font-bold">DELIVERY ADDRESS</h1>
                                    <h1><span className='font-bold uppercase'>Landmark: </span>{order.shippingAddress.landmark}</h1>
                                    <h1><span className='font-bold uppercase'>Street: </span>{order.shippingAddress.street}</h1>
                                    <h1><span className='font-bold uppercase'>City: </span>{order.shippingAddress.city}</h1>
                                    <h1><span className='font-bold uppercase'>State: </span>{order.shippingAddress.state}</h1>
                                    <h1><span className='font-bold uppercase'>Country: </span>{order.shippingAddress.country}</h1>
                                    <h1><span className='font-bold uppercase'>Pincode: </span>{order.shippingAddress.pincode}</h1>

                                    <h1 className="mt-4 mb-2 text-xl font-bold">BILLING ADDRESS</h1>
                                    <h1><span className='font-bold uppercase'>Landmark: </span>{order.shippingAddress.landmark}</h1>
                                    <h1><span className='font-bold uppercase'>Street: </span>{order.shippingAddress.street}</h1>
                                    <h1><span className='font-bold uppercase'>City: </span>{order.shippingAddress.city}</h1>
                                    <h1><span className='font-bold uppercase'>State: </span>{order.shippingAddress.state}</h1>
                                    <h1><span className='font-bold uppercase'>Country: </span>{order.shippingAddress.country}</h1>
                                    <h1><span className='font-bold uppercase'>Pincode: </span>{order.shippingAddress.pincode}</h1>
                                    <h1 className="mt-4 text-base font-bold">PAYMENT OPTION</h1>
                                    <p className="mt-1 mb-8">{order.paymentMethod === "COD" ? "Cash On Delivery" : ""}</p>

                                    <hr />
                                </> : "Nothing to show here..."
                        }
                        <Link href="/" passHref>
                            <button className="cursor-pointer bg-black text-white py-4 px-6 my-4 flex items-center uppercase font-bold">Shop more &nbsp; <HiArrowNarrowRight /></button>
                        </Link>
                    </div>

                    <div className="p-4 w-full lg:w-4/12">

                        <div className="border-2 border-black p-4">
                            <h1 className="font-bold text-xl uppercase mb-4">Order summary</h1>
                            <div className="w-full flex justify-between items-center my-2">
                                <h1>Original Price: </h1>
                                <h1>₹{originalPrice}</h1>
                            </div>
                            <div className="w-full flex justify-between items-center my-2">
                                <h1>Discount (On Sale): </h1>
                                <h1>-₹{originalPrice - discount}</h1>
                            </div>
                            <div className="w-full flex justify-between items-center my-2">
                                <h1>Net Price: </h1>
                                <h1>₹{discount}</h1>
                            </div>
                            <div className="w-full flex justify-between items-center my-2">
                                <h1>Delivery: </h1>
                                <h1>FREE</h1>
                            </div>
                            <div className="w-full flex justify-between items-center my-2">
                                <h1 className="font-bold text-xl">TOTAL: </h1>
                                <h1 className="font-bold text-xl">₹{total}</h1>
                            </div>
                        </div>

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

export default OrderComplete
