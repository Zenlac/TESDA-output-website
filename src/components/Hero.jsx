import React from 'react'
import bg1 from './images/Background1.png'
import bg2 from './images/Background2.png'
import bg3 from './images/Background3.jpeg'
import bg4 from './images/Background4.jpeg'
import bg5 from './images/Background5.jpeg'
import bg6 from './images/Background6.png'
import bg7 from './images/Background7.png'
function Hero() {
  return (
    <div>
        <div className='w-screen h-[710px] bg-[#0B192C]'>
            
            <div className='grid grid-cols-3 opacity-10 w-screen h-[710px] overflow-hidden z-0 justify-  '>
                <div className='grid'>
                    <img className='h-auto min-w-full' src={bg1} alt="background hero" />
                    <img className='h-auto min-w-full' src={bg2} alt="background hero" />

                    
                </div>
                <div className='grid gap-0'>
                    <img className='h-auto min-w-full' src={bg4} alt="background hero" />
                    <img className='h-auto min-w-full' src={bg5} alt="background hero" />
                    <img className='h-auto min-w-full' src={bg3} alt="background hero" />
                    <h1>item</h1>
                    <h1>item</h1>
                    <h1>item</h1>
                    <h1>item</h1>
                    <h1>item</h1>
                    <h1>item</h1>
                    <h1>item</h1>
                    
                </div>

                <div className='grid'>
                    <img className='h-auto min-w-full' src={bg6} alt="background hero" />
                    <img className='h-auto min-w-full' src={bg7} alt="background hero" />
                    <h1>item</h1>
                    <h1>item</h1>
                    <h1>item</h1>
                    <h1>item</h1>
                    <h1>item</h1>
                    <h1>item</h1>
                    

                    
                </div>


                

            </div>
        </div>
    </div>
    
  )
}

export default Hero