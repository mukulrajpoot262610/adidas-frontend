import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { AiOutlinePlus, AiFillDelete } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'
import { AiFillCar } from 'react-icons/ai'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import BillingCard from '../components/Card/BillingCard';
import AuthCard from '../components/Card/AuthCard';
import OrderCover from '../components/Card/OrderCover';
import { AddAddress, DeleteAddress, UpdateDetails } from '../services/api'
import { setAuth } from '../redux/authSlice';
import AddressModal from '../components/Modal/AddressModal'
import { setShippingAddress } from '../redux/orderSlice'

const Delivery = ({ }) => {

    const dispatch = useDispatch()
    const router = useRouter()
    const cart = useSelector(state => state.cart)
    const { isAuth, user } = useSelector(state => state.auth)
    const { products, quantity, total } = cart;
    const [name, setName] = useState()
    const [genderSelect, setGenderSelect] = useState()

    const [showModal, setShowModal] = useState(false)
    const [selected, setSelected] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user.address.length) {
            return alert('Please add a address')
        }

        if (!user.name) {
            return alert('Please add your name')
        }

        dispatch(setShippingAddress(selected))
        router.push('/payment')
    }

    const handleAddName = async (e) => {
        e.preventDefault()

        try {
            const { data } = await UpdateDetails({ name, gender: genderSelect })
            dispatch(setAuth(data))
        } catch (err) {
            console.log(err)
        }
    }

    const handleDelete = async (e) => {
        try {
            const { data } = await DeleteAddress(e)
            dispatch(setAuth(data))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Delivery - adidas Online Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {
                showModal && <AddressModal setShowModal={setShowModal} />
            }

            <div className="w-11/12 lg:w-9/12 mt-10">
                <div className="flex flex-col xl:flex-row gap-16">
                    <div className="p-4 w-full lg:w-8/12">
                        <h1 className="font-bold text-4xl mb-4 uppercase">SHIPPING ADDRESS</h1>
                        {
                            user?.name ? "" : <div className="flex justify-between items-center mt-6 border p-6 mb-4">
                                <form onSubmit={handleAddName} className="w-full">
                                    <h1 className="uppercase font-bold text-xl mb-3 mt-5">Enter your name</h1>
                                    <input type='text' className="w-full border outline-none p-3 px-5" onChange={(e) => setName(e.target.value)} placeholder="Name" />

                                    <h1 className="uppercase font-bold text-xl mb-3 mt-5">Gender</h1>
                                    <div className="flex items-center mb-3">
                                        <input type='radio' value="men" name="gender" onChange={(e) => setGenderSelect(e.target.value)} />
                                        <label className="text-xl mr-4">Men</label>
                                        <input type='radio' value="women" name="gender" onChange={(e) => setGenderSelect(e.target.value)} />
                                        <label className="text-xl mr-4">Women</label>
                                        <input type='radio' value="other" name="gender" onChange={(e) => setGenderSelect(e.target.value)} />
                                        <label className="text-xl ">Other</label>
                                    </div>

                                    <button type="submit" className=" cursor-pointer bg-black text-white py-3 px-6 mb-4 flex items-center uppercase font-bold mt-5">
                                        Save &nbsp; <HiArrowNarrowRight /></button>
                                </form>
                            </div>
                        }
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="relative border border-gray-300 h-56 p-6 flex justify-between flex-col items-start hover:border-black cursor-pointer" onClick={() => setShowModal(!showModal)}>
                                <h1>New Address</h1>
                                <AiOutlinePlus className="text-2xl" />
                            </div>

                            {
                                user?.address?.map((e, i) => <div key={i} className={`relative border h-56 p-6 flex justify-between flex-col items-start hover:border-black cursor-pointer ${selected === i ? "border-black border-2" : "border-gray-300"}`}
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
                        <button onClick={handleSubmit} className="font-bold cursor-pointer bg-black text-white py-4 px-6 my-4 flex items-center uppercase">Review & Pay &nbsp; <HiArrowNarrowRight /></button>

                        <hr className='mt-4' />

                        <h1 className="font-bold text-2xl uppercase my-4">ARRIVING</h1>
                        <div className="border p-4 mb-8">
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold text-lg uppercase mb-2">Standard Delivery</h1>
                                <h1 className="font-bold text-lg uppercase mb-2">Free</h1>
                            </div>
                            <p className="cursor-pointer flex items-center"><AiFillCar /> &nbsp;within 3-9 business days</p>
                        </div>
                        <hr />
                    </div>

                    <div className="p-4 w-full lg:w-4/12">

                        {
                            !isAuth && <AuthCard />
                        }
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

            </div >
        </div >
    )
}

export default (Delivery)
