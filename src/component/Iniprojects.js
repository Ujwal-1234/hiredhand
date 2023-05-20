import React, { useEffect } from 'react'
import { FiUsers } from "react-icons/fi";



export default function Iniprojects() {
  useEffect(()=>{
    console.log(localStorage.getItem('email_id'))
    console.log(JSON.parse(sessionStorage.getItem('data_feed')))
    let _inprojects = JSON.parse(sessionStorage.getItem('data_feed'))
    for(let i=0; i<_inprojects.length; i++)
    {
      console.log(_inprojects[i])
      if(localStorage.getItem('email_id') == _inprojects[i]['initiated_by_email'])
      {
        document.getElementById('project_list').innerHTML+="<p class='w-auto my-5 h-24 flex flex-wrap items-center justify-center rounded-xl bg-opacity-60 bg-white'><a href='/project?pid="+_inprojects[i]['project_id']+"' class='block w-full font-bold'>"+_inprojects[i]['project_title']+"</a><a class=' p-2 w-full'>"+_inprojects[i]['project_description'].slice(0, 17)+"...</a><a class=' sticky ml-2 text-sm text-center text-slate-600 block'><span className=' mr-5'><FiUsers class='inline-block'/>34</span> <span class='ml-5'> Requests : 10</span></a></p>"
      }
    }
  }, [])
  return (
    <div className='fixed right-0 bg-red-500 bg-opacity-90 z-40 w-full lg:w-1/4 min-h-screen top-0'>
    <div id='project_list' className='max-h-screen p-5 w-full overflow-auto scrollbar-hidden'></div>
  </div>
  )
}
