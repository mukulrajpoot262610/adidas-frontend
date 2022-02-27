import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addToCart } from '../store/actions/cartAction'
// import { removeFromCart } from '../store/actions/cartAction'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { deleteProductData } from '../../redux/cartSlice'
import { GrClose } from 'react-icons/gr'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

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
        <div className="border-2 border-black h-60 relative">
            <div className="flex h-full">
                <div className="w-2/6 overflow-hidden">
                    <img src={product.image} alt="" className='object-cover object-center w-full h-full' />
                </div>

                <div className="w-4/6 p-4 px-8 pr-16">
                    <div className="flex justify-between items-center">
                        <h1 className="font-medium text-base uppercase">{product.category}</h1>
                        <div className="flex items-center">
                            {
                                product.salePrice === product.price ? "" : <h1 className="font-light line-through text-sm">₹{product.price * qty}</h1>
                            }
                            <h1 className="my-1 ml-3 font-medium text-base text-red-700">₹{product.salePrice * qty}</h1>
                        </div>
                    </div>
                    <h1 className="font-semibold my-2 text-xl uppercase">{product.name}</h1>
                    <h1 className="font-medium text-sm uppercase">Size: {size}</h1>
                    <select value={qty} size="large" className="bg-transparent w-16 border-2 p-1 px-2 border-black outline-none cursor-pointer active:text-white my-2" onChange={(e) => { handleChange }}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>
                </div>

                <div className="p-4 absolute right-2 top-2 flex lg:flex-col justify-between lg:justify-start items-center h-full">
                    <GrClose className="cursor-pointer lg:mb-4" onClick={() => handleRemove(id, product.name)} />
                    {
                        wishList ? <FaHeart className="cursor-pointer" onClick={() => setWishList(!wishList)} /> : <FaRegHeart className="cursor-pointer" onClick={() => setWishList(!wishList)} />
                    }

                </div>
            </div>
        </div>
    )
}

export default CartCover
