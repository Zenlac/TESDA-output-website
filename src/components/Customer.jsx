import React from 'react';
import customerbg from './images/customerbg.jpg';
import customerside from './images/customerside.png';
import customer from './images/customer.png';
import fivestar from './images/five-stars.png';
function Customer() {
  return (
    <div>
        <div className='relative w-screen h-[360px] bg-[#1E3E62] mt-32 overflow-hidden '>
            <div className='w-screen absolute'>
                <img className=' w-screen opacity-10' src={customerbg} alt="bg" />
            </div>
            <div className='flex absolute ml-[160px]'>
                <div className='mt-[40px] '>
                    <h1 className='text-[48px] font-play font-semibold text-white pb-8 '>What Customer Says</h1>
                    <div className='flex w-[685px] h-[165px] bg-white rounded-[20px]'>
                        <img className='w-[110px] h-[110px] my-auto ml-4' src={customer} alt="customer" />
                        <div className='p-6'>
                            <h6 className='font-lato text-[20px] font-bold '>Askrim Grace</h6>
                            <h6 className='font-lato text-[20px]'>It was so good. 10/10 would recommend. So authentic and mouth watering!!! 🤤🤤🤤</h6>
                        </div>
                        <img className='my-2 mr-6' src={fivestar} alt="yes yes yes" />
                    </div>

                </div>
                <div className=''>
                    <img className='ml-40 ' src={customerside} alt="yes" />
                </div>
                
            </div>
  



        </div>
        
    </div>
  )
}

export default Customer