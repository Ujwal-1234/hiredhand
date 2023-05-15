import {React, useEffect, useState} from 'react'
import { FiUsers } from "react-icons/fi";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { Link } from "react-router-dom";
import Post from './Post';

export default function Feed() {
  const [openPost, setopenPost] = useState(false)
  let [data, setData] = useState(true)
  let no_data = 0
  let data_feed = ""
  // function createMarkup(c) {
  //     // let c=`<div class=' hover:cursor-pointer relative w-full flex flex-wrap bg-red-500 mt-2 mb-2 p-5 rounded-lg text-slate-900 bg-opacity-20'>
  //     //     <a class=' w-20 h-20 block rounded-full lg:ml-5 text-white bg-black'>ICON post by</a>
  //     //     <p class=' lg:absolute h-24 top-5 w-64 text-left border-white left-32'>
  //     //         <a class='font-bold block'>Work title / project Title</a>
  //     //         <span class=' text-xs block'>Industry category IT/Design/ComputerScience</span>
  //     //         <span class=' text-xs block'>skills required - programming/WEB/ML/AI/database</span>
  //     //         <span class=' text-xs inline'><FiUsers class='inline' />12</span>
  //     //     </p> 
  //     //     <p class=' lg:absolute top-5 right-32 text-left overflow-auto scrollbar-hidden max-h-24 w-64'>
  //     //         <span class='font-bold'>posted by 1st person</span>
  //     //         <span class=' text-xs block text-slate-600'>
  //     //             Description data is a long text explaining the data of data here
  //     //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //     //         </span>
  //     //     </p>
  //     //     <p class='lg:absolute text-2xl hover:cursor-pointer hover:text-3xl top-12 right-5'>
  //     //     </p>
  //     // </div>`
  //   return {__html: c};
  // }
  // function _setOpenPost(data){
  //   setopenPost(data)
  // }
  
  useEffect(()=>{
    
    setInterval(() => {
      
        let url = 'http://localhost/hiredhand/server/get_data.php'
        fetch(url).then((response) => response.json()).then((actualData) => {
          
          // document.getElementById("feed_dat").addEventListener('click', ()=>{
          //   console.log("div clicked to open")
          // });

            let f_data_feed = JSON.parse(actualData.data)
            // console.log(f_data_feed.length)
            if(no_data!=f_data_feed.length){
              sessionStorage.clear('data_feed')
              // console.log(no_data)
              // console.log(f_data_feed)
              data_feed=''
              // console.log(Object.keys(f_data_feed).length)
                no_data=f_data_feed.length
                // sessionStorage.setItem('no_data', no_data)
                for(let i=0; i<f_data_feed.length; i++)
                {
                  // console.log(f_data_feed[i])
                    data_feed = data_feed+"<div class=' hover:cursor-pointer relative w-full flex flex-wrap bg-red-500 mt-2 mb-2 p-5 rounded-lg text-slate-900 bg-opacity-20' ><a class=' w-20 h-20 block rounded-full lg:ml-5 text-white bg-black'>ICON post by</a><p class=' lg:absolute h-24 top-5 w-64 text-left border-white left-32'><a href=/post?pid="+f_data_feed[i]['project_id']+" class='font-bold block'>"+f_data_feed[i]['project_title']+"</a><span class=' text-xs block'>"+f_data_feed[i]['project_category']+"</span><span class=' text-xs block'>skills required - programming/WEB/ML/AI/database</span><span class=' text-xs inline'><FiUsers class='inline' />12</span></p><p class=' lg:absolute top-5 right-32 text-left overflow-auto scrollbar-hidden max-h-24 w-64'><a href=/pro>"+f_data_feed[i]['initiated_by']+"</a><span class=' text-xs block text-slate-600'>"+f_data_feed[i]['project_description']+"</span></p><p class='lg:absolute text-2xl hover:cursor-pointer hover:text-3xl top-12 right-5'></p></div>"
                }
                // console.log(data_feed)
                sessionStorage.setItem('data_feed', actualData.data)
                document.getElementById('feed').innerHTML=data_feed
                
            }
            
            if(actualData.result =='success')
            {
                setData(true)
            }
            // console.log(sessionStorage.getItem('received_data_hirehand'))
        }).catch((err) => {console.log(err.message);});
    }, 1000);
    
    // document.getElementById('feed').innerHTML=data_feed
    
  })
  // if(no_data!=sessionStorage.getItem('no_data')){
  //   console.log(no_data)
  //   console.log(sessionStorage.getItem('no_data'))
  //   // window.location.reload()
  // }

  return (
   <>
   {
        data?
    <>
    {
      // setInterval(() => {
        <div className=' min-w-full lg:flex justify-center'>
            <div id='feed' className=' lg:max-h-screen bg-red-300 scrollbar-hidden bg-opacity-20 overflow-auto w-full lg:w-1/2'>
            {/* <div onClick={()=>{setopenPost(true)}} className=' hover:cursor-pointer relative w-full flex flex-wrap bg-red-500 mt-2 mb-2 p-5 rounded-lg text-slate-900 bg-opacity-20'>
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
                </div> */}
            </div>
        <Tooltip id="viewall" class='text-xs' />
        {openPost?<><Post /></>:<></>}

        </div>
      // }, 300)
    }
        
    </>
    :
    <>
        
    </>
   }
   </>
   
  )
}
