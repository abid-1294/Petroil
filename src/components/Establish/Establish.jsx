import React from 'react'
import EstablishImage1 from '../../assets/Establish1.png'
import EstablishImage2 from '../../assets/Establish2.png'
import EstablishImage3 from '../../assets/Establish3.png'
import EstablishImage4 from '../../assets/Establish4.png'
const Establish = () => {
  return (
    <div>
       <div id='establish' className="container mx-auto flex items-center h-[394px]">
            <div className="w-1/2">
                <p className="font-bold text-[48px] font-Pops line-[72px]">
                    The biggest<br />
                    supplier on<br />
                    the country
                </p>
            </div>
            <div className="w-1/2">
                <p className="text-[16px] font-Pops w-[651px] font-medium">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
                </p>
            </div>
        </div>
        <div className='flex w-full mt-[80px]'>
            <div className='w-1/4 p-2'>
                <img src={EstablishImage1} alt="EstablishImage1" className="w-full h-auto object-cover" />
            </div>
            <div className='w-1/4 p-2'>
                <img src={EstablishImage2} alt="EstablishImage2" className="w-full h-auto object-cover" />
            </div>
            <div className='w-1/4 p-2'>
                <img src={EstablishImage3} alt="EstablishImage3" className="w-full h-auto object-cover" />
            </div>
            <div className='w-1/4 p-2'>
                <img src={EstablishImage4} alt="EstablishImage4" className="w-full h-auto object-cover" />
            </div>
        </div>
    </div>
  )
}

export default Establish
