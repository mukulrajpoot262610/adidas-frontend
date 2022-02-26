import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import JoinBanner from '../components/Home/JoinBanner'
import { BsCheck2, BsGoogle } from 'react-icons/bs'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Register = () => {

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>adidas Online Shop | adidas IN</title>
                <link rel="icon" href="/logo.svg" />
            </Head>

            <div className="w-11/12 lg:w-9/12 mt-10">
                <div className="flex flex-col xl:flex-row">


                    {/* LEFT */}
                    <div className="w-full lg:w-6/12 p-6">
                        <h1 className="font-black text-4xl uppercase">REGISTER</h1>
                        <p className="my-4">Sign up with</p>
                        <div className="flex justify-between cursor-pointer my-4 border items-center p-3 px-5">
                            <h1 className="font-bold uppercase text-xl">Google</h1>
                            <BsGoogle className="text-2xl" />
                        </div>

                        <h1 className="font-bold text-xl uppercase my-4">OR</h1>

                        <form>
                            <input type='text' className="w-full border outline-none p-3 px-5 mb-3" placeholder="Name" />

                            <h1 className="uppercase font-bold text-xl mb-3 mt-5">Gender</h1>
                            <div className="flex items-center mb-3">
                                <input type='radio' value="men" name="gender" onChange={(e) => setGenderSelect(e.target.value)} />
                                <label className="text-xl mr-4">Men</label>
                                <input type='radio' value="women" name="gender" onChange={(e) => setGenderSelect(e.target.value)} />
                                <label className="text-xl mr-4">Women</label>
                                <input type='radio' value="other" name="gender" onChange={(e) => setGenderSelect(e.target.value)} />
                                <label className="text-xl ">Other</label>
                            </div>

                            <input type='email' className="w-full border outline-none p-3 px-5 mt-5" placeholder="Email" />

                            <input className="w-full border outline-none p-3 px-5 mt-3" placeholder="Password" />

                            <button type="submit" className=" cursor-pointer bg-black text-white py-3 px-6 mb-4 flex items-center uppercase font-bold mt-4">Register &nbsp; <HiArrowNarrowRight /></button>
                        </form>

                    </div>

                    {/* RIGHT */}
                    <div className="w-full lg:w-6/12 p-6">
                        <h1 className="font-black text-4xl uppercase">JOIN THE CLUB. GET REWARDED.</h1>
                        <p className="my-3">Join the adidas Creators Club membership program:</p>
                        <p className="mt-1 cursor-pointer flex items-center"><BsCheck2 /> &nbsp; &nbsp;Get immediate access to all Challenger level rewards</p>
                        <p className="mt-1 cursor-pointer flex items-center"><BsCheck2 /> &nbsp; &nbsp;Earn access to shop limited edition products</p>
                        <p className="mt-1 cursor-pointer flex items-center"><BsCheck2 /> &nbsp; &nbsp;Level up for exclusive access to sport, yoga and music events</p>
                        <p className="mt-1 cursor-pointer flex items-center"><BsCheck2 /> &nbsp; &nbsp;Receive our best special offers and promotions</p>
                        <p className="my-3">Join now and start earning points to access new levels and rewards. Its time to unlock the best of adidas.</p>

                        <p className="mt-8">Want to learn more about the Creators Club ?</p>
                        <p className="underline cursor-pointer text-orange-800 mb-8">Read more about free membership</p>

                        <img src="https://www.adidas.co.in/glass/react/137ceff/assets/img/CC2.0_my_account_register.jpg" />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default (Register)
