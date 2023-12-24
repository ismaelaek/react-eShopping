import React from 'react';
import '../styles/specialOffer.css'
const SpecialOffer = () => {
    return (
        <div className='special-offer'>
            <div className='headings'>
                <h1 className="text-center">Special</h1>
                <h1>Offer</h1>
                <button className='signup-btn'>
                    Sign Up Now
                </button>
            </div>
            <div className='SP-content'>
                <div class="card">
                    <img src="https://res.cloudinary.com/derisfxve/image/upload/v1703421309/e-commerce/588524d86f293bbfae451a31_rbqdxl.png" alt="" />
                </div>
                <div className='SP-text'>
                    <h3>Sign Up To See More</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro debitis,
                        voluptatibus autem illum accusamus excepturi vel atque mollitia velit non maiores
                        placeat nulla error laudantium aliquid libero totam, in explicabo doloremque rem neque,
                        quae similique quo. Adipisci dicta eveniet perspiciatis.
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default SpecialOffer;