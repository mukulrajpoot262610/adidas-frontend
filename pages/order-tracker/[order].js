import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiFillCar } from 'react-icons/ai'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import commaNumber from 'comma-number'
import moment from 'moment'
import { getOrderStatus } from '../../services/api'
import Steps from '../../components/Steps'

const OrderTracker = () => {

    const router = useRouter()

    const { order } = router.query
    const [orderState, setOrderstate] = useState()
    const [status, setStatus] = useState()
    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getOrderStatus(order)
                setStatus(data)
            } catch (err) {
                console.log(err)
            }
        }

        order && fetchData()
    })

    console.log(status)

    useEffect(() => {
        const data = user.orders.find(e => e._id === order)
        setOrderstate(data)
    }, [order, user])

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Account - adidas Online Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container w-full p-4 px-4 lg:px-10">
                <hr />
            </div>

            <div className="lg:w-9/12 w-full mt-10 p-6">

                {
                    orderState ? <>
                        {
                            status && <>
                                <h1 className="font-bold text-4xl uppercase tracking-tighter">YOUR ORDER IS {status?.status}</h1>
                                <div className='p-6 bg-gray-100 mt-3'>
                                    <Steps status={status} />
                                </div>
                            </>
                        }
                        <div className='flex gap-2'>
                            {
                                status && status.status === 'Delivered' ? <button className="cursor-pointer hover:bg-black hover:text-white border-2 border-black py-2 px-6 my-4 flex items-center uppercase font-bold">Return/Replace Order</button> : <button className="cursor-pointer hover:bg-black hover:text-white border-2 border-black py-2 px-6 my-4 flex items-center uppercase font-bold">Cancel Order</button>
                            }


                        </div>

                        <h1 className="font-bold text-xl uppercase tracking-tighter mt-10">DETAILS</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-3'>
                            <div>
                                <h1 className="font-bold text-lg uppercase tracking-tighter mt-5">Order</h1>
                                <p>{orderState._id}</p>
                                <p>{moment(orderState.createdAt).fromNow()}</p>
                                <p className='hover:underline cursor-pointer'>Download Invoice</p>
                            </div>
                            <div>
                                <h1 className="font-bold text-lg uppercase tracking-tighter mt-5">Payment</h1>
                                <div className="flex justify-start gap-2 items-center py-4">
                                    <img src="https://www.adidas.co.in/static/checkout/react/b5f86aa/assets/img/icon-adidas-cash-on-delivery.svg" alt="" />
                                    <p className="text-base">{orderState.paymentMethod}</p>
                                </div>
                            </div>
                            <div>
                                <h1 className="font-bold text-lg uppercase tracking-tighter mt-5">Carrier</h1>
                                <p className="cursor-pointer flex items-center gap-2 py-4"><AiFillCar /> Standard Delivery</p>
                            </div>
                        </div>

                        <hr className='my-10 border-black' />
                        <h1 className="font-bold text-xl uppercase tracking-tighter mt-10">OrderItems</h1>
                        <div className='mt-2 h-20 flex flex-wrap'>
                            <div className='flex h-20 gap-3'>
                                {
                                    orderState.orderItems.map((e, i) => <img key={i} src={e.product.thumbnail} alt='' className='h-full' />)
                                }
                            </div>
                        </div>


                        <hr className='my-10 border-black' />

                        <h1 className="font-bold text-xl uppercase tracking-tighter mt-10">Address</h1>
                        <div>
                            <h1><span className='font-bold uppercase'>Landmark: </span>{orderState.shippingAddress.landmark}</h1>
                            <h1><span className='font-bold uppercase'>Street: </span>{orderState.shippingAddress.street}</h1>
                            <h1><span className='font-bold uppercase'>City: </span>{orderState.shippingAddress.city}</h1>
                            <h1><span className='font-bold uppercase'>State: </span>{orderState.shippingAddress.state}</h1>
                            <h1><span className='font-bold uppercase'>Country: </span>{orderState.shippingAddress.country}</h1>
                            <h1><span className='font-bold uppercase'>Pincode: </span>{orderState.shippingAddress.pincode}</h1>
                        </div>

                        <hr className='my-10 border-black' />

                        <h1 className="font-bold text-xl uppercase tracking-tighter mt-10">Order Total</h1>
                        <div className='w-full lg:w-1/2'>
                            <div className='flex justify-between items-center my-3'>
                                <h1 className='text-xl'>Subtotal <span className='text-sm'>({orderState.orderItems.length} Items)</span></h1>
                                <h1 className='text-xl'>₹{commaNumber(orderState.totalPrice)}</h1>
                            </div>

                            <div className='flex justify-between items-center my-3'>
                                <h1 className='text-xl'>Taxes <span className='text-sm'>	(does not apply)</span></h1>
                                <h1 className='text-xl'>₹0</h1>
                            </div>

                            <div className='flex justify-between items-center my-3'>
                                <h1 className='text-xl'>Shipping <span className='text-sm'>(standard)</span></h1>
                                <h1 className='text-xl'>₹0</h1>
                            </div>

                            <div className='flex justify-between items-center my-3'>
                                <h1 className='text-xl font-bold'>Total</h1>
                                <h1 className='text-xl font-bold'>₹{commaNumber(orderState.totalPrice)}</h1>
                            </div>
                        </div>

                    </> : <>
                        <h1 className="font-black text-4xl uppercase">No Orders Found</h1>
                        <p className="mb-4">Once you order something - it will appear here. Ready to get started?</p>
                        <Link href="/" passHref>
                            <button className="cursor-pointer bg-black text-white py-3 text-xs font-bold uppercase px-6 mb-4 flex items-center">Shop Now &nbsp; <HiArrowNarrowRight className='text-lg' /></button>
                        </Link>
                    </>
                }

            </div>

        </div>
    )
}

export default OrderTracker