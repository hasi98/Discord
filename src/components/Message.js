import React from 'react'
import moment from 'moment/moment';

function Message({id, message, timestamp, name, email, photoUrl}) {
  return (
    <div className='flex items-center p-1 pl-5 my5 mr-2 hover:bg-[#32353b] group'>
      <img src={photoUrl} alt='' className='h-10 rounded-full cursor-pointer mr-3 
      hover:shadow-2xl'/>
      <div className='flex flex-col '>
        <h4 className='flex items-center space-x-2 font-medium'>
            <span className='hover:underline text-[#dddfe0] text-sm cursor-pointer'>{name}</span>
            <span className='text-[#72767d] text-[11px]'>{moment(timestamp?.toDate().getTime()).format("l")}</span>
            <span className='text-[#72767d] text-[11px]'>{moment(timestamp?.toDate().getTime()).format("LT")}</span>
        </h4>
        <p className='text-sm text-[#babcbd] mt-1 mb-2'>{message}</p>
      </div>
    </div>
  )
}

export default Message;
