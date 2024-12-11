import React from 'react';

const HomeEquipmentsCategoryCard = ({category}) => {

    return (
        <div className='text-center'>
            <div>
                <img className='w-[150px] h-[150px]' src={category.image} />
            </div>
            <h1 className='mt-4 font-bold text-2xl'>{category.category}</h1>
        </div>
    );
};

export default HomeEquipmentsCategoryCard;