import React from 'react'
import { BsFillArrowRightSquareFill } from "react-icons/bs";
export default function Message() {
  return (
    <div className='absolute flex right-0 bg-red-500 w-auto min-h-screen top-0'>
      <div className='bg-white bg-opacity-40 p-2 h-96 ml-2 mt-2 rounded-lg w-96 overflow-auto scrollbar-hidden max-h-96'> 
        <p className=' my-2 text-left p-2 rounded-lg'><a className='bg-white p-2 rounded-l-2xl'>Incoming message</a></p>
        <p className=' my-2 text-right p-2 rounded-lg'><a className='bg-white p-2 rounded-r-2xl'>Outgoing message</a></p>
      </div>
      <div className=' flex fixed mt-96 pt-5 w-80 ml-8 h-16'>
        <input type={"text"} placeholder='Type Your Message' className="w-full text-center rounded-xl border-b-2 border-black h-16" />
        <button className='text-4xl hover:text-5xl ml-4 mt-3'><BsFillArrowRightSquareFill /></button>
      </div>
      <div className='max-h-screen p-5 overflow-auto scrollbar-hidden'>
        <p className='w-auto'>
          <a className=' hover:cursor-pointer block rounded-full my-5 font-bold bg-opacity-60 w-16 h-16 bg-white'>
            <img src='#' alt='loading' />
          </a>
          <a className=' hover:cursor-pointer block rounded-full my-5 font-bold bg-opacity-60 w-16 h-16 bg-white'>
            <img src='#' alt='loading' />
          </a>
          <a className=' hover:cursor-pointer block rounded-full my-5 font-bold bg-opacity-60 w-16 h-16 bg-white'>
            <img src='#' alt='loading' />
          </a>
          <a className=' hover:cursor-pointer block rounded-full my-5 font-bold bg-opacity-60 w-16 h-16 bg-white'>
            <img src='#' alt='loading' />
          </a>
          <a className=' hover:cursor-pointer block rounded-full my-5 font-bold bg-opacity-60 w-16 h-16 bg-white'>
            <img src='#' alt='loading' />
          </a>
          <a className=' hover:cursor-pointer block rounded-full my-5 font-bold bg-opacity-60 w-16 h-16 bg-white'>
            <img src='#' alt='loading' />
          </a>
          <a className=' hover:cursor-pointer block rounded-full my-5 font-bold bg-opacity-60 w-16 h-16 bg-white'>
            <img src='#' alt='loading' />
          </a>
          <a className=' hover:cursor-pointer block rounded-full my-5 font-bold bg-opacity-60 w-16 h-16 bg-white'>
            <img src='#' alt='loading' />
          </a>
          <a className=' hover:cursor-pointer block rounded-full my-5 font-bold bg-opacity-60 w-16 h-16 bg-white'>
            <img src='#' alt='loading' />
          </a>
          <a className=' hover:cursor-pointer block rounded-full my-5 font-bold bg-opacity-60 w-16 h-16 bg-white'>
            <img src='#' alt='loading' />
          </a>
          <a className=' hover:cursor-pointer block rounded-full my-5 font-bold bg-opacity-60 w-16 h-16 bg-white'>
            <img src='#' alt='loading' />
          </a>          
        </p>
      </div>
    </div>
  )
}
