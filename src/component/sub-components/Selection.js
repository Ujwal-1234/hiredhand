import React from 'react'
import { FiCheck, FiX } from 'react-icons/fi';

export default function Selection() {
  return (
    <div className=' absolute w-full flex justify-center items-cener  bottom-0'>
        <p className='lg:p-2 lg:w-1/2 z-10 flex flex-wrap items-center justify-center'>
            <a className=' bg-white hover:bg-green-500 hover:cursor-pointer p-3 text-4xl'><FiCheck className='inline-block'/> Accept </a>
            <a className=' bg-white hover:bg-red-500 hover:cursor-pointer p-3 text-4xl'><FiX className='inline-block'/> Reject </a>
        </p>
    </div>
  )
}
