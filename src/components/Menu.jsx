import React from 'react'
import menu1 from './images/menu1.png'
import menu2 from './images/menu2.png'
import menu3 from './images/menu3.png'
import menu4 from './images/menu4.png'
import menu5 from './images/menu5.png'
import menu6 from './images/menu6.png'
function Menu() {
  return (
    <div>
        <div className='text-center w-screen'>
            <h1 className='text-[48px] font-play font-semibold py-12'>SADYE’S MENU</h1>

            <div className='grid grid-cols-3 mx-[160px] text-white gap-y-6'>
                <div className='grid bg-[#1E3E62] w-[400px] h-[430px] rounded-[20px]'>
                    <div className='w-auto h-[250px] overflow-hidden'>
                        <img className='w-[375px] h-auto mx-auto mt-8 rounded-[12px]' src={menu1} alt="menu1" />
                    </div>
                    <div className='flex justify-between'>
                        <h5 className='text-[24px] font-play text-left ml-4 font-semibold'>Chana Masala</h5>
                        <div>
                            <h5 className='text-[24px] font-play bg-white bg-opacity-30 mr-8 px-4 py-1 rounded-[12px] '>₱300.00</h5>
                        </div>
                    </div>
                    <h6 className='font-lato text-[20px] text-left mx-4'>Spiced chickpeas cooked in a tangy tomato and onion gravy, served with rice or bread.</h6>
                </div>

                <div className='grid bg-[#1E3E62] w-[400px] h-[430px] rounded-[20px]'>
                    <div className='w-auto h-[250px] overflow-hidden'>
                        <img className='w-[375px] h-auto mx-auto mt-8 rounded-[12px]' src={menu2} alt="menu1" />
                    </div>
                    <div className='flex justify-between'>
                        <h5 className='text-[24px] font-play text-left ml-4 font-semibold'>Baingan Bharta</h5>
                        <div>
                            <h5 className='text-[24px] font-play bg-white bg-opacity-30 mr-8 px-4 py-1 rounded-[12px] '>₱350.00</h5>
                        </div>
                    </div>
                    <h6 className='font-lato text-[20px] text-left mx-4'>Roasted and mashed eggplant cooked with spices, tomatoes, and onions.</h6>
                </div>

                <div className='grid bg-[#1E3E62] w-[400px] h-[430px] rounded-[20px]'>
                    <div className='w-auto h-[250px] overflow-hidden'>
                        <img className='w-[375px] h-auto mx-auto mt-8 rounded-[12px]' src={menu3} alt="menu1" />
                    </div>
                    <div className='flex justify-between'>
                        <h5 className='text-[24px] font-play text-left ml-4 font-semibold'>Palek Paneer</h5>
                        <div>
                            <h5 className='text-[24px] font-play bg-white bg-opacity-30 mr-8 px-4 py-1 rounded-[12px] '>₱250.00</h5>
                        </div>
                    </div>
                    <h6 className='font-lato text-[20px] text-left mx-4'>Paneer cubes simmered in a smooth spinach sauce with aromatic spices.</h6>
                </div>

                <div className='grid bg-[#1E3E62] w-[400px] h-[430px] rounded-[20px]'>
                    <div className='w-auto h-[250px] overflow-hidden'>
                        <img className='w-[375px] h-auto mx-auto mt-8 rounded-[12px]' src={menu4} alt="menu1" />
                    </div>
                    <div className='flex justify-between'>
                        <h5 className='text-[24px] font-play text-left ml-4 font-semibold'>Chicken Curry</h5>
                        <div>
                            <h5 className='text-[24px] font-play bg-white bg-opacity-30 mr-8 px-4 py-1 rounded-[12px] '>₱400.00</h5>
                        </div>
                    </div>
                    <h6 className='font-lato text-[20px] text-left mx-4'>Tender chicken pieces simmered in a spiced  gravy made with tomatoes, onions, and a blend of Indian spices.</h6>
                </div>

                <div className='grid bg-[#1E3E62] w-[400px] h-[430px] rounded-[20px]'>
                    <div className='w-auto h-[250px] overflow-hidden'>
                        <img className='w-[375px] h-auto mx-auto mt-8 rounded-[12px]' src={menu5} alt="menu1" />
                    </div>
                    <div className='flex justify-between'>
                        <h5 className='text-[24px] font-play text-left ml-4 font-semibold'>Mutton Rogan Josh</h5>
                        <div>
                            <h5 className='text-[24px] font-play bg-white bg-opacity-30 mr-8 px-4 py-1 rounded-[12px] '>₱600.00</h5>
                        </div>
                    </div>
                    <h6 className='font-lato text-[20px] text-left mx-4'>Slow-cooked lamb or goat in a rich, aromatic gravy, flavored with Indian spices.</h6>
                </div>

                <div className='grid bg-[#1E3E62] w-[400px] h-[430px] rounded-[20px]'>
                    <div className='w-auto h-[250px] overflow-hidden'>
                        <img className='w-[375px] h-auto mx-auto mt-8 rounded-[12px]' src={menu6} alt="menu1" />
                    </div>
                    <div className='flex justify-between'>
                        <h5 className='text-[24px] font-play text-left ml-4 font-semibold'>Fish Curry</h5>
                        <div>
                            <h5 className='text-[24px] font-play bg-white bg-opacity-30 mr-8 px-4 py-1 rounded-[12px] '>₱450.00</h5>
                        </div>
                    </div>
                    <h6 className='font-lato text-[20px] text-left mx-4'>A flavorful curry made with fish  cooked in a coconut milk or tomato-based sauce with spices.</h6>
                </div>
            </div>
            
            <button className='bg-[#FF6500] text-[24px] p-4 font-lato font-semibold text-white rounded-[12px] mt-8'>MORE MENU</button>

        </div>
    </div>
  )
}

export default Menu