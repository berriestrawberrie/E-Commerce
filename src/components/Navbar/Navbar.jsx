import React from 'react'
import Logo from '../../../public/images/logo.png'
import DropdownLinks from '../../data/DropdownLinks.json'
import Menu from '../../data/Menu.json'
import DarkMode from './DarkMode';
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import { IoMdSearch } from "react-icons/io";


const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        {/*UPPER NAVBAR*/}
        <div className='bg-primary/40 py-2'>
            <div className="container flex justify-between items-center">
                <div>
                    <a href="#"
                    className="font-bold text-2xl sm:text-3xl flex gap-2">
                    <img src={Logo} alt="" className="w-10"/>
                    Shoplify</a>
                </div>
                    {/*SEARCH BAR */}
                    <div className='flex justify-between items-center gap-4'>
                        <div className="group relative hidden sm:block">
                            <input type="text" placeholder='search' className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full bg-white  border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500
                            dark:bg-gray-800" />
                            <IoMdSearch 
                                className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'
                            />
                        </div>
                        {/*ORDER BUTTON */}
                        <button  onClick={() => handleOrderPopup()}
                            className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                            <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                            <FaCartShopping
                                className='text-xl text-white drop-shadow-sm cursor-pointer'
                            />
                        </button>
                          {/*DARK MODE SWITCH */}
                          <div> 
                          <DarkMode />
                          </div>
                    </div>
            </div>
        </div>
        {/*LOWER NAVBAR*/}
        <div className='flex justify-center '>
            <ul className='sm:flex hidden items-center gap-4'>
                {
                    Menu.map((data,index)=> (
                    <li key={index}>
                        <a href={data.link}
                        className='inline-block px-4 hover:text-primary duration-200 '>{data.name}</a>
                    </li>
                    ))
                }
                {/*MENU DROP DOWN AND LINKS*/}
                <li className='group relative cursor-pointer'>
                    <a href="#"
                    className='flex items-center gap-[2px] py-2'>
                    Trending Products
                    <span>
                        <FaCaretDown 
                            className='transition-all duration-200 group-hoveer:rotate-180'
                        />
                    </span>
                    </a>
                    <div className='absolute z-[999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
                        <ul>
                                {DropdownLinks.map((data)=>(
                                    <li key={data.id}>
                                        <a href={data.link} 
                                            className='inline-block w-full rounded-md p-2 hover:bg-primary/20 '>
                                            {data.name}
                                        </a>
                                    </li>
                                ))}

                        </ul>
                    </div>
                </li>

            </ul>
        </div>


    </div>
  )
}

export default Navbar