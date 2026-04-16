import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='mt-20 bg-[#244D3F] text-white pt-8'>
            <div className='text-center w-9/12 mx-auto'>
                <div className='space-y-2 mb-8'>
                    <h1 className='text-5xl font-bold'>KeenKeeper</h1>
                    <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <h1 className='text-xl'>Social Links</h1>
                    <div className='flex justify-center items-center gap-10'>
                        <div className='bg-white w-9 h-9 flex justify-center items-center rounded-full'>
                            <RiInstagramFill className='size-5 text-black' />
                        </div>
                        <div className='bg-white w-9 h-9 flex justify-center items-center rounded-full'>
                            <FaFacebook className='size-5 text-black' />
                        </div>
                        <div className='bg-white w-9 h-9 flex justify-center items-center rounded-full'>
                            <BsTwitterX className='size-5 text-black' />
                        </div>
                    </div>
                </div>

                <div className='border-t border-gray-600 flex flex-wrap justify-center lg:justify-between items-center text-gray-400 gap-1 py-2 lg:py-4'>
                    <div>
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                    </div>
                    <div className='flex text-sm lg:text-[15px] gap-3 lg:gap-10'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;