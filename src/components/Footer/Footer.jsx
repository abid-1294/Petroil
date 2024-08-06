import React from 'react';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { TbPhoneCall } from 'react-icons/tb';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import isoImage from '../../assets/iso.png';
import liquidGreenImage from '../../assets/liquidgreen.png';
import Logo from '../../assets/Logo.png';

const Footer = () => {
    return (
        <div className='bg-black pt-[149px]'>
            <div className=" text-white py-10 flex justify-center items-center">
                <div className="container mx-auto px-4 flex flex-wrap justify-between">

                    <div className="w-full md:w-1/4 mb-8 md:mb-0 font-normal font-Pops text-[14px]">
                        <img src={Logo} alt="" className='pb-[33px]' />

                        <p className="mb-2 flex items-center">
                            <span className="inline-block mr-[8.5px]"><MdOutlineMarkEmailUnread className='w-[20px] h-[20px]'/></span>mail@yourcompany.com
                        </p>
                        <p className="mb-2 flex items-center">
                            <span className="inline-block mr-2"><TbPhoneCall className='w-[20px] h-[20px]'/></span>+896 120 5898 (Toll free)
                        </p>
                        <p className="mb-4 flex items-center">
                            <span className="inline-block mr-2"><GoLocation className='w-[21px] h-[21x]'/> </span>101 Baker Street, New York, USA, 12345
                        </p>
                        <div className="flex space-x-4 mt-[34px]">
                            <a href=""><FaFacebook className='text-primary_color w-[29px] h-[29px]'/></a>
                            <a href=""><FaTwitter className='text-primary_color w-[29px] h-[29px]'/></a>
                            <a href=""><FaLinkedin className='text-primary_color w-[29px] h-[29px]'/></a>
                            <a href=""><FaInstagram className='text-primary_color w-[29px] h-[29px]'/></a>
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 mb-8 md:mb-0 font-Pops mt-5">
                        <h3 className="font-bold mb-4 text-[16px]">Company</h3>
                        <ul className='font-normal text-[14px] font-Pops'>
                            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Gallery</a></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4 mb-8 md:mb-0 font-Pops mt-5">
                        <h3 className="font-bold mb-4 text-[16px]">Others</h3>
                        <ul className='font-normal text-[14px] font-Pops'>
                            <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Terms & Conditions</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4 font-Pops mt-5">
                        <h3 className="font-bold mb-4 text-[16px]">Certificate</h3>
                        <div className="flex space-x-4">
                            <img src={isoImage} alt="ISO 88" className="h-12" />
                            <img src={liquidGreenImage} alt="LiquidGreen" className="h-12" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-[43px] mt-[170px] bg-[#282828]'>
                <div className="container mx-auto ">
                    <p className="text-sm text-[#6C6C6C] text-left">© Copyright 2022 by AltDesain Studio – All rights reserved.</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;
