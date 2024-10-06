import React from 'react'
import onlinebg from './images/Onlinebg.webp'
import menu from './images/menu.png'
import cart from './images/cart.png'
import edit from './images/edit.png'
import smile from './images/smile.png'
function Online() {
  return (
    <div className='mt-28'>
        <div className='bg-[#0B192C] w-screen h-[416px] relative overflow-hidden'>
            <img className='flex absolute w-screen h-auto opacity-5' src={onlinebg} alt="bg for online" />
            <h1 className='text-center text-white text-[48px] font-play font-semibold py-12'>How to order online?</h1>

            <div className='grid grid-cols-4 mx-[160px] justify-center text-center text-white items-center'>
                <div className='grid justify-center '>
                    <div className='w-[100px] h-[100px] bg-white rounded-[20px] m-auto'>
                        <img className='m-auto' src={menu} alt="menu" />
                    </div>
                    <h5 className='text-[24px] mt-8'>Browse our Menu</h5>
                </div>
                <div className='grid justify-center '>
                    <div className='w-[100px] h-[100px] bg-white rounded-[20px] m-auto'>
                        <img className='m-4' src={cart} alt="cart" />
                    </div>
                    <h5 className='text-[24px] mt-8'>Add your order</h5>
                </div>
                <div className='grid justify-center '>
                    <div className='w-[100px] h-[100px] bg-white rounded-[20px] m-auto'>
                        <img className='m-4' src={edit} alt="edit" />
                    </div>
                    <h5 className='text-[24px] mt-8'>Customize your order</h5>
                </div>
                <div className='grid justify-center '>
                    <div className='w-[100px] h-[100px] bg-white rounded-[20px] m-auto'>
                        <img className='m-4' src={smile} alt="smile" />
                    </div>
                    <h5 className='text-[24px] mt-8'>Enjoy your meal</h5>
                </div>
                

            </div>
        </div>
        
    </div>
  )
}

export default Online