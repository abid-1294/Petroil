import React from 'react'
import BannerImage from "../../assets/banner.png"

const Banner = () => {
    return (
        <>
            <div className='relative'>
                <div className='absolute top-0 left-0 w-full h-full'>
                    <img src={BannerImage} alt="Banner" className='w-full h-full object-cover' />
                </div>
                <div className='bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0'></div>
                <div className='relative container mx-auto w-full z-10  h-[779px]'>
                    <p className='w-[842px] font-bold text-[64px] font-Pops text-white pt-[257px]'>
                        We exist since 1975 in the oil and gas industry.
                    </p>
                    <button className='mt-[31px] w-[186px] h-[51px] text-[16px] font-semibold bg-primary_color text-white cursor-pointer hover:bg-white hover:text-primary_color hover:font-bold'>
                        <a href="">Learn More</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Banner
