import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {

    // const quantity = useSelector(state => state.cart?.quantity)
    // const state = useSelector(state => state.rootReducer.user)

    const isAuth = false

    return (
        <nav className="fixed top-0 z-50 bg-white w-full flex justify-between items-center h-20 px-4 lg:px-10 border-b border-gray-200">
            <div className=" flex items-center">
                <Link href='/' passHref>
                    <Image src="/logo.svg" height={80} width={80} alt='' className='cursor-pointer' />
                </Link>
            </div>
            <div className="flex items-center">
                <div className="flex items-center">
                    {/* <Link href="/wishlist" passHref>
                        <HeartOutlined className="text-xl mx-4 cursor-pointer" />
                    </Link> */}
                    <Link href="/cart" passHref>
                        cart
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
