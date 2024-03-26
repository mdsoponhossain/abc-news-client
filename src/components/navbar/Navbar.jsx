import './navbar.css'
import { IoSearchSharp, IoMoonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
    return (
        <section  >
            <div className='flex justify-between border border-l py-4'>
                <section className="flex items-center gap-14 bg-[#FFFFFF]  px-10">
                    <div className='font-bold md:text-2xl lg:text-5xl'>ABC <span className='text-red-600'>News</span></div>
                    <div className='hidden md:block'>
                        <ul className="flex font-semibold ">
                            <li className='ml-7 hover:text-red-600 hover:cursor-pointer'>HOME</li>
                            <li className='ml-7 feature-menu  hover:cursor-pointer'><span className='hover:text-red-600 flex items-center gap-2'>FEATURES <span><IoIosArrowDown></IoIosArrowDown></span></span>
                                {/* nested mega menu */}
                                <ul>
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
                            <li className='mobiles-menu  hover:cursor-pointer ml-7'><span className='hover:text-red-600 flex items-center gap-2'>MOBILES <span><IoIosArrowDown></IoIosArrowDown></span></span>

                                <div className='border border-1 hidden bg-white  lg:w-[900px] md:w-[500px] mobile-mega-menu '>
                                    <div className='w-[300px] p-5'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPGTM92ndJmcQr-6GyIikyG8lGY27KNhLFA&usqp=CAU" alt="" />
                                        <p className='text-justify'>To understand the new smart watched and other pro </p>
                                    </div>
                                    <div className='w-[300px] p-5'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPGTM92ndJmcQr-6GyIikyG8lGY27KNhLFA&usqp=CAU" alt="" />
                                        <p className='text-justify'>To understand the new smart watched and other pro </p>
                                    </div>
                                    <div className='w-[300px] p-5'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPGTM92ndJmcQr-6GyIikyG8lGY27KNhLFA&usqp=CAU" alt="" />
                                        <p className='text-justify'>To understand the new smart watched and other pro </p>
                                    </div>

                                </div>



                            </li>
                            <li className='ml-7 hover:text-red-600 hover:cursor-pointer'>GADGETS</li>
                            <li className='ml-7 hover:text-red-600 hover:cursor-pointer'>HOT TECH</li>
                            <li className='ml-7 hover:text-red-600 hover:cursor-pointer'>GAMING</li>
                        </ul>
                    </div>
                </section>
                {/* searching and moon icons */}
                <div className='flex items-center gap-5 text-2xl p-3'>
                    <IoMoonOutline></IoMoonOutline>
                    <div> <IoSearchSharp></IoSearchSharp></div>
                </div>
            </div>
            {/* mobile menu */}
            <div className='border border-1  gap-5 lg:w-full md:w-[95px] md:mx-auto mobile-mega-menu hidden'>
                <div className='w-[300px] p-5'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPGTM92ndJmcQr-6GyIikyG8lGY27KNhLFA&usqp=CAU" alt="" />
                    <p className='text-justify'>To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the</p>
                </div>
                <div className='w-[300px] p-5'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPGTM92ndJmcQr-6GyIikyG8lGY27KNhLFA&usqp=CAU" alt="" />
                    <p className='text-justify'>To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the</p>
                </div>
                <div className='w-[300px] p-5'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPGTM92ndJmcQr-6GyIikyG8lGY27KNhLFA&usqp=CAU" alt="" />
                    <p className='text-justify'>To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the</p>
                </div>

            </div>
        </section>
    );
};

export default Navbar;