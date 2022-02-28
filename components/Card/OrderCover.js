import commaNumber from 'comma-number'
import Image from 'next/image'
import React from 'react'

const OrderCover = ({ data }) => {

    const { product, qty, size, id } = data

    return (
        <div className="border border-black mb-2">
            <div className='flex'>
                <div className='relative h-32 w-2/6'>
                    <img src={product.image} alt='' className='object-cover h-32' />
                </div>

                <div className="p-4 w-4/6">
                    <h1 className='text-xs uppercase'>{product.category}</h1>
                    <h1 className="font-bold text-sm">{product.name}</h1>
                    <div className="flex items-center text-xs">
                        <h1>Size: {size}</h1>
                        <h1 className="mx-2">Quantity: {qty}</h1>
                    </div>
                    <div className="flex items-center">
                        {
                            product.salePrice === product.price ? "" : <h1 className="my-1 mr-2 font-light line-through">₹{commaNumber(product.price)}</h1>
                        }
                        <h1 className="my-1 font-bold">₹{commaNumber(product.salePrice)}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCover
