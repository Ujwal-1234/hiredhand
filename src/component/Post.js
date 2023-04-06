import React from 'react'
import { FiUsers } from "react-icons/fi";
// import setopenPost from "../App"


export default function Post() {
  const _closepost = ()=>{
    window.location.reload(false)
  }
  return (
    <div className='bg-black fixed lg:flex items-center justify-center min-h-screen max-h-screen w-full top-0 bg-opacity-40'>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </p>
            <p className='flex mt-5 justify-between '>
              <button className=' border hover:bg-slate-700 hover:text-white border-slate-700 rounded-2xl p-2 pl-9 pr-9'>Join</button>
              <button className=' border hover:bg-red-700 hover:text-white border-red-700 rounded-2xl p-2 pl-9 pr-9' onClick={_closepost}>Ignore</button>
            </p>
        </div>
    </div>
  )
}
