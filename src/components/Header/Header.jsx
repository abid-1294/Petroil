import React from "react";
import mailLogo from "../../assets/email.svg"
import phoneLogo from "../../assets/phone.svg"
import FBLogo from "../../assets/Vector.png"
import TwitterLogo from "../../assets/TwitterVector.png"
import LinkdinLogo from "../../assets/LinkdinVector.png"
import InstaLogo from "../../assets/InstaVector.png"
const Header = () => {
    return (
        <div id="home" className="bg-[#282828] text-white h-[51px] border-b-[5px] border-[#FFB800]">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center mt-[15px]">
                    <img src={mailLogo} alt="" />
                    <p className=" font-Pops text-xs ml-[5px] text-[12px] font-normal">abidulislam316@gmail.com</p>
                </div>
                <div className="flex items-center mt-[15px] ml-[27px]">
                    <img src={phoneLogo} alt="" />
                    <p className=" font-Pops text-xs ml-[5px] text-[12px] font-normal">+88017 75 200 200 (Toll free)</p>
                </div>
                <div className="flex justify-end items-center w-[63%] mt-[17px]">
                    <a href=""><img src={FBLogo} alt="Facebook Logo" className="cursor-pointer"/></a>
                    <a href=""><img src={TwitterLogo} alt="Twitter Logo" className="ml-[18px] cursor-pointer" /></a>
                    <a href=""><img src={LinkdinLogo} alt="LinkedIn Logo" className="ml-[18px] cursor-pointer" /></a>
                    <a href=""><img src={InstaLogo} alt="Instagram Logo" className="ml-[18px] cursor-pointer" /></a>
                </div>

            </div>
        </div>
    )
}

export default Header