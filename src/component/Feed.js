import {React, useEffect, useState} from 'react'
import { FiUsers } from "react-icons/fi";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import Post from './Post';



export default function Feed() {
  const [openPost, setopenPost] = useState(false)
  let [data, setData] = useState(false)
  

  useEffect(()=>{
    setInterval(() => {
        let url = 'http://localhost/hiredhand/server/get_data.php'
        console.log(url)
        fetch(url).then((response) => response.json()).then((actualData) => {
            // console.log(actualData)
            // console.log(actualData.data)
            if(actualData.result =='success')
            {
                setData(true)
                // sessionStorage.setItem('received_data_hiredhand', JSON.parse(actualData.data))\
                console.log(actualData.data)
                console.log(JSON.parse(actualData.data))
            }
            console.log(sessionStorage.getItem('received_data_hirehand'))
        }).catch((err) => {console.log(err.message);});
    }, 1000);
    
  })

  return (
   <>
   {
        data?
    <>
        <div className=' min-w-full lg:flex justify-center'>
            <div className=' lg:max-h-screen bg-red-300 scrollbar-hidden bg-opacity-20 overflow-auto w-full lg:w-1/2'>
                <div onClick={()=>{setopenPost(true)}} className=' hover:cursor-pointer relative w-full flex flex-wrap bg-red-500 mt-2 mb-2 p-5 rounded-lg text-slate-900 bg-opacity-20'>
                    <a className=' w-20 h-20 block rounded-full lg:ml-5 text-white bg-black'>ICON post by</a>
                    <p className=' lg:absolute h-24 top-5 w-64 text-left border-white left-32'>
                        <a className='font-bold block'>Work title / project Title</a>
                        <span className=' text-xs block'>Industry category IT/Design/ComputerScience</span>
                        <span className=' text-xs block'>skills required - programming/WEB/ML/AI/database</span>
                        <span className=' text-xs inline'><FiUsers className='inline' />12</span>
                    </p> 
                    <p className=' lg:absolute top-5 right-32 text-left overflow-auto scrollbar-hidden max-h-24 w-64'>
                        <span className='font-bold'>posted by 1st person</span>
                        <span className=' text-xs block text-slate-600'>
                            Description data is a long text explaining the data of data here
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                    </p>
                    <p className='lg:absolute text-2xl hover:cursor-pointer hover:text-3xl top-12 right-5'>
                    </p>
                </div>
                <div onClick={()=>{setopenPost(true)}} className=' hover:cursor-pointer relative w-full flex flex-wrap bg-red-500 mt-2 mb-2 p-5 rounded-lg text-slate-900 bg-opacity-20'>
                    <a className=' w-20 h-20 block rounded-full lg:ml-5 text-white bg-black'>ICON post by</a>
                    <p className=' lg:absolute h-24 top-5 w-64 text-left border-white left-32'>
                        <a className='font-bold block'>Work title / project Title</a>
                        <span className=' text-xs block'>Industry category IT/Design/ComputerScience</span>
                        <span className=' text-xs block'>skills required - programming/WEB/ML/AI/database</span>
                        <span className=' text-xs inline'><FiUsers className='inline' />12</span>
                    </p> 
                    <p className=' lg:absolute top-5 right-32 text-left overflow-auto scrollbar-hidden max-h-24 w-64'>
                        <span className='font-bold'>posted by 1st person</span>
                        <span className=' text-xs block text-slate-600'>
                            Description data is a long text explaining the data of data here
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                    </p>
                    <p className='lg:absolute text-2xl hover:cursor-pointer hover:text-3xl top-12 right-5'>
                    </p>
                </div>     
            </div>
        <Tooltip id="viewall" className='text-xs' />
        {openPost?<><Post /></>:<></>}

        </div>
    </>
    :
    <>
        
    </>
   }
   </>
   
  )
}
