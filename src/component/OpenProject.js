import React, { useState } from 'react'
import { FiUsers, FiHome, FiX } from 'react-icons/fi'

export default function OpenProject() {
    const [comm, setComm]=useState(true)
  return (
    <div className='bg-black absolute lg:flex items-center justify-center min-h-screen max-h-screen w-full top-0 bg-opacity-40'>
        <div className='fixed z-50 lg:hidden bottom-0 border bordre-white bg-black right-0 mb-2 mr-2 rounded-full active:text-2xl text-white flex justify-center items-center text-3xl'>
            <a href='/'><FiHome className=' m-5'/></a></div>
            <a href='/' className='absolute z-10 right-20 hover:cursor-pointer bg-white rounded-full p-2 hover:bg-red-600 hover:text-white active:text-2xl top-5 text-4xl'><FiX /></a>
        <div className='bg-white border lg:w-1/4 h-1/2 p-20'>
            <div className='bg-slate-700 bg-opacity-20 p-5 rounded text-left flex justify-between items-center'>
                <span className='font-bold text-2xl'>POST Title</span>
                <a className=' w-20 h-20 block rounded-full lg:ml-5 text-white bg-black'>ICON post by</a>
            </div>
            <p className=' text-justify'>
                <a className='font-bold block'>Work title / project Title</a>
                <span className=' text-xs block'>Industry category IT/Design/ComputerScience</span>
                <span className=' text-xs block'>skills required - programming/WEB/ML/AI/database</span>
                <span className=' text-xs inline'><FiUsers className='inline' />12</span>
            </p>
            <p className=' text-justify'>
                <span className='font-bold'>posted by 1st person</span>
                <span className=' max-h-96 overflow-auto scrollbar-hidden text-xs block text-slate-600'>
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Description data is a long text explaining the data of data here
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </p>
            <p className='flex mt-5 justify-center items-center '>
              <a className=' border hover:cursor-pointer hover:bg-slate-700 hover:text-white border-slate-700 rounded-2xl p-2 pl-9 pr-9'>Project Data</a>
              {/* <a href='/' className=' border ml-5 hover:bg-red-700 hover:text-white border-red-700 rounded-2xl p-2 pl-9 pr-9' >Ignore</a> */}
            </p>
        </div>
        <div className='bg-white border lg:w-1/4 h-1/2 p-20'>
            <p className='text-left'>
                <span className='ml-4 hover:cursor-pointer' onClick={()=>{setComm(true)}}>Community</span>
                <span className='ml-4 hover:cursor-pointer' onClick={()=>{setComm(false)}}>Requests</span>
            </p>
            
            {
                comm?<><p className='border overflow-auto max-h-96 p-5'>
                <a className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>User 1</a>
                                <a className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>User 1</a> 
                                                <a className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>User 1</a>  
                <a className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>User 1</a>
                                <a className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>User 1</a> 
                                                <a className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>User 1</a>  
                <a className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>User 1</a>
                                <a className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>User 1</a> 
                                                <a className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>User 1</a>  
                <a className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>User 1</a>
                                <a className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>User 1</a> 
                                                <a className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>User 1</a>  
                <a className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>User 1</a>
                                <a className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>User 1</a> 
                                                <a className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>User 1</a>  
            </p></>:
            <>
            <div className='border overflow-auto max-h-96 p-5'>
                
                <p className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>
                    <a href='/project/pro' className='hover:cursor-pointer text-left w-1/2 inline-block'>User 1</a>
                    <a className='text-right w-1/2 inline-block'>
                        <span className='bg-green-600 ml-1 rounded-md p-1 text-white hover:cursor-pointer'>Accept</span>
                        <span className='bg-red-600 ml-1 rounded-md p-1 text-white hover:cursor-pointer'>Reject</span>
                    </a>
                </p>
                <p className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>
                    <a href='/project/pro' className='hover:cursor-pointer text-left w-1/2 inline-block'>User 1</a>
                    <a className='text-right w-1/2 inline-block'>
                        <span className='bg-green-600 ml-1 rounded-md p-1 text-white hover:cursor-pointer'>Accept</span>
                        <span className='bg-red-600 ml-1 rounded-md p-1 text-white hover:cursor-pointer'>Reject</span>
                    </a>
                </p>
                <p className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>
                    <a href='/project/pro' className='hover:cursor-pointer text-left w-1/2 inline-block'>User 1</a>
                    <a className='text-right w-1/2 inline-block'>
                        <span className='bg-green-600 ml-1 rounded-md p-1 text-white hover:cursor-pointer'>Accept</span>
                        <span className='bg-red-600 ml-1 rounded-md p-1 text-white hover:cursor-pointer'>Reject</span>
                    </a>
                </p>
                <p className=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>
                    <a href='/project/pro' className='hover:cursor-pointer text-left w-1/2 inline-block'>User 1</a>
                    <a className='text-right w-1/2 inline-block'>
                        <span className='bg-green-600 ml-1 rounded-md p-1 text-white hover:cursor-pointer'>Accept</span>
                        <span className='bg-red-600 ml-1 rounded-md p-1 text-white hover:cursor-pointer'>Reject</span>
                    </a>
                </p>
                                
            </div>
            </>
            }
            
        </div>
    </div>
        
  )
}
