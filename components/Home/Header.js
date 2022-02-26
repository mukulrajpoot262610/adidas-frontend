import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useRouter } from 'next/router';

const Header = () => {

    const router = useRouter();

    return (
        <div className="w-full h-900 flex justify-center items-end lg:items-center" style={{ background: 'url("/banner.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-11/12 lg:w-9/12 p-6">
                <h1 className="text-4xl lg:text-6xl text-white font-black uppercase">Light Up the Pitch</h1>
                <p className="text-white text-sm font-medium">Best of Adidas, IT&apos;S YOUR PLAY, START TODAY</p>
                <button className="cursor-pointer bg-white text-black py-3 px-6 mb-4 flex items-center uppercase font-bold mt-4" onClick={() => router.push('/products/explore')}>Shop now &nbsp; <HiArrowNarrowRight /></button>
            </div>
        </div>
    )
}

export default Header
