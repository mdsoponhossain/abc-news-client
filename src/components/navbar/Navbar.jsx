import './navbar.css'
import { IoSearchSharp, IoMoonOutline } from "react-icons/io5";
const Navbar = () => {
    return (
        <section  >
            <div className='flex justify-between border border-l py-5'>
                <section className="flex items-center gap-14 bg-[#FFFFFF]  px-10">
                    <div className='font-bold text-5xl'>ABC <span className='text-red-600'>News</span></div>
                    <div>
                        <ul className="flex font-semibold ">
                            <li className='ml-7 hover:text-red-600 hover:cursor-pointer'>HOME</li>
                            <li className='ml-7 hover:text-red-600 hover:cursor-pointer'>FEATURES</li>
                            <li className='ml-7 hover:text-red-600 hover:cursor-pointer'>MOBILES</li>
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
        </section>
    );
};

export default Navbar;