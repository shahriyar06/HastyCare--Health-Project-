import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { MdOutlineCopyright, MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import HC_logo from '../../public/All Image/HastyCare logo 2.png'


const Footer = () => {
    return (
        <div className="bg-[#26292c]">
            <div className="w-11/12 mx-auto p-6">
                <div className="mt-10 lg:grid lg:grid-cols-12 gap-9">
                    {/* Logo and information */}
                    <div className="mb-8 lg:col-span-3">
                        {/* <h1 className="text-[#FFFFFF] text-4xl font-bold mb-10">HastyCare</h1> */}
                        <div className="flex justify-center lg:justify-normal">
                            <img src={HC_logo} alt="" className="mb-3 h-36" />
                        </div>
                        <p className="text-[#a9a9a9] text-lg lg:text-xl lg:w-3/4 text-center">HastyCare combines innovation and healthcare to provide an advanced platform for modern medical needs.</p>
                    </div>
                    {/* Support part */}
                    <div className="mb-8 lg:col-span-2">
                        <h1 className="text-[#b19777] text-lg text-center lg:text-left uppercase">Support </h1>
                        <hr className="border-[#888] mt-3 mb-5" />
                        <div className="flex items-center gap-1 text-lg">
                            <Link className="text-[#888] hover:text-[#b19777]">About Us</Link>
                        </div>
                        <div className="flex items-center gap-2 my-5">
                            <Link className="text-[#888] text-lg hover:text-[#b19777]">Help Center</Link>
                        </div>
                        <div className="flex items-center gap-2 text-lg">
                            <Link className="text-[#888] hover:text-[#b19777]">News</Link>
                        </div>
                        <div className="flex items-center gap-2 text-lg mt-5">
                            <Link className="text-[#888] hover:text-[#b19777] uppercase">faq</Link>
                        </div>
                        <div className="flex items-center gap-2 text-lg mt-5">
                            <Link className="text-[#888] hover:text-[#b19777]">Security</Link>
                        </div>
                    </div>
                    {/* Contact Info */}
                    <div className="mb-8 lg:col-span-3">
                        <h1 className="text-[#b19777] text-lg text-center lg:text-left">CONTACT US </h1>
                        <hr className="border-[#888] mt-3 mb-5" />
                        <div className="flex items-center gap-1 text-lg">
                            <FaPhoneAlt className="text-[#b19777] text-xl"></FaPhoneAlt>
                            <h2 className="text-[#888] items-center flex"><GoPlus></GoPlus>880 1314-551059</h2>
                        </div>
                        <div className="flex items-center gap-2 my-5">
                            <FaPhoneAlt className="text-[#b19777] text-xl"></FaPhoneAlt>
                            <h2 className="text-[#888] items-center flex text-xl"><GoPlus></GoPlus>880 1534-603068</h2>
                        </div>
                        <div className="flex items-center gap-2 text-lg">
                            <MdOutlineMailOutline className="text-[#b19777] text-2xl"></MdOutlineMailOutline>
                            <h2 className="text-[#888] items-center flex">shahriyar92.some@gmail.com</h2>
                        </div>
                        <div className="flex items-center gap-2 text-lg mt-5">
                            <MdOutlineMailOutline className="text-[#b19777] text-2xl"></MdOutlineMailOutline>
                            <h2 className="text-[#888] items-center flex">dreamshack63140@gmail.com</h2>
                        </div>
                    </div>
                    {/* Location */}
                    <div className="mb-8 lg:col-span-2">
                        <h1 className="text-[#b19777] text-lg text-center lg:text-left">VISIT</h1>
                        <hr className="border-[#888] mt-3 mb-5" />
                        <p className="text-[#888] text-lg">West Khaiyachara,</p>
                        <p className="text-[#888] text-lg my-5">Mirsarai,</p><p className="text-[#888] text-lg">Chittagong,</p><p className="text-[#888] text-lg mt-5">Bangladesh .</p>
                    </div>
                    {/* Social Link */}
                    <div className="lg:col-span-2">
                        <h1 className="text-[#b19777] text-lg text-center lg:text-left">FOLLOW US</h1>
                        <hr className="border-[#888] mt-3 mb-5" />
                        <div className="flex gap-3 justify-center">
                            <div className="border-[#888] border-2 rounded-full p-3 w-11">
                                <Link to='https://www.facebook.com/'><FaFacebookF className="text-[#FFFFFF] hover:text-[#b19777]"></FaFacebookF></Link>
                            </div>
                            <div className="border-[#888] border-2 rounded-full p-3 w-11">
                                <Link to='https://www.instagram.com/'><FaInstagram className="text-[#FFFFFF] hover:text-[#b19777]"></FaInstagram></Link>
                            </div>
                            <div className="border-[#888] border-2 rounded-full p-3 w-11">
                                <Link to='https://bd.linkedin.com/'><FaLinkedinIn className="text-[#FFFFFF] hover:text-[#b19777]"></FaLinkedinIn></Link>
                            </div>
                            <div className="border-[#888] border-2 rounded-full p-3 w-11">
                                <Link to='https://x.com/?lang=en'><FaTwitter className="text-[#FFFFFF] hover:text-[#b19777]"></FaTwitter></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copy Rights */}
            <div>
                <div>
                    <hr className="border-[#888]" />
                    <div className="lg:flex justify-center gap-1 p-6">
                        <p className="flex items-center gap-1 text-[#bece88a9] justify-center">Copyright <MdOutlineCopyright></MdOutlineCopyright> 2024 HastyCare.</p>
                        <p className="text-[#bece88a9] text-center">All Rights Reserved. Made by MD Shahriyar Hossain Chowdhury.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;