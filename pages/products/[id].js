import Head from 'next/head'
import React, { useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const ProductDetail = () => {

    // const dispatch = useDispatch()
    const [shoeSize, setShoeSize] = useState()
    const [qty, setQty] = useState(1)

    const handleAddToCart = () => {

        if (!shoeSize) return message.error('Please Select a size')

        const payload = {
            id: product._id + Math.floor(Math.random() * 1000),
            product,
            qty: +qty,
            size: shoeSize,
        }
        dispatch(addProductData(payload))
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>adidas Online Shop | adidas IN</title>
                <link rel="icon" href="/logo.svg" />
            </Head>

            <div className="container w-full p-4 px-4 lg:px-10 mt-10">
                <div className="flex flex-col xl:flex-row">

                    <div className="p-4 w-1/2">
                        <img src={product.thumbnail} alt='' className='h-4/5 w-full object-cover' />
                    </div>

                    <div className="p-4 w-1/2">
                        <div className='flex justify-between items-center mt-2 md:mt-32 xl:mt-0
                                '>
                            <p className='uppercase font-bold mb-2 text-gray-400'>{product.category}</p>
                            <div className='flex items-center justify-center'>
                                <h1 className="font-bold text-xs ml-3 underline">{product.numOfReviews}</h1>
                            </div>
                        </div>
                        <h1 className="font-bold text-4xl uppercase">{product.name}</h1>
                        <p className="my-3">Join the adidas Creators Club membership program:</p>
                        <div className="mt-2 mb-8">
                            <h1 className="my-1 font-bold text-2xl text-red-700">₹{product.salePrice} <span className='text-xs text-gray-400'>[ {((product.salePrice / product.price) * 100).toFixed(0)}% discount]</span></h1>
                            {
                                product.salePrice === product.price ? "" : <h1 className="font-light line-through text-sm">₹{product.price}</h1>
                            }
                            <h1 className="font-light text-sm">(Prices include GST)</h1>
                        </div>

                        <div className="my-8">
                            <div className="w-full flex justify-between">
                                <h1 className="font-bold">SIZE</h1>
                                <h1 className="font-bold flex items-center cursor-pointer">SIZE CHART</h1>
                            </div>
                            <div className="flex justify-between flex-wrap mt-4">
                                {
                                    [7, 8, 9, 10, 11].map((e, index) => <div className="border-2 cursor-pointer hover:border-black active:text-white w-20 py-1 flex justify-center items-center m-1" key={index} onClick={() => setShoeSize(e)} >{e}</div>)
                                }
                            </div>
                            <h1 className="font-bold my-4 uppercase">Quantity</h1>
                            <div className="flex flex-col items-start justify-between my-2">
                                <select defaultValue="1" size="large" className="border-2 bg-transparent w-full cursor-pointer active:text-white py-4 px-6 " onChange={(e) => setQty(e.target.value)}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                </select>
                            </div>
                            <button onClick={handleAddToCart} className="cursor-pointer bg-black text-white py-4 px-6 w-full flex items-center uppercase">Add to Bag &nbsp; <HiArrowNarrowRight /></button>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col xl:flex-row">

                    <div className="p-4">

                        <h1 className="font-bold text-3xl mb-8 mt-12 uppercase">Description</h1>

                        <div className='flex flex-col xl:flex-row items-center'>
                            <div span={24} xl={11} className="">
                                <img src={product?.image} alt='' className='h-96 w-full object-cover' />
                            </div>
                            <div span={24} xl={11} className="p-4">
                                <h1 className="font-bold text-base uppercase">{product.category}</h1>
                                <h1 className="font-bold text-3xl italic uppercase">{product.name}</h1>
                                <p className="text-base mt-2">{product.desc}</p>
                            </div>
                        </div>

                        <h1 className="font-bold text-3xl mt-32 uppercase">Specifications</h1>

                        <div className='flex flex-col xl:flex-row'>
                            <div span={24} xl={11} className="p-4">
                                <ul className='list-disc'>
                                    {
                                        product.specification.map((e, i) => <li className='text-base my-2' key={i}>{e}</li>)
                                    }
                                </ul>
                            </div>
                            <div span={24} xl={11} className="p-4">
                                <ul className='list-disc'>
                                    <li className="text-base my-2"><span className='font-bold'>Importer: </span>{product.importer}</li>
                                    <li className="text-base my-2"><span className='font-bold'>Gender: </span>{product.gender}</li>
                                    <li className="text-base my-2"><span className='font-bold'>Country: </span>{product.country}</li>
                                    <li className="text-base my-2"><span className='font-bold'>Category: </span>{product.category}</li>
                                </ul>
                            </div>
                        </div>


                        <h1 className="font-bold text-3xl mt-32 uppercase">Reviews & Ratings</h1>

                        <div></div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProductDetail

// export async function getServerSideProps({ query }) {

//     let product = null;

//     try {
//         const res = await getSingleProduct(query.id);
//         if (res.data.success) {
//             product = res.data.product
//         } else {
//             product = {}
//         }
//     } catch (err) {
//         console.log(err.message)
//     }

//     return {
//         props: { product }, // will be passed to the page component as props
//     }
// }