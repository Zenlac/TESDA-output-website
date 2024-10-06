import React from 'react'
import new1 from './images/new1.png'
import new2 from './images/new2.png'
import new3 from './images/new3.png'
function New() {
  return (
    <div>
        <h1 className='font-play text-[48px] font-semibold text-center mt-[180px] mb-[140px]'>What's New?</h1>
        <div className='grid grid-cols-3 mx-[160px]'>

            <div className='grid w-[400px] h-[265px] bg-[#d9d9d9] rounded-[12px]'>
                <div className='flex'>
                    <img className='w-[225px] h-[135px] mt-4 ml-4' src={new1} alt="new1" />
                    <h5 className='font-play text-[24px] mt-[52px] mx-auto h-[36px] w-[120px] text-center rounded-[12px] text-white bg-[#1E3E62] bg-opacity-50'>₱300.00</h5>
                </div>
                <h5 className='text-[24px] font-play font-semibold pl-4'>Seekh Kebabs</h5>
                <p className='font-lato text-[16px] pl-4'>Minced meat (usually lamb or chicken) mixed with spices and herbs, shaped onto skewers, and grilled.</p>
            </div>

            <div className='grid w-[400px] h-[265px] bg-[#d9d9d9] rounded-[12px]'>
                <div className='flex'>
                    <img className='w-[225px] h-[135px] mt-4 ml-4 rounded-[12px]' src={new2} alt="new1" />
                    <h5 className='font-play text-[24px] mt-[52px] mx-auto h-[36px] w-[120px] text-center rounded-[12px] text-white bg-[#1E3E62] bg-opacity-50'>₱420.00</h5>
                </div>
                <h5 className='text-[24px] font-play font-semibold pl-4'>Prawn Masala</h5>
                <p className='font-lato text-[16px] pl-4'>Spicy prawns sautéed with onions, tomatoes, and aromatic spices, served as a flavorful starter.</p>
            </div>

            <div className='grid w-[400px] h-[265px] bg-[#d9d9d9] rounded-[12px]'>
                <div className='flex'>
                    <img className='w-[225px] h-[135px] mt-4 ml-4' src={new3} alt="new1" />
                    <h5 className='font-play text-[24px] mt-[52px] mx-auto h-[36px] w-[120px] text-center rounded-[12px] text-white bg-[#1E3E62] bg-opacity-50'>₱350.00</h5>
                </div>
                <h5 className='text-[24px] font-play font-semibold pl-4'>Fish Amritsari</h5>
                <p className='font-lato text-[16px] pl-4'>Spicy prawns sautéed with onions, tomatoes, and aromatic spices, served as a flavorful starter.</p>
            </div>

        </div>
        
    </div>
  )
}

export default New