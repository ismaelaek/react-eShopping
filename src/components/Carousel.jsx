import React from 'react';
import { Carousel } from 'antd';
import SpecialOffer from './SpecialOffer';

const imageStyle = {
    width: '100%',
    height: 'auto',
    
};
const CarouselSection = () => (
    <Carousel autoplay style={{
        overflow: 'hidden',
        height: 350,
        padding: 0,
        marginBottom : 40
    }}>
        <div>
        <img style={imageStyle} src="https://res.cloudinary.com/derisfxve/image/upload/v1703418645/e-commerce/d53d5ac5-d785-489e-b9d6-13c3de61fdcd_wxw6du.png" alt="" />
        </div>
        <div>
        <img style={imageStyle} src="https://res.cloudinary.com/derisfxve/image/upload/v1703418645/e-commerce/LD-big-winter-top-pick-MSI-GAMING-LAPTOP-750x235_d8mkxd.jpg" alt="" />
        </div>
        <div>
        <img style={imageStyle} src="https://res.cloudinary.com/derisfxve/image/upload/v1703418645/e-commerce/1_5WMVKckq7CxoqQuL_IXfiQ_h8zlnh.jpg" alt="" />
        </div>
        <SpecialOffer/>
    </Carousel>
);
export default CarouselSection;