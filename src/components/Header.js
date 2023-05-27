import React from 'react'
import {MenuIcon} from "@heroicons/react/outline"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase"
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

function Header() {
  const [user] = useAuthState(auth);


  return (
    <header className='flex items-center justify-between py-4 px-6 bg-discord_blue'>
      <a href='/'>
        <img src='https://svgshare.com/i/tbf.svg' alt='' className='w=32 h-12 object-contain'/>
      </a>
      <div className='hidden lg:flex space-x-10 text-white'>
        <a className='link'>Download</a>
        <a className='link'>Nitro</a>
        <a className='link'>Discover</a>
        <a className='link'>Safety</a>
        <a className='link'>Support</a>
        <a className='link'>blog</a>
        <a className='link'>Careers</a>
      </div>
      <div className='flex space-x-4'>
      <button className='bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple
      transition duration-200 ease-in-out whitespace-nowrap font-medium'>Login</button>
      <MenuIcon className='h-9 text-white cursor-pointer lg:hidden'/>

      </div>
    </header>
  )
}

export default Header;
