import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

const Layout = ({ children }) => {

    return (
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
