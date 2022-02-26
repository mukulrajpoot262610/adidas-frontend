import React from 'react'
import Head from 'next/head'

const Search = () => {
    return (
        <div className="min-h-screen w-full">
            <Head>
                <title>addidas Official Website India</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <main className="flex flex-col justify-center items-center mt-10">
                <div className="container">
                    <h1 className="uppercase font-bold text-4xl">All Products</h1>
                    <hr />
                    <div className="flex">
                        <h1>Division</h1>
                    </div>
                    <hr />
                </div>
            </main>
        </div>
    )
}

export default Search
