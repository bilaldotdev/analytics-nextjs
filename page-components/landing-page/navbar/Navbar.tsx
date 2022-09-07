import { ActiveLink } from 'components';
import Image from 'next/image';
import React from 'react';

/* <<--------------------------------------------------------->> */
const NAV_LINKS = [
  { label: 'Company', path: '#' },
  { label: 'Marketplace', path: '#' },
  { label: 'Features', path: '#' },
  { label: 'Team', path: '#' },
  { label: 'Contact', path: '#' },
];
/* <<--------------------------------------------------------->> */
const Navbar = () => {
  /* <<--------------------------------------------------------->> */
  return (
    <nav>
      <div className='px-[80px] py-[24px] flex items-center'>
        <div id='logo' className='flex items-center cursor-pointer'>
          <Image
            priority
            src='/logo.svg'
            height='32.62px'
            width='29.76px'
            alt='logo'
          />
          <p className='text-[#111928] font-semibold text-[24px] leading-[150%] ml-[12px]'>
            Landwind
          </p>
        </div>
        <div id='nav-links' className='ml-[32px]'>
          <ul className='flex gap-[32px] items-center'>
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <ActiveLink href='#' activeClassName='text-purple400'>
                  <a className='font-medium text-[16px] text-[#111928] leading-[150%]'>
                    {item.label}
                  </a>
                </ActiveLink>
              </li>
            ))}
          </ul>
        </div>
        <div id='login-or-signup' className='ml-auto flex items-center'>
          <p className='font-medium text-[14px] leading-[150%] text-[#111928]'>
            Log In
          </p>
          <button
            className='transition ml-[16px] bg-[#7E3AF2] text-white 
            py-[8px] px-[12px] outline-none
          hover:bg-[#1E429F] 
          focus:bg-[#1C64F2] focus:outline-[2px] rounded-[8px] text-center focus:outline-[#A4CAFE]
          '
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
