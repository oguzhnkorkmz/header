import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderLinks from './HeaderLinks'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className='bg-white'>
            <div className='flex items-center font-medium justify-around h-16'>
                <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
                    <h1 className='cursor-pointer'>Logo</h1>
                    <div className='text-3xl md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
                        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>
                </div>
                <ul className='md:flex hidden  items-center gap-8'>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block'>
                            ANASAYFA
                        </Link>
                    </li>
                    <HeaderLinks />
                </ul>

                {/* Mobile  */}
                <ul className={
                    `md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`
                }>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block'>
                            ANASAYFA
                        </Link>
                    </li>
                    <HeaderLinks />
                </ul>
            </div>
        </nav >
    )
}

export default Header