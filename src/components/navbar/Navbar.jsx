import './navbar.css'
import { IoSearchSharp, IoMoonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='pt-4'><hr></hr></li>
                        <li className='pt-5 pb-2 hover:text-red-600'>HOME</li>
                        <hr></hr>
                        <li className='pt-5 pb-2 hover:text-red-600'>MOBILES</li>
                        <hr></hr>
                        <li className='pt-5 pb-2 hover:text-red-600'>GADGETS</li>
                        <hr></hr>
                        <li className='pt-5 pb-2 hover:text-red-600'>HOT TECH</li>
                        <hr></hr>
                        <li className='pt-5 pb-5 hover:text-red-600'>GAMING</li>
                    </ul>
                </div>
                <div className='font-bold md:text-2xl lg:text-5xl'>ABC <span className='text-red-600'>News</span></div>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="flex font-semibold ">
                    <li className='lg:ml-7 md:ml-4 hover:text-red-600 hover:cursor-pointer'>HOME</li>
                    <li className='lg:ml-7 md:ml-4 feature-menu  hover:cursor-pointer'><span className='hover:text-red-600 flex items-center gap-2'>FEATURES <span><IoIosArrowDown></IoIosArrowDown></span></span>
                        {/* nested mega menu */}
                        <ul className='z-50'>
                            <li className='pt-4'><hr></hr></li>
                            <li className='pt-5 pb-2 hover:text-red-600'>Entertainment Skin</li>
                            <hr></hr>
                            <li className='pt-5 pb-2 hover:text-red-600'>Post Styles</li>
                            <hr></hr>
                            <li className='pt-5 pb-2 hover:text-red-600'>Homepage Blocks</li>
                            <hr></hr>
                            <li className='pt-5 pb-2 hover:text-red-600'>Review Posts</li>
                            <hr></hr>
                            <li className='pt-5 pb-5 hover:text-red-600'>Advertisements</li>
                        </ul>
                    </li>
                    <li className='mobiles-menu  hover:cursor-pointer lg:ml-7 md:ml-4'><span className='hover:text-red-600 flex items-center gap-2'>MOBILES <span><IoIosArrowDown></IoIosArrowDown></span></span>

                        <div className='border z-50 border-1 hidden bg-white  lg:w-[600px] md:w-[400px]  md:right-1 lg:left-0 mobile-mega-menu '>
                            <div className='lg:w-[300px] md:w-[250px] md:p-2 lg:p-5'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPGTM92ndJmcQr-6GyIikyG8lGY27KNhLFA&usqp=CAU" alt="" />
                                <p className='text-justify'>To understand the new smart watched and other pro </p>
                            </div>
                            <div className='lg:w-[300px] md:w-[250px] md:p-2 lg:p-5'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPGTM92ndJmcQr-6GyIikyG8lGY27KNhLFA&usqp=CAU" alt="" />
                                <p className='text-justify'>To understand the new smart watched and other pro </p>
                            </div>
                            <div className='lg:w-[300px] md:w-[250px] md:p-2 lg:p-5'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPGTM92ndJmcQr-6GyIikyG8lGY27KNhLFA&usqp=CAU" alt="" />
                                <p className='text-justify'>To understand the new smart watched and other pro </p>
                            </div>
                        </div>
                    </li>
                    <li className='lg:ml-7 md:ml-4 hover:text-red-600 hover:cursor-pointer'>GADGETS</li>
                    <li className='lg:ml-7 md:ml-4 hover:text-red-600 hover:cursor-pointer'>HOT TECH</li>
                    <li className='lg:ml-7 md:ml-4 hover:text-red-600 hover:cursor-pointer'>GAMING</li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex items-center gap-5 text-2xl p-3'>
                    <IoMoonOutline></IoMoonOutline>
                    <div> <IoSearchSharp></IoSearchSharp></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;