import Link from 'next/link'
import React from 'react'

const CategoryCard = ({ image, name, link }) => {
    return (
        <Link href={`/products/explore?category=${link}`} passHref>
            <div className="max-w-96 w-96 cursor-pointer hover:border-black border border-white">
                <img src={image} alt="" className='h-96 w-full object-cover object-top' />
                <div className="mx-2 p-4">
                    <h1 className="uppercase font-semibold text-sm">{name}</h1>
                </div>
            </div>
        </Link>
    )
}

export default CategoryCard
