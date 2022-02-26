import Link from 'next/link'
import React from 'react'

const GenderCard = ({ image, name, link }) => {
    return (
        <Link href={`/products/explore?gender=${link}`} passHref>
            <div className="w-full cursor-pointer hover:border-black border border-white">
                <img src={image} alt="" className='h-60 w-full object-cover object-top' />
                <div className="mx-2 p-4">
                    <h1 className="uppercase font-normal text-sm">{name}</h1>
                </div>
            </div>
        </Link>
    )
}

export default GenderCard
