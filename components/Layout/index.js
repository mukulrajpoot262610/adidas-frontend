import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'
import Loader from '../Loader'
import { useLoadingWithRefresh } from '../../hooks/useLoadingWithRefresh'

const Layout = ({ children }) => {

    const { loading } = useLoadingWithRefresh()

    return (
        loading ? <Loader /> :
        <>
            <Head>
                <title>Adidas</title>
                <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
            </Head>
            <div className="bg-secondary w-full">
                <Navbar />
                <div className="mt-16 min-h-screen overflow-hidden">
                    {children}
                </div>
                <Footer />
            </div>
        </>

    )
}

export default Layout
