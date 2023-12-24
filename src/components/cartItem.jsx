import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../features/cartSlice';

const CartItem = ({ product }) => {
    const dispatch = useDispatch()
    const [total, setTotal] = useState(product.price);
    const [quantity, setQuantity] = useState(1)
    const handleChange = () => {
        quantity === 0 ? dispatch(removeFromCart(product.id))
            :
        setTotal(product.price * quantity)
    }

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns : '20% 20% 20% 20% 20%'
        }}>
            <div>
                <img src={product.img} alt="" />
            </div>
            <div>
                <h1>{product.name}</h1>
            </div>
            <div>
                <h1>{product.price}</h1>
            </div>
            <div>
                <button
                    onClick={() => {
                        if (quantity > 0) {
                            setQuantity(quantity - 1)
                            handleChange();
                        }
                        
                    }}
                >-</button>
                <h3>{ quantity }</h3>
                <button
                    onClick={() => {
                        setQuantity(quantity + 1)
                        handleChange();
                    }}
                >+</button>
            </div>
            <div>
                {total} MAD
            </div>
        </div>
    );
};

export default CartItem;