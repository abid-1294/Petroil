import React from 'react'
import Logo from "../../assets/Logo.png"
const Navbar = () => {
    return (
        <div>
            <div className='bg-primary_color w-full h-[105px]'>
                <div className='container mx-auto flex justify-between items-center py-[27px]'>
                    <div><img src={Logo} alt="logo image" /></div>
                    <div>
                        <ul className='flex justify-between items-center text-Pops font-semibold text-[16px] text-white'>
                            <li><a href="#home" className='hover:underline'>Home</a></li>
                            <li className='ml-[47px]'><a href="#establish" className='hover:underline'>Gallery</a></li>
                            <li className='ml-[47px]'><a href="#service" className='hover:underline'>Services</a></li>
                            <li className='ml-[47px]'><a href="#" className='hover:underline'>About</a></li>
                            <li className='ml-[47px]'><a href="#blog" className='hover:underline'>Blog</a></li>
                        </ul>
                    </div>
                    <div><button className='w-[142px] h-[51px] bg-primary_color text-white text-Pops font-semibold border border-white cursor-pointer hover:bg-white hover:text-primary_color hover:font-bold'><a href="#contact">CONTACT</a></button></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
