import Image from 'next/image';
import React from 'react';

const OrderHistoryCover = ({ data }) => {
    return <div className=' m-2'>
        <h1 className='uppercase text-lg font-bold'>Your Order: {data._id}</h1>
        <h1 className='mt-1'>{data.createdAt.split('T')[0]} | ₹{data.totalPrice} | {data.orderItems[0].qty} item</h1>
        <div className='mt-2'>
            <Image src={data.orderItems[0].product.thumbnail} height={100} width={100} alt='' />
        </div>
        <div className='w-full flex justify-end'>
            <button className='bg-black text-white p-3 px-6'>View Details</button>
        </div>
        <hr className='mt-4 border border-black' />
    </div>;
};

export default OrderHistoryCover;
