import React from 'react'
import { FiUsers } from "react-icons/fi";
import { BsViewStacked } from "react-icons/bs";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';


export default function Feed() {
  return (
    <div className=' min-w-full flex justify-center'>
      <div className=' max-h-screen bg-red-300 scrollbar-hidden bg-opacity-20 overflow-auto w-1/2'>
        <p className=' relative w-full bg-red-500 mt-2 mb-2 p-5 rounded-lg text-slate-900 bg-opacity-20'>
            <a className=' w-20 h-20 block rounded-full ml-5 text-white bg-black'>ICON post by</a>
            <p className=' lg:absolute h-24 top-5 w-64 text-left border-white left-32'>
                <a className='font-bold block'>Work title / project Title</a>
                <span className=' text-xs block'>Industry category IT/Design/ComputerScience</span>
                <span className=' text-xs block'>skills required - programming/WEB/ML/AI/database</span>
                <span className=' text-xs inline'><FiUsers className='inline' />12</span>
            </p> 
            <p className=' lg:absolute top-5 right-32 text-left overflow-auto scrollbar-hidden max-h-24 w-64'>
                <span className='font-bold'>posted by</span>
                <span className=' text-xs block text-slate-600'>
                    Description data is a long text explaining the data of data here
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </p>
            <p className='lg:absolute text-2xl hover:cursor-pointer hover:text-3xl top-12 right-5'>
                <BsViewStacked data-tooltip-id='viewall' data-tooltip-content='View Details'/>
            </p>
        </p>
        <p className=' relative w-full bg-red-500 mt-2 mb-2 p-5 rounded-lg text-slate-900 bg-opacity-20'>
            <a className=' w-20 h-20 block rounded-full ml-5 text-white bg-black'>ICON post by</a>
            <p className=' lg:absolute h-24 top-5 w-64 text-left border-white left-32'>
                <a className='font-bold block'>Work title / project Title</a>
                <span className=' text-xs block'>Industry category IT/Design/ComputerScience</span>
                <span className=' text-xs block'>skills required - programming/WEB/ML/AI/database</span>
                <span className=' text-xs inline'><FiUsers className='inline' />12</span>
            </p> 
            <p className=' lg:absolute top-5 right-32 text-left overflow-auto scrollbar-hidden max-h-24 w-64'>
                <span className='font-bold'>posted by</span>
                <span className=' text-xs block text-slate-600'>
                    Description data is a long text explaining the data of data here
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </p>
            <p className='lg:absolute text-2xl hover:cursor-pointer hover:text-3xl top-12 right-5'>
                <BsViewStacked data-tooltip-id='viewall' data-tooltip-content='View Details'/>
            </p>
        </p>
        <p className=' relative w-full bg-red-500 mt-2 mb-2 p-5 rounded-lg text-slate-900 bg-opacity-20'>
            <a className=' w-20 h-20 block rounded-full ml-5 text-white bg-black'>ICON post by</a>
            <p className=' lg:absolute h-24 top-5 w-64 text-left border-white left-32'>
                <a className='font-bold block'>Work title / project Title</a>
                <span className=' text-xs block'>Industry category IT/Design/ComputerScience</span>
                <span className=' text-xs block'>skills required - programming/WEB/ML/AI/database</span>
                <span className=' text-xs inline'><FiUsers className='inline' />12</span>
            </p> 
            <p className=' lg:absolute top-5 right-32 text-left overflow-auto scrollbar-hidden max-h-24 w-64'>
                <span className='font-bold'>posted by</span>
                <span className=' text-xs block text-slate-600'>
                    Description data is a long text explaining the data of data here
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </p>
            <p className='lg:absolute text-2xl hover:cursor-pointer hover:text-3xl top-12 right-5'>
                <BsViewStacked data-tooltip-id='viewall' data-tooltip-content='View Details'/>
            </p>
        </p>
        <p className=' relative w-full bg-red-500 mt-2 mb-2 p-5 rounded-lg text-slate-900 bg-opacity-20'>
            <a className=' w-20 h-20 block rounded-full ml-5 text-white bg-black'>ICON post by</a>
            <p className=' lg:absolute h-24 top-5 w-64 text-left border-white left-32'>
                <a className='font-bold block'>Work title / project Title</a>
                <span className=' text-xs block'>Industry category IT/Design/ComputerScience</span>
                <span className=' text-xs block'>skills required - programming/WEB/ML/AI/database</span>
                <span className=' text-xs inline'><FiUsers className='inline' />12</span>
            </p> 
            <p className=' lg:absolute top-5 right-32 text-left overflow-auto scrollbar-hidden max-h-24 w-64'>
                <span className='font-bold'>posted by</span>
                <span className=' text-xs block text-slate-600'>
                    Description data is a long text explaining the data of data here
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </p>
            <p className='lg:absolute text-2xl hover:cursor-pointer hover:text-3xl top-12 right-5'>
                <BsViewStacked data-tooltip-id='viewall' data-tooltip-content='View Details'/>
            </p>
        </p>
        <p className=' relative w-full bg-red-500 mt-2 mb-2 p-5 rounded-lg text-slate-900 bg-opacity-20'>
            <a className=' w-20 h-20 block rounded-full ml-5 text-white bg-black'>ICON post by</a>
            <p className=' lg:absolute h-24 top-5 w-64 text-left border-white left-32'>
                <a className='font-bold block'>Work title / project Title</a>
                <span className=' text-xs block'>Industry category IT/Design/ComputerScience</span>
                <span className=' text-xs block'>skills required - programming/WEB/ML/AI/database</span>
                <span className=' text-xs inline'><FiUsers className='inline' />12</span>
            </p> 
            <p className=' lg:absolute top-5 right-32 text-left overflow-auto scrollbar-hidden max-h-24 w-64'>
                <span className='font-bold'>posted by</span>
                <span className=' text-xs block text-slate-600'>
                    Description data is a long text explaining the data of data here
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </p>
            <p className='lg:absolute text-2xl hover:cursor-pointer hover:text-3xl top-12 right-5'>
                <BsViewStacked data-tooltip-id='viewall' data-tooltip-content='View Details'/>
            </p>
        </p>
        <p className=' relative w-full bg-red-500 mt-2 mb-2 p-5 rounded-lg text-slate-900 bg-opacity-20'>
            <a className=' w-20 h-20 block rounded-full ml-5 text-white bg-black'>ICON post by</a>
            <p className=' lg:absolute h-24 top-5 w-64 text-left border-white left-32'>
                <a className='font-bold block'>Work title / project Title</a>
                <span className=' text-xs block'>Industry category IT/Design/ComputerScience</span>
                <span className=' text-xs block'>skills required - programming/WEB/ML/AI/database</span>
                <span className=' text-xs inline'><FiUsers className='inline' />12</span>
            </p> 
            <p className=' lg:absolute top-5 right-32 text-left overflow-auto scrollbar-hidden max-h-24 w-64'>
                <span className='font-bold'>posted by</span>
                <span className=' text-xs block text-slate-600'>
                    Description data is a long text explaining the data of data here
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </p>
            <p className='lg:absolute text-2xl hover:cursor-pointer hover:text-3xl top-12 right-5'>
                <BsViewStacked data-tooltip-id='viewall' data-tooltip-content='View Details'/>
            </p>
        </p>
        <p className=' relative w-full bg-red-500 mt-2 mb-2 p-5 rounded-lg text-slate-900 bg-opacity-20'>
            <a className=' w-20 h-20 block rounded-full ml-5 text-white bg-black'>ICON post by</a>
            <p className=' lg:absolute h-24 top-5 w-64 text-left border-white left-32'>
                <a className='font-bold block'>Work title / project Title</a>
                <span className=' text-xs block'>Industry category IT/Design/ComputerScience</span>
                <span className=' text-xs block'>skills required - programming/WEB/ML/AI/database</span>
                <span className=' text-xs inline'><FiUsers className='inline' />12</span>
            </p> 
            <p className=' lg:absolute top-5 right-32 text-left overflow-auto scrollbar-hidden max-h-24 w-64'>
                <span className='font-bold'>posted by</span>
                <span className=' text-xs block text-slate-600'>
                    Description data is a long text explaining the data of data here
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </p>
            <p className='lg:absolute text-2xl hover:cursor-pointer hover:text-3xl top-12 right-5'>
                <BsViewStacked data-tooltip-id='viewall' data-tooltip-content='View Details'/>
            </p>
        </p>
        <p className=' relative w-full bg-red-500 mt-2 mb-2 p-5 rounded-lg text-slate-900 bg-opacity-20'>
            <a className=' w-20 h-20 block rounded-full ml-5 text-white bg-black'>ICON post by</a>
            <p className=' lg:absolute h-24 top-5 w-64 text-left border-white left-32'>
                <a className='font-bold block'>Work title / project Title</a>
                <span className=' text-xs block'>Industry category IT/Design/ComputerScience</span>
                <span className=' text-xs block'>skills required - programming/WEB/ML/AI/database</span>
                <span className=' text-xs inline'><FiUsers className='inline' />12</span>
            </p> 
            <p className=' lg:absolute top-5 right-32 text-left overflow-auto scrollbar-hidden max-h-24 w-64'>
                <span className='font-bold'>posted by</span>
                <span className=' text-xs block text-slate-600'>
                    Description data is a long text explaining the data of data here
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </p>
            <p className='lg:absolute text-2xl hover:cursor-pointer hover:text-3xl top-12 right-5'>
                <BsViewStacked data-tooltip-id='viewall' data-tooltip-content='View Details'/>
            </p>
        </p>
        <p className=' relative w-full bg-red-500 mt-2 mb-2 p-5 rounded-lg text-slate-900 bg-opacity-20'>
            <a className=' w-20 h-20 block rounded-full ml-5 text-white bg-black'>ICON post by</a>
            <p className=' lg:absolute h-24 top-5 w-64 text-left border-white left-32'>
                <a className='font-bold block'>Work title / project Title</a>
                <span className=' text-xs block'>Industry category IT/Design/ComputerScience</span>
                <span className=' text-xs block'>skills required - programming/WEB/ML/AI/database</span>
                <span className=' text-xs inline'><FiUsers className='inline' />12</span>
            </p> 
            <p className=' lg:absolute top-5 right-32 text-left overflow-auto scrollbar-hidden max-h-24 w-64'>
                <span className='font-bold'>posted by</span>
                <span className=' text-xs block text-slate-600'>
                    Description data is a long text explaining the data of data here
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </p>
            <p className='lg:absolute text-2xl hover:cursor-pointer hover:text-3xl top-12 right-5'>
                <BsViewStacked data-tooltip-id='viewall' data-tooltip-content='View Details'/>
            </p>
        </p>
                
      </div>
      <Tooltip id="viewall" className='text-xs' />

    </div>
  )
}
