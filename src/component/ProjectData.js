import React, { useEffect } from 'react'
import { FiX } from 'react-icons/fi'
export default function ProjectData() {
  useEffect(()=>{
    const queryParams = new URLSearchParams(window.location.search)
    const pid = queryParams.get('pid')
    // console.log(sessionStorage.getItem('json_data_feed'))
    let data = JSON.parse(sessionStorage.getItem('json_data_feed'))
    console.log(data)
    document.getElementById('p_title').innerHTML=data[pid]['project_title']
    document.getElementById('skills_req').innerHTML=data[pid]['required_skills']
    document.getElementById('p_desc').innerHTML=data[pid]['project_description']
    let comm_members = data[pid]['community_members'].split(",")
    let request_arr=data[pid]['requested_users'].split(",")

    console.log(comm_members)
    if((comm_members.length==1 && comm_members[0]=='')){
      document.getElementById('comm_members').innerHTML='<a class="block">no members found</a>'
    }else{
      for(let i=0; i<comm_members.length; i++)
      {
          if(comm_members[i]!="")
          {
              console.log(comm_members)
              document.getElementById('comm_members').innerHTML+="<a href='/pro?email="+comm_members[i]+"' class=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>"+comm_members[i].slice(0, 15)+"...</a>"
          }
      }
  }
  if((request_arr.length==1 && request_arr[0]=='') || request_arr[0]==''){
    document.getElementById('u_request').innerHTML='<a class="block">no requests found</a>'
}else{
    for(let i=0; i<request_arr.length; i++)
    {
        document.getElementById('u_request').innerHTML+="<p class=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'><a href='/pro' class='hover:cursor-pointer text-left w-1/2 inline-block'>"+request_arr[i].slice(0, 15)+"..."+"</a><a class='text-right w-1/2 inline-block'></p>"
    }
}
  })
  return (
    <div className=' top-0 z-0 flex flex-wrap items-center justify-center fixed bg-opacity-60 min-w-full min-h-full bg-slate-700'>
      <a href='/' className='absolute z-10 right-20 hover:cursor-pointer bg-white rounded-full p-2 hover:bg-red-600 hover:text-white active:text-2xl top-5 text-4xl'><FiX /></a>
      <div className=' flex items-center justify-center flex-wrap p-5 bg-white top-20 rounded'>
        <div className=' w-auto border flex flex-wrap justify-center items-center '>
            <div className='w-full text-lg'>
              <span id='p_title'>Project Title</span>
              <span className='block text-sm'>
                Skills Required : <span id='skills_req'>abcde</span>
              </span>
              <span id='p_desc' className='block'>
                Description of project
              </span>
            </div>
            <div  className='w-1/2'>
              Community_Members
              <span id='comm_members'>
                
              </span>
            </div>
            <div className='w-1/2'>
              Requests
              <span id='u_request'></span>
            </div>
        </div>
      </div>
    </div>
  )
}
