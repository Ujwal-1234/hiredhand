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
  useEffect(()=>{
    setInterval(() => {
        let url = 'http://localhost/hiredhand/server/get_data.php'
        fetch(url).then((response) => response.json()).then((actualData) => {
            let f_data_feed = JSON.parse(actualData.data)
            if(no_data!=f_data_feed.length){
              sessionStorage.clear('data_feed')
              data_feed=''
              no_data=f_data_feed.length
              let json_string =''
                for(let i=0; i<f_data_feed.length; i++)
                {
                    if (i!=f_data_feed.length-1) {
                      console.log(i, f_data_feed.length)
                      json_string +=  '"'+f_data_feed[i]['project_id']+'": '+JSON.stringify(f_data_feed[i])+',';
                    }else{
                      json_string +=  '"'+f_data_feed[i]['project_id']+'": '+JSON.stringify(f_data_feed[i])+'';
                    }
                    data_feed = data_feed+"<div class=' hover:cursor-pointer relative w-full flex flex-wrap bg-red-500 mt-2 mb-2 p-5 rounded-lg text-slate-900 bg-opacity-20' ><a class=' w-20 h-20 block rounded-full lg:ml-5 text-white bg-black'>ICON</a><p class=' lg:absolute h-24 top-5 w-64 text-left border-white left-32'><a href=/post?pid="+f_data_feed[i]['project_id']+" class='font-bold block'>"+f_data_feed[i]['project_title']+"</a><span class=' text-xs block'>"+f_data_feed[i]['project_category']+"</span><span class=' text-xs block'>skills required - programming/WEB/ML/AI/database</span><span class=' text-xs inline'><FiUsers class='inline' />12</span></p><p class=' lg:absolute top-5 right-32 text-left overflow-auto scrollbar-hidden max-h-24 w-64'><a href=/pro?email="+f_data_feed[i]['initiated_by_email']+">"+f_data_feed[i]['initiated_by']+"</a><span class=' text-xs block text-slate-600'>"+f_data_feed[i]['project_description']+"</span></p><p class='lg:absolute text-2xl hover:cursor-pointer hover:text-3xl top-12 right-5'></p></div>"
                  }
                sessionStorage.setItem('data_feed', actualData.data)
                console.log('{'+json_string+'}')
                let json_data = '{'+json_string+'}'
                sessionStorage.setItem('json_data_feed', json_data)
                document.getElementById('feed').innerHTML=data_feed
                
            }
            if(actualData.result =='success'){setData(true)}
        }).catch((err) => {console.log(err.message);});
    }, 100);
  })
  return (
   <>
   {
    data?
    <>
    {
        <div className=' min-w-full lg:flex justify-center'>
            <div id='feed' className=' lg:max-h-screen bg-red-300 scrollbar-hidden bg-opacity-20 overflow-auto w-full lg:w-1/2'>
              
            </div>
        <Tooltip id="viewall" class='text-xs' />
        {openPost?<><Post /></>:<></>}
        </div>
    }
    </>
    :
    <>
        
    </>
   }
   </>
   
  )
}
