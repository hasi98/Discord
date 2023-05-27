import React from 'react'
import {DownloadIcon} from "@heroicons/react/outline"

function Hero() {
  return (
    <div className=' flex lg:-top-44 lg:justify-center md:justify-start bg-discord_blue pb-8 md:pb-0'>
      <div className=' p-7 py-9 h-screen md:h-[72vh] md:flex relative'>
        <div className=' flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center'>
            <h1 className=' flex lg:justify-center text-5xl text-white font-bold'>IMAGINE A PLACE...</h1>
            <h2 className=' flex lg:justify-center text-white text-lg tracking-wide lg:max-w-3xl w-full text-center font-semibold'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</h2>
            <div className=' flex lg:justify-center flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6'>
                <button className='heroButton hover:text-discord_blurple'>
                <DownloadIcon className=' w-6 mr-2' />
                Download for Mac</button>
                <button className='heroButton bg-gray-900 text-white w-72 hover:bg-gray-800'>Open Discrod in your browser</button>
            </div>
        </div>
        <div className='flex-grow'>
        <img src='https://svgshare.com/i/tao.svg' alt='bgimg' className=' absolute md:invisible lg:visible lg:-left-3/4 mt-16 sm:-left-44  p-0 bottom-0 h-auto'/>
        <img src='https://svgshare.com/i/ta6.svg' alt='bgimg' className=' hidden md:inline absolute p-0 bottom-0 h-auto'/>
        </div>

      </div>
    </div>
  )
}

export default Hero;
