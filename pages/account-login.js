import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import JoinBanner from '../components/Home/JoinBanner'
import { BsCheck2, BsGoogle } from 'react-icons/bs'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { SendOtp, VerifyOtp } from '../services/api'
import { useDispatch } from 'react-redux'
import { setAuth } from '../redux/authSlice'

const Login = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const [email, setEmail] = useState()
    const [showOtp, setShowOtp] = useState(false)
    const [otp, setOtp] = useState()
    const [response, setResponse] = useState()

    const redirect = router.query.redirect
    console.log(redirect)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!otp) {
            try {
                const { data } = await SendOtp({ email })
                setShowOtp(true)
                setResponse(data)
            } catch (err) {
                console.log()
            }
        } else {
            try {
                const { data } = await VerifyOtp({ ...response, otp })
                dispatch(setAuth(data))
                redirect ? router.replace(`/${redirect}`) : router.replace('/')
            } catch (err) {
                console.log(err)
            }
        }
    }

    const handleGoogleLogin = () => {

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
                        <Link href="/forgetpassword" passHref={true}>
                            <p className="my-2 inline-block text-black underline cursor-pointer">Forgotten your Password?</p>
                        </Link>
                        <form onSubmit={handleSubmit}>
                            <input type='email' className="w-full border outline-none mt-4 p-3 px-5" placeholder="Enter Email Here..." onChange={(e) => setEmail(e.target.value)} required />

                            <label className='text-xs text-gray-400'>This will send you a OTP on your registered mail.</label>


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
                        <img src="https://www.adidas.co.in/glass/react/137ceff/assets/img/CC2.0_my_account_register.jpg" height={500} width={500} />
                    </div>

                </div>
            </div>

            {/* <JoinBanner /> */}

        </div>
    )
}

export default (Login)
