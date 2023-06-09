import React from 'react';
import { HashtagIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setChannelInfo } from '../features/channalSlice';

function Channel({ id, channelName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Changed to useNavigate

  const setChannel = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    );

    navigate(`/channels/${id}`); // Use navigate instead of history.push
  };

  return (
    <div
      className='font-medium flex items-center cursor-pointer hover:bg-[#3a3c43]
      p-1 rounded-md hover:text-white'
      onClick={setChannel}
    >
      <HashtagIcon className='h-5 mr-2' /> {channelName}
    </div>
  );
}

export default Channel;
