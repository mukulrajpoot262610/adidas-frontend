import commaNumber from 'comma-number';
import React from 'react';

const OrderHistoryCover = ({ data }) => {
    return <div className=' m-2 border border-black p-6'>
        <h1 className='uppercase text-lg font-bold'>Your Order: {data._id}</h1>
        <h1 className='mt-1'>{data.createdAt.split('T')[0]} | ₹{commaNumber(data.totalPrice)} | {data.orderItems[0].qty} item</h1>
        <div className='mt-2 h-20 flex items-end justify-between'>
            <img src={data.orderItems[0].product.thumbnail} alt='' className='h-full' />
            <button className='bg-black text-white p-3 px-6'>View Details</button>
        </div>
    </div>;
};

export default OrderHistoryCover;
