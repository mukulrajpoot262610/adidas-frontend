import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AiOutlinePlus, AiFillDelete } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import AddressModal from '../../components/Modal/AddressModal'
import { setAuth } from '../../redux/authSlice'
import { DeleteAddress } from '../../services/api'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast';

const Account = () => {

    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const { user } = useSelector(state => state.auth)
    const [selected, setSelected] = useState(0)


    const handleDelete = async (e) => {
        try {
            const { data } = await DeleteAddress(e)
            dispatch(setAuth(data))
            toast.success("Deleted Successfully")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Account - adidas Online Store</title>
                <link passHref rel="icon" href="/favicon.ico" />
            </Head>

            {
                showModal && <AddressModal setShowModal={setShowModal} />
            }


            <div className="container w-full p-4 px-4 lg:px-10">
                <hr />
            </div>

            <div className="lg:w-9/12 w-full mt-10">
                <div className="flex flex-col xl:flex-row gap-16">
                    <div xl={15} className="p-6 w-full lg:w-8/12">
                        <h1 className="font-bold text-4xl uppercase">ADDRESS BOOK</h1>
                        <p className="my-3 mb-8">You have <span className="font-bold"> address slots</span> remaining.</p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="relative border border-gray-300 h-56 p-6 flex justify-between flex-col items-start hover:border-black cursor-pointer" onClick={() => setShowModal(!showModal)}>
                                <h1>New Address</h1>
                                <AiOutlinePlus className="text-2xl" />
                            </div>

                            {
                                user.address?.map((e, i) => <div key={i} className={`relative border h-56 p-6 flex justify-between flex-col items-start hover:border-black cursor-pointer ${selected === i ? "border-black border-2" : "border-gray-300"}`}
                                    onClick={() => setSelected(i)}
                                >
                                    <div>
                                        <h1><span className='font-bold uppercase'>Landmark: </span>{e.landmark}</h1>
                                        <h1><span className='font-bold uppercase'>Street: </span>{e.street}</h1>
                                        <h1><span className='font-bold uppercase'>City: </span>{e.city}</h1>
                                        <h1><span className='font-bold uppercase'>State: </span>{e.state}</h1>
                                        <h1><span className='font-bold uppercase'>Country: </span>{e.country}</h1>
                                        <h1><span className='font-bold uppercase'>Pincode: </span>{e.pincode}</h1>
                                    </div>
                                    <div className='flex justify-between items-end w-full'>
                                        <h1 className='text-xs underline'>Default</h1>
                                        <div className='flex'>
                                            {/* <FaEdit className="text-2xl mx-2"  /> */}
                                            <AiFillDelete className="text-2xl" onClick={() => handleDelete(e._id)} />
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>

                    <div className="p-6 w-full lg:w-4/12">
                        <Link passHref href="/my-account">
                            <p className="mt-3 underline cursor-pointer">My Account</p>
                        </Link>
                        <Link passHref href="/my-account/profile">
                            <p className="underline mt-3 cursor-pointer">Personal Information</p>
                        </Link>
                        <Link passHref href="/my-account/address-book">
                            <p className="font-bold mt-3 cursor-pointer">Address Book</p>
                        </Link>
                        <Link passHref href="/my-account/order-history">
                            <p className="underline mt-3 cursor-pointer">Order History</p>
                        </Link>
                        <hr className="my-6 border-black" />
                        <h1 className="font-bold text-xl mt-4 uppercase">Need Help?</h1>
                        <p className="underline mt-3 cursor-pointer">Products</p>
                        <p className="underline mt-3 cursor-pointer">Delivery</p>
                        <p className="underline mt-3 cursor-pointer">Return & Refund</p>
                        <p className="underline mt-3 cursor-pointer">Ordering & Payment</p>
                        <p className="underline mt-3 cursor-pointer">Promotions & Vouchers</p>
                        <p className="underline mt-3 cursor-pointer">Company Information</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default (Account)

