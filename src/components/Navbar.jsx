import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa'
import { useSelector} from 'react-redux'

const NavBar = () => {
    let cart = useSelector((state) => state.cart);
    return (
        <nav className='navbar'>
            <h1>Online Shop</h1>
            <ul>
                <li>
                    <NavLink to='/cart' exact className='cart-icon'>
                        <FaCartArrowDown />
                        {cart.length !== 0 && <p className='prods-on-cart' >{ cart.length }</p>}
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/login' exact  className='navlink'>Sign In</NavLink>
                </li>
                <li>
                    <NavLink to='/' exact  className='navlink'>Sign Up</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;