import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsCheck2, BsGoogle } from 'react-icons/bs'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { SendOtp, VerifyOtp } from '../services/api'
import { useDispatch } from 'react-redux'
import { setAuth } from '../redux/authSlice'
import Image from 'next/image'
import toast from 'react-hot-toast';

const Login = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const [email, setEmail] = useState()
    const [showOtp, setShowOtp] = useState(false)
    const [otp, setOtp] = useState()
    const [response, setResponse] = useState()

    const redirect = router.query.redirect

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!otp) {
            try {
                const { data } = await SendOtp({ email })
                setShowOtp(true)
                setResponse(data)

                toast.custom((t) => (
                    <div
                        className={`${t.visible ? 'animate-enter' : 'animate-leave'
                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 pt-0.5">
                                    <Image src="/logo.svg" height={50} width={80} alt='' className='cursor-pointer' />
                                </div>
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                        Adidas
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Your OTP for login is <span className='text-xl text-red-500 font-black'>{data.otp}</span>!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-l border-gray-200">
                            <button
                                onClick={() => toast.dismiss(t.id)}
                                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium  hover:text-indigo-500 focus:outline-none focus:ring-2"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                ))

            } catch (err) {
                console.log(err)
                toast.error(err.response.data.msg)
            }
        } else {
            try {
                const { data } = await VerifyOtp({ ...response, otp })
                dispatch(setAuth(data))
                toast.success('Login Successfull')
                redirect ? router.replace(`/${redirect}`) : router.replace('/')
            } catch (err) {
                console.log(err)
                toast.error(err.response.data.msg)
                if (err.response.data.msg === 'OTP Expired') {
                    setOtp(undefined)
                    setShowOtp(false)
                }
            }
        }
    }

    const handleGoogleLogin = () => {
        toast.error("This functionality is not built yet.")
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>adidas Online Shop | adidas IN</title>
                <link rel="icon" href="/logo.svg" />
            </Head>

            <div className="w-full lg:w-9/12 mt-10">
                <div className="flex flex-col lg:flex-row">

                    {/* LEFT */}
                    <div className="w-full lg:w-6/12 p-6">
                        <h1 className="font-black text-4xl uppercase">LOG IN</h1>
                        <form onSubmit={handleSubmit}>
                            <input type='email' className="w-full border outline-none mt-4 p-3 px-5" placeholder="Enter Email Here..." onChange={(e) => {
                                setOtp(undefined)
                                setShowOtp(false)
                                setEmail(e.target.value)
                            }}
                                required />

                            <label className='text-xs text-gray-400'>You will receive a OTP here 😅.</label>


                            {
                                showOtp && <input type='number' onChange={(e) => setOtp(e.target.value)} className="w-full border outline-none p-3 px-5 mt-3" placeholder="Type OTP Here" required />
                            }

                            <button type="submit" className="border-0 cursor-pointer bg-black text-white py-3 px-6 mb-4 flex items-center uppercase font-bold mt-4">Log In &nbsp;</button>
                        </form>

                        <p>By clicking LOG IN, I agree to the <span className=" inline-block text-black underline cursor-pointer">Terms & Conditions</span>, the <span className=" inline-block text-black underline cursor-pointer">Creators Club Terms & Conditions</span> and the adidas <span className=" inline-block text-black underline cursor-pointer">Privacy Policy</span>.</p>

                        <h1 className="font-bold text-xl uppercase my-4">OR</h1>

                        <div className="flex justify-between cursor-pointer my-4 border items-center p-3 px-5 border-black" onClick={handleGoogleLogin}>
                            <h1 className="font-bold uppercase text-xl">Google</h1>
                            <BsGoogle className="text-2xl" />
                        </div>

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
                        <Link href="/account-login" passHref={true}>
                            <button className="cursor-pointer bg-black text-white py-3 px-6 mb-4 flex items-center uppercase font-bold mt-4">Join the club &nbsp; <HiArrowNarrowRight /></button>
                        </Link>
                        <Image src="https://www.adidas.co.in/glass/react/137ceff/assets/img/CC2.0_my_account_register.jpg" height={300} objectFit="cover" width={700} alt="Club" />
                    </div>

                </div>
            </div>

            {/* <JoinBanner /> */}

        </div>
    )
}

export default (Login)
