/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

function ComingSoon() {
  return (
    <main className='h-screen flex flex-col justify-center items-center bg-white p-10'>
      <img 
        src="https://cdn.dribbble.com/userupload/12609824/file/original-0ebf1e6c9a64bfe1510cf8d72de99185.gif" 
        alt="Animated GIF" 
        className="mb-10 rounded-lg mt-40" 
        width="600"
        loading="lazy"  // Added loading="lazy" attribute
      />
      <h1 className='text-black text-6xl mb-6'>Coming Soon!</h1>
      <div className="text-center text-black h-40 mb-40">
        <p className='text-3xl mb-4'>Exciting things are in the works!</p>
        <p className='text-3xl mb-4'>We're crafting something truly special for you.</p>
        <p className='text-3xl mb-4'>Good things take time, and this will be worth the wait.</p>
        <p className='text-3xl mb-10'>Stay tuned for updates.</p>
        
      </div>
      <div className='h-40'></div>
    </main>
  );
}

export default ComingSoon;
