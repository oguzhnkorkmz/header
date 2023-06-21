import React, { useState } from 'react';
import Links from './Links'
import { BsChevronCompactDown } from 'react-icons/bs';

const HeaderLinks = () => {
    const [heading, setHeading] = useState('')
    const [subHeading, setSubHeading] = useState('')
    return (
        <>
            {Links.map((link, index) => (
                <div key={index}>
                    <div className='px-3 text-left cursor-pointer group'>
                        <h1 className='py-7 flex justify-between items-center md:pr-0 pr-5'
                            onClick={() => { heading !== link.name ? setHeading(link.name) : setHeading(''); setSubHeading('') }}
                        >{link.name}
                            <span className='text-xl md:hidden inline'>
                                {link.sublinks && <BsChevronCompactDown />}
                            </span>
                        </h1>
                        {link.submenu && (
                            <div>
                                <div className='absolute top-14 hidden group-hover:md:block hover:md:block'>
                                    <div className='py-3'>
                                        <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
                                    </div>
                                    <div className='bg-white p-3.5'>
                                        {link.sublinks.map((slinks, index) => (
                                            <div key={index}>
                                                <h1 className='text-lg font-semibold'>{slinks.head}</h1>
                                                {slinks.sublink && slinks.sublink.map((slink, index) => (
                                                    <li className='text-sm text-gray-600 my-2.5' key={index}>
                                                        <a>
                                                            {slink.sublinkname}
                                                        </a>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile */}
                    <div className={`
                    ${heading === link.name ? 'md:hidden' : 'hidden'}
                    `}>
                        {link.sublinks && link.sublinks.map((slinks, index) => (
                            <div key={index}>
                                <div>
                                    <h1 onClick={() => subHeading !== slinks.head ? setSubHeading(slinks.head) : setSubHeading('')} className='py-4 pl-7 font-semibold md:pr-0 pr-5 cursor-pointer flex justify-between items-center'>{slinks.head}
                                        <span className='text-xl md:mt-1 md:ml-2 inline'>
                                            {slinks.sublink && <BsChevronCompactDown />}
                                        </span>
                                    </h1>
                                    <div className={`
                                    ${subHeading === slinks.head ? 'md:hidden' : 'hidden'}
                                    `}>
                                        {slinks.sublink && slinks.sublink.map((slink, index) => (
                                            <li className='py-3 pl-14 cursor-pointer' key={index}>
                                                <a>{slink.sublinkname}</a>
                                            </li>

                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            ))}
        </>
    );
};

export default HeaderLinks;
