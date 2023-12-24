import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCart } from '../features/cartSlice';
import '../styles/cart.css'
import CartItem from './cartItem';


const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart)
    const handleClear = () => {
        dispatch(clearCart())
    }
    return (
        <div className='cart'>
            <div className='cart-header'>
                <h1>Shopping Cart</h1>
                <button onClick={handleClear}> Clear Cart </button>
            </div>
            <div className='cart-container'>
                
                {cartItems.length === 0 ? 
                    <NoItems/>
                    : <div className='cart-grid'>
                        {cartItems.map((item) => {
                            return <CartItem product={item}/>
                        })}
                </div> }
            </div>
        </div>
    );
};

export default Cart;

const NoItems = () => {

    return (
        <div style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"

        }}>
            <img style={{
                width:"20%", height:'auto'
                }}
                src="https://res.cloudinary.com/derisfxve/image/upload/v1703426318/e-commerce/emptyCart_ncqajc.jpg"
                alt=""
            />
            <h3>No items in the shopping cart.</h3>
            <button>
                <Link to="/">Go Back To Shop</Link>
            </button>
        </div>
    )
}