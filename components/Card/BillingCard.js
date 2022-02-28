import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import commaNumber from 'comma-number';

const BillingCard = () => {

    const cart = useSelector(state => state.cart)
    const { products, quantity, total } = cart;

    const [originalPrice, setOriginalPrice] = useState()
    const [discount, setDiscount] = useState()

    useEffect(() => {
        products.length && setOriginalPrice(products.map((e) => {
            return ({ price: e.product.price, qty: e.qty })
        }).map(e => +e.price * +e.qty).reduce((a, b) => a + b))

        products.length && setDiscount(products.map((e) => {
            return ({ price: e.product.salePrice, qty: e.qty })
        }).map(e => +e.price * +e.qty).reduce((a, b) => a + b))

    }, [products])

    return <>
        <div className="border-2 border-black p-4">
            <h1 className="font-bold text-xl uppercase mb-4">Order summary</h1>
            <div className="w-full flex justify-between items-center my-2">
                <h1>Original Price: </h1>
                <h1>₹{commaNumber(originalPrice)}</h1>
            </div>
            <div className="w-full flex justify-between items-center my-2">
                <h1>Discount (On Sale): </h1>
                <h1>-₹{commaNumber(originalPrice - discount)}</h1>
            </div>
            <div className="w-full flex justify-between items-center my-2">
                <h1>Net Price: </h1>
                <h1>₹{commaNumber(discount)}</h1>
            </div>
            <div className="w-full flex justify-between items-center my-2">
                <h1>Delivery: </h1>
                <h1>FREE</h1>
            </div>
            <div className="w-full flex justify-between items-center my-2">
                <h1 className="font-black text-lg">TOTAL: </h1>
                <h1 className="font-black text-lg">₹{commaNumber(total)}</h1>
            </div>
        </div>
    </>;
};

export default BillingCard;
