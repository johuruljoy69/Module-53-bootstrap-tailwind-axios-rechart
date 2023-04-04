import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-blue-200 mt-5 rounded-md p-5 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold text-purple-700'>{price.price}</span>
                <span className='text-2xl font-bold'>/mon</span>
            </h2>
            <h2 className='text-2xl font-bold text-center my-6'>{price.name}</h2>
            <p className='text-xl font-semibold underline'>Features:</p>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='w-full bg-purple-500 rounded-md text-xl text-blue-50 text-center p-3 font-bold hover:bg-purple-900 mt-auto  '>Buy Now</button>
        </div>
    );
};

export default PriceCard;