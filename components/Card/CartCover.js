import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addToCart } from '../store/actions/cartAction'
// import { removeFromCart } from '../store/actions/cartAction'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { deleteProductData } from '../../redux/cartSlice'
import { GrClose } from 'react-icons/gr'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import commaNumber from 'comma-number'

const CartCover = ({ data }) => {

    const dispatch = useDispatch()
    const { id, product, qty, size } = data
    const [wishList, setWishList] = useState(false)

    const handleChange = () => {

    }

    console.log(data)

    const handleRemove = (id) => {
        dispatch(deleteProductData(id))
    }

    return (
        <div className="border-2 border-black relative">
            <div className="flex h-full">
                <div className="w-2/6 overflow-hidden">
                    <img src={product.image} alt="" className='object-cover object-center w-full h-full' />
                </div>

                <div className="w-4/6 p-4 px-8 pr-16">
                    <div className="flex justify-between lg:items-center flex-col lg:flex-row">
                        <h1 className="font-medium text-base uppercase">{product.category}</h1>
                        <div className="flex items-center">
                            {
                                product.salePrice === product.price ? "" : <h1 className="font-light line-through text-sm">₹{commaNumber(product.price * qty)}</h1>
                            }
                            <h1 className="my-1 ml-3 font-medium text-base text-red-700">₹{commaNumber(product.salePrice * qty)}</h1>
                        </div>
                    </div>
                    <h1 className="font-semibold my-2 text-xl uppercase">{product.name}</h1>
                    <h1 className="font-medium text-sm uppercase">Size: {size}</h1>
                </div>

                <div className="absolute right-2 top-2 lg:right-6 lg:top-6">
                    <GrClose className="cursor-pointer mb-2 lg:mb-4" onClick={() => handleRemove(id, product.name)} />
                    {
                        wishList ? <FaHeart className="cursor-pointer" onClick={() => setWishList(!wishList)} /> : <FaRegHeart className="cursor-pointer" onClick={() => setWishList(!wishList)} />
                    }

                </div>
            </div>
        </div>
    )
}

export default CartCover
