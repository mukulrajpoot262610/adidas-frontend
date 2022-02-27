import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { FaUser, FaUserAlt, FaRegUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const quantity = useSelector(state => state.cart?.quantity)
    const {isAuth} = useSelector(state => state.auth)

    return (
        <nav className="fixed top-0 z-50 bg-white w-full flex justify-between items-center h-20 px-4 lg:px-10 border-b border-gray-200">
            <div className=" flex items-center">
                <Link href='/' passHref>
                    <Image src="/logo.svg" height={80} width={80} alt='' className='cursor-pointer' />
                </Link>
            </div>
            <div className="flex items-center">
                <div className="flex items-center gap-4">
                {
                        isAuth ? <Link href="/my-account" passHref>
                            <FaUser className='text-xl cursor-pointer' />
                        </Link> : <Link href="/account-login" passHref>
                            <FaRegUser className='text-xl cursor-pointer' />
                        </Link>
                }

                    <Link href="/cart" passHref>
                        <div className='relative cursor-pointer'>
                            <span className='-top-2 absolute bg-black text-white -right-2 p-2 text-xs rounded-full h-5 w-5 flex justify-center items-center'>{quantity}</span>
                            <RiShoppingCart2Line className='text-2xl' />
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
