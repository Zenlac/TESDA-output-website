import React from 'react'
import scale from './images/scales.png'
import chai from './images/Chai.png'
import speed from './images/speed clock.png'
import chaching from './images/chaching.png'
import paper from './images/paper.png'
import utensils from './images/utensils.png'
import walis from './images/walis.png'
function Flavors() {
  return (
    <div className='mt-20'>
      <h1 className='text-[48px] text-center font-semibold m-12 font-play'>We bring the flavors of India to you!</h1>

        <div className='grid grid-cols-3 mx-[160px]'>
            <div className='grid gap-y-8'>
                <div className='flex'>
                  <img src={scale} alt="scales" className='flex h-[100px] mt-4'/>
                  <div className=' w-[300px]'>
                    <h5 className='font-bold text-[24px]'>Quality Ingredients</h5>
                    <h6 className='font-semibold text-[20px]'>—rich, aromatic spices, fresh herbs, and nurturing staples that evoke the essence of tradition, hospitality, and vibrant flavors.</h6>
                  </div>  
                </div>
                <div className='flex ml-12'>
                  <img src={speed} alt="clock" className='flex h-[100px] mt-4 '/>
                  <div className=' w-[300px]'>
                    <h5 className='font-bold text-[24px]'>Fast and Friendly</h5>
                    <h6 className='font-semibold text-[20px]'>—where every interaction is infused with genuine hospitality, making you feel like part of the family from the moment you arrive.</h6>
                  </div>  
                </div>
                <div className='flex ml-6'>
                  <img src={chaching} alt="clock" className='flex h-[100px] mt-4'/>
                  <div className=' w-[300px]'>
                    <h5 className='font-bold text-[24px]'>Fast and Friendly</h5>
                    <h6 className='font-semibold text-[20px]'>—where every interaction is infused with genuine hospitality, making you feel like part of the family from the moment you arrive.</h6>
                  </div>  
                </div>
            </div>

            <div className='grid relative'>
              <img className='mt-16' src={chai} alt="chai tea" />
            </div>

            <div className='grid gap-y-8'>
            <div className='flex ml-5'>
                  <img src={paper} alt="scales" className='flex h-[100px] mt-4 pr-8'/>
                  <div className=' w-[300px]'>
                    <h5 className='font-bold text-[24px]'>Diverse Menu</h5>
                    <h6 className='font-semibold text-[20px]'>—offering a vibrant array of flavors and textures that reflect the country’s rich cultural tapestry and culinary heritage.</h6>
                  </div>  
                </div>
                <div className='flex ml-12'>
                  <img src={utensils} alt="clock" className='flex h-[100px] mt-4 opacity-75'/>
                  <div className=' w-[300px] '>
                    <h5 className='font-bold text-[24px]'>Best Recipes</h5>
                    <h6 className='font-semibold text-[20px]'>—where time-honored techniques and fresh ingredients come together to create comforting, soul-soothing dishes that celebrate tradition and bring people closer.</h6>
                  </div>  
                </div>
                <div className='flex ml-6'>
                  <img src={walis} alt="clock" className='flex h-[100px] mt-4 mr-6'/>
                  <div className=' w-[300px]'>
                    <h5 className='font-bold text-[24px]'>A Must Cleanliness</h5>
                    <h6 className='font-semibold text-[20px]'>—where every space is cared for with respect and attention, ensuring a welcoming, safe, and inviting atmosphere for all.</h6>
                  </div>  
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Flavors