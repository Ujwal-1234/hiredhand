import React from 'react'
import { FiX } from 'react-icons/fi'

export default function Pro() {
  return (
    <div className=' top-0 z-0 flex flex-wrap items-center justify-center fixed bg-opacity-60 min-w-full min-h-full bg-slate-700'>
      <a href='/' className='absolute z-10 right-20 hover:cursor-pointer bg-white rounded-full p-2 hover:bg-red-600 hover:text-white active:text-2xl top-5 text-4xl'><FiX /></a>
      <div className=' w-full flex flex-wrap p-5 bg-white top-20 rounded-full'>
        <div className=' w-1/2 border flex justify-center items-center '>
          <span className='font-semibold lg:text-5xl text-3xl'>UJWAL KUMAR MAHATO</span>
        </div>
        <div className=' w-1/2 border p-3'>
            <span className=' font-semibold'>Skills<br/></span>
            Web Development,
            Cloud Developer,
            Serverless Framework,
            AWS lambda
        </div>
      </div>
      <div className=' justify-center flex flex-wrap items-center max-h-96 max-w-6xl bg-white p-5 rounded-lg w-full overflow-auto scrollbar-hidden'>
        <span className=' w-full font-semibold text-left'>EXPERIENCE</span>
        <p className=' flex flex-wrap items-center justify-center min-w-full p-3 mt-2 text-white bg-slate-900 bg-'>
          <span className=' w-1/2 border inline-block text-left'>
            Experience 1(Project work title)
            <span className='block text-sm'> worked as (Role)</span>
          </span>
          <span className=' w-1/2 border inline-block text-right'>
            Details of Experience 1
            <span className='block text-sm'>Rating: 4/5</span>
          </span>
        </p>
        <p className=' min-w-full p-3 mt-2 text-white bg-slate-900 bg-'>
          <span className=' w-1/2 border inline-block text-left'>
            Experience 1
          </span>
          <span className=' w-1/2 border inline-block text-right'>
            Details of Experience 1
          </span>
        </p>
        <p className=' min-w-full p-3 mt-2 text-white bg-slate-900 bg-'>
          <span className=' w-1/2 border inline-block text-left'>
            Experience 1
          </span>
          <span className=' w-1/2 border inline-block text-right'>
            Details of Experience 1
          </span>
        </p>
        <p className=' min-w-full p-3 mt-2 text-white bg-slate-900 bg-'>
          <span className=' w-1/2 border inline-block text-left'>
            Experience 1
          </span>
          <span className=' w-1/2 border inline-block text-right'>
            Details of Experience 1
          </span>
        </p>
        <p className=' min-w-full p-3 mt-2 text-white bg-slate-900 bg-'>
          <span className=' w-1/2 border inline-block text-left'>
            Experience 1
          </span>
          <span className=' w-1/2 border inline-block text-right'>
            Details of Experience 1
          </span>
        </p>
        <p className=' min-w-full p-3 mt-2 text-white bg-slate-900 bg-'>
          <span className=' w-1/2 border inline-block text-left'>
            Experience 1
          </span>
          <span className=' w-1/2 border inline-block text-right'>
            Details of Experience 1
          </span>
        </p>
        <p className=' min-w-full p-3 mt-2 text-white bg-slate-900 bg-'>
          <span className=' w-1/2 border inline-block text-left'>
            Experience 1
          </span>
          <span className=' w-1/2 border inline-block text-right'>
            Details of Experience 1
          </span>
        </p>
        <p className=' min-w-full p-3 mt-2 text-white bg-slate-900 bg-'>
          <span className=' w-1/2 border inline-block text-left'>
            Experience 1
          </span>
          <span className=' w-1/2 border inline-block text-right'>
            Details of Experience 1
          </span>
        </p>
      </div>
    </div>
  )
}
