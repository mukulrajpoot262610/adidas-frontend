import React from 'react'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

const JoinBanner = () => {
    return (
        <div className="min-h-36 p-4 bg-yellow-300 w-full flex justify-center items-center flex-col lg:flex-row">
            <h1 className="font-black text-xl uppercase mr-4">JOIN ADIDAS AND GET 15% OFF</h1>
            <Link href="/account-register" passHref={true}>
                <button className="cursor-pointer bg-black text-white py-2 px-6 flex items-center uppercase font-bold text-sm">Sign up &nbsp; <HiArrowNarrowRight /></button>
            </Link>
        </div>
    )
}

export default JoinBanner
