import React, { useState } from 'react'
import Link from 'next/link';

const ProductCard = ({ data }) => {

    const [checked, setChecked] = useState(false)
    const { id, name, price, salePrice, thumbnail, category } = data;

    return (
        <Link href={`/products/${id}`} passHref>
            <div className="w-full cursor-pointer hover:border-black border border-white">
                <div className="relative">
                    <img src={thumbnail} alt="" />
                    {/* <div className="absolute top-3 right-4 z-50">
                        {
                            checked ? <HeartFilled className="text-2xl" onClick={() => setChecked(!checked)} /> : <HeartOutlined className="text-2xl" onClick={() => setChecked(!checked)} />
                        }
                    </div> */}
                    <div className="bg-white flex absolute bottom-0 p-1 text-sm">
                        <h1 className="line-through">₹{price}</h1>
                        <h1 className="ml-1 text-red-500">₹{salePrice}</h1>
                    </div>
                </div>
                <div className="p-4">
                    <h1 className="uppercase font-normal text-sm">{name}</h1>
                    <p className="capitalize text-xs text-gray-400">{category}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
