import React from 'react';
import logoIcon from "../assets/fav.png"
import logotext from "../assets/textlogo.png"

const Navbar = () => {
    return (
        <div className='w-full bg-white drop-shadow-md flex flex-col items-center py-3'>
            <div className='flex items-center'>
                <img className='App-logo h-[60px] mr-3' src={logoIcon} alt="" />
                <img className='h-[40px]' src={logotext} alt="" />
            </div>
        </div>
    );
};

export default Navbar;