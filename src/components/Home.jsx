import React,{useEffect} from 'react';
import NavBar from './Navbar';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { getProducts } from '../features/productsSlice';
import {Spin } from 'antd';
import Product from './Product';
import CarouselSection from './Carousel'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    
    const {value ,isLoading, error} = useSelector(state => state.products)
    console.log(isLoading)
    return (
        <>
            <NavBar />
            <CarouselSection />
            <div>
                {isLoading ? <IsloadingComp /> 
                    : (
                        <div className='container'>
                            {value.map((item) => {
                                return <Product key={item.id} product={item} />
                            })}
                    </div>
                )
                
                }
            </div>
        </>
    );
};

export default Home;



const IsloadingComp = () => (
    <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: window.innerHeight
            }}>
        <Spin size="large" />
        <h3>Loading... Please wait</h3>
    </div>
);