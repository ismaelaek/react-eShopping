import React from 'react';
import { FaCartPlus } from 'react-icons/fa'
import {useDispatch} from 'react-redux'
import { addToCart } from '../features/cartSlice';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(addToCart(product))
    }
    return (
        <div className='prod-container'>
            <div className="prod-image">
                <img src={product.img} alt={product.desc} />
            </div>
            <div className='prod-description'>
                <h2>{product.name}</h2>
                <p>{product.desc}</p>
                <h2>{product.price} MAD </h2>
                <button className="CartBtn" onClick={handleClick}>
                    <span className="IconContainer"> 
                        <FaCartPlus className='cart'/>
                    </span>
                    <p className="text">Add to Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;