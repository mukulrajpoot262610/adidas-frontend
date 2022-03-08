import commaNumber from 'comma-number';
import React from 'react';
import moment from 'moment'
import Link from 'next/link';

const OrderHistoryCover = ({ data }) => {
    return <div className=' m-2 border border-black p-6'>
        <h1 className='uppercase text-lg font-bold'>Your Order: {data._id}</h1>
        <h1 className='mt-1'>{moment(data.createdAt).fromNow()} | ₹{commaNumber(data.totalPrice)} | {data.orderItems?.map(e => e.qty).reduce((a, b) => a + b, 0)} item</h1>
        <div className='mt-2 h-20 flex items-end justify-between'>
            <div className='flex h-20 gap-3'>
                {
                    data.orderItems?.map((e, i) => <img key={i} src={e.product.thumbnail} alt='' className='h-full' />)
                }
            </div>
            <Link href={`/order-tracker/${data._id}`} passHref>
                <button className='bg-black text-white p-3 px-6'>View Details</button>
            </Link>
        </div>
    </div>;
};

export default OrderHistoryCover;
