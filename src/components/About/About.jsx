import React from 'react'
import AboutImg from '../../assets/About.png'
import AboutImg2 from '../../assets/About2.png'
import AboutImg3 from '../../assets/About3.png'
import AboutImg4 from '../../assets/About4.png'
import AboutImg5 from '../../assets/About5.png'
import rightArrow from '../../assets/rightArrowVector.png'
const About = () => {
    return (
        <>
            <div id='blog' className='py-[136px] bg-[#F0F0F0]'>
                <div className='flex justify-center items-center'>
                    <div className='bg-primary_color w-[413px] h-[361px]'>
                        <p className='w-[262px] font-bold font-Pops text-[36px] text-white ml-[74px] mt-[100px]'>Learn more about our company</p>
                    </div>
                    <div className='relative'>
                        <img src={AboutImg} alt="About Image" />
                        <div className='absolute top-0 left-0 mt-[168px] ml-[282px]'>
                            <button className='w-[186px] h-[51px] text-[16px] font-semibold bg-primary_color text-white cursor-pointer hover:bg-white hover:text-primary_color hover:font-bold'><a href="">Learn More</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-[136px]'>
                <div className='flex justify-center items-center'>
                    <img src={AboutImg2} alt="AboutImg2" />
                </div>
            </div>

            <div className='py-[110px] bg-[#F0F0F0]'>
                <div className='container mx-auto'>
                    <div className='flex justify-center items-center gap-16'>
                        <div className='relative w-[340px] h-[400px]'>
                            <div className='absolute top-0 left-0 w-full h-full'>
                                <img src={AboutImg3} alt="Serviceimg1" className='w-full h-full object-cover' />
                            </div>
                            <div className='bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0'></div>
                            <div className='relative w-full z-10 h-full pt-[75px] pl-[46px]'>
                                <p className='font-bold text-[24px] font-Pops text-white w-[249px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                                <button className='mt-[52px] w-[123px] h-[38px] text-[12px] font-semibold bg-[rgba(255,255,255,0.5)] text-white cursor-pointer hover:bg-white hover:text-primary_color hover:font-bold'><a href="">Read More</a></button>
                            </div>
                        </div>
                        <div className='relative w-[340px] h-[400px]'>
                            <div className='absolute top-0 left-0 w-full h-full'>
                                <img src={AboutImg4} alt="Serviceimg1" className='w-full h-full object-cover' />
                            </div>
                            <div className='bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0'></div>
                            <div className='relative w-full z-10 h-full pt-[75px] pl-[46px]'>
                                <p className='font-bold text-[24px] font-Pops text-white w-[249px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                                <button className='mt-[52px] w-[123px] h-[38px] text-[12px] font-semibold bg-[rgba(255,255,255,0.5)] text-white cursor-pointer hover:bg-white hover:text-primary_color hover:font-bold'><a href="">Read More</a></button>
                            </div>
                        </div>
                        <div className='relative w-[340px] h-[400px]'>
                            <div className='absolute top-0 left-0 w-full h-full'>
                                <img src={AboutImg5} alt="Serviceimg1" className='w-full h-full object-cover' />
                            </div>
                            <div className='bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0'></div>
                            <div className='relative w-full z-10 h-full pt-[75px] pl-[46px]'>
                                <p className='font-bold text-[24px] font-Pops text-white w-[249px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                                <button className='mt-[52px] w-[123px] h-[38px] text-[12px] font-semibold bg-[rgba(255,255,255,0.5)] text-white cursor-pointer hover:bg-white hover:text-primary_color hover:font-bold'><a href="">Read More</a></button>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-end mt-[29px] mr-[190px]">
                        <a href="" className='flex items-center w-[210px]'>
                            <p className='font-bold font-Pops text-[16px] text-black'>
                                MORE FROM THE BLOG
                            </p>
                            <img src={rightArrow} alt="rightArrow" className='w-[11px] h-[15px] ml-2' /></a>
                    </div>


                </div>
            </div>

        </>
    )
}

export default About
