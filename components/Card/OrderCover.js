import Image from 'next/image'
import React from 'react'

const OrderCover = ({ data }) => {

    const { product, qty, size, id } = data

    return (
        <div className="border border-black mb-2">
            <div>
                <div>
                    <div className='relative h-32 w-full'>
                        <img src={product.image} layout='fill' alt='' className='object-cover' />
                    </div>
                </div>

                <div className="p-2">
                    <h1 className='text-xs uppercase'>{product.category}</h1>
                    <h1 className="font-bold text-sm">{product.name}</h1>
                    <div className="flex items-center text-xs">
                        <h1>Size: {size}</h1>
                        <h1 className="mx-2">Quantity: {qty}</h1>
                    </div>
                    <div className="flex items-center">
                        {
                            product.salePrice === product.price ? "" : <h1 className="my-1 mr-2 font-light line-through">₹{product.price}</h1>
                        }
                        <h1 className="my-1 font-bold">₹{product.salePrice}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCover
