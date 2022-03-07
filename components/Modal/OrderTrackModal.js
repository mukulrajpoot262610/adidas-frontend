import { useRouter } from 'next/router'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { HiArrowNarrowRight } from 'react-icons/hi'

const OrderTrackModal = ({ setShowModal }) => {

    const router = useRouter()
    const [orderNumber, setOrderNumber] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!orderNumber) {
            return toast.error("Please enter a valid order number")
        }

        router.push(`/order-tracker/${orderNumber.toLowerCase()}`)
    }

    return (
        <div className='fixed z-50 backdrop-blur-sm bg-black/[.6] top-0 left-0 h-screen w-full flex justify-center items-center'>
            <div className="flex flex-col mt-6 border p-6 bg-white">
                <h1 className="uppercase font-bold text-3xl mb-3 tracking-tighter">Your Order</h1>
                <p className="max-w-prose">Enter your order number below to access your order details. From there you can check its current status, initiate a return.</p>
                <form onSubmit={handleSubmit} className="w-full">
                    <h1 className="uppercase font-bold text-lg mb-3 mt-5">Enter your Order Number</h1>
                    <input type='text' className="w-full border outline-none p-3 px-5" onChange={(e) => setOrderNumber(e.target.value)} placeholder="Order Number" />

                    <div className='flex gap-4 justify-end'>
                        <button onClick={() => setShowModal(false)} className="font-bold border cursor-pointer border-black py-3 px-6 my-4 flex items-center uppercase">Cancel &nbsp; <HiArrowNarrowRight /></button>
                        <button type="submit" className="font-bold cursor-pointer bg-black text-white py-3 px-6 my-4 flex items-center uppercase">Save &nbsp; <HiArrowNarrowRight /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderTrackModal