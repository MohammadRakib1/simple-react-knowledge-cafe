import React from 'react';
import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex items-center justify-between mx-auto max-w-7xl p-4 border-b-2'>
            <h2 className='text-4xl font-bold'>Knowledge Cafe</h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;