import React from 'react';
import logo from './images/Logo.png';
function Header() {
  return (
<div className='text-white font-lato'>
    <div className='flex fixed justify-center items-center w-screen h-[100px] mx-auto z-10 bg-[#1E3E62]'>
        <img src={logo} alt="Logo" className='h-[90px] w-[90px] mt-1 ml-12'/>
        <h3 className='text-[40px] font-play font-semibold'>Sadye's Restaurant</h3>
        <ul className='flex justify-center gap-8 text-[24px] text-center items-center m-auto list-inside'>
            <li><button>Home</button></li>
            <li><button>About Us</button></li>
            <li><button>Shop</button></li>
            <li><button>Menu</button></li>
            <li><button>Contact Us</button></li>
        </ul>
        <button className='absolute-right px-4 py-2 bg-[#FF6500] mr-8 rounded-[12px] text-[20px] font-bold'>Reserve Now</button>

    </div>
</div>

  )
}

export default Header