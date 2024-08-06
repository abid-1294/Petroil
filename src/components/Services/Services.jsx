import React from 'react'
import Serviceimg1 from '../../assets/ServicesImg1.png'
import Serviceimg2 from '../../assets/ServicesImg2.png'
import Serviceimg3 from '../../assets/ServicesImg3.png'
const Services = () => {
    return (
        <div id='service'>
            <div className='grid grid-cols-2 w-full'>
                <div className='pt-2 text-right'>
                    <p className='font-Pops font-bold text-[64px] text-black pt-[103px] pr-[156px]'>
                        Our Services
                    </p>
                    <div className='pt-2 pr-[156px] flex justify-end'>
                        <p className='font-Pops font-medium text-[16px] text-[#6C6C6C] w-[390px]'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>
                </div>



                <div className='pt-2'>
                    <div className='relative'>
                        <div className='absolute top-0 left-0 w-full h-full'>
                            <img src={Serviceimg1} alt="Serviceimg1" className='w-full h-full object-cover' />
                        </div>
                        <div className='bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0'></div>
                        <div className='relative container mx-auto w-full z-10 h-full pt-[147px] pb-[139px]'>
                            <p className='font-bold text-[36px] font-Pops text-white pl-[116px]'>Modern natural oil and gas refineries.</p>
                            <button className='mt-[19px] w-[186px] h-[51px] text-[16px] ml-[116px] font-semibold bg-primary_color text-white cursor-pointer hover:bg-white hover:text-primary_color hover:font-bold'><a href="">Learn More</a></button>
                        </div>
                    </div>
                </div>

                    <div className='relative'>
                        <div className='absolute top-0 left-0 w-full h-full'>
                            <img src={Serviceimg2} alt="Serviceimg2" className='w-full h-full object-cover' />
                        </div>
                        <div className='bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0'></div>
                        <div className='relative container mx-auto w-full z-10 h-full pt-[147px] pb-[139px]'>
                            <p className='font-bold text-[36px] font-Pops text-white pl-[116px]'>Supply of national industries.</p>
                            <button className='mt-[19px] w-[186px] h-[51px] text-[16px] ml-[116px] font-semibold bg-primary_color text-white cursor-pointer hover:bg-white hover:text-primary_color hover:font-bold'><a href="">Learn More</a></button>
                        </div>
                    </div>
      


                    <div className='relative'>
                        <div className='absolute top-0 left-0 w-full h-full'>
                            <img src={Serviceimg3} alt="Serviceimg3" className='w-full h-full object-cover' />
                        </div>
                        <div className='bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0'></div>
                        <div className='relative container mx-auto w-full z-10 h-full pt-[147px] pb-[139px]'>
                            <p className='font-bold text-[36px] font-Pops text-white pl-[116px]'>National fuel distribution and supply.</p>
                            <button className='mt-[19px] w-[186px] h-[51px] text-[16px] ml-[116px] font-semibold bg-primary_color text-white cursor-pointer hover:bg-white hover:text-primary_color hover:font-bold'><a href="">Learn More</a></button>
                        </div>
                    </div>

               
            </div>
        </div>
    )
}

export default Services
