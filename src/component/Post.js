import React, { useEffect } from 'react'
import { FiUsers } from "react-icons/fi";
// import setopenPost from "../App"


export default function Post() {
  const _closepost = ()=>{
    window.location.reload(false)
  }
  const queryParams = new URLSearchParams(window.location.search)
  const pid = queryParams.get('pid')
  useEffect(()=>{
      console.log(pid)
      let json_data = JSON.parse(sessionStorage.getItem('json_data_feed'))
      console.log(json_data[pid])
      document.getElementById('post_cat').innerText=json_data[pid]['project_category']
      document.getElementById('post_title').innerText=json_data[pid]['project_title']
      document.getElementById('post_initiated_by').innerText=json_data[pid]['initiated_by']
      document.getElementById('post_description').innerText=json_data[pid]['project_description']
  }, [])
  const _join_project = ()=>{
    console.log(localStorage.getItem('email_id'))
    let url = 'http://localhost/hiredhand/server/joinproject.php?pid='+pid+'&email='+localStorage.getItem('email_id')
    console.log(url)
    fetch(url).then((response)=>response.text()).then((actualData)=>{
      console.log(actualData)
      if(actualData.result=='success')
      {
        console.log(actualData)
      }
    }).catch((err)=>{
      console.log(err.message)
    })
  }
  return (
    <div className='bg-black fixed lg:flex items-center justify-center min-h-screen max-h-screen w-full top-0 bg-opacity-40'>
        <div className='bg-white border lg:w-1/4 h-1/2 p-20'>
            <div className='bg-slate-700 bg-opacity-20 p-5 rounded text-left flex justify-between items-center'>
                <span id='post_cat' className='font-bold text-2xl'>Loading ...</span>
                <a className=' w-20 h-20 block rounded-full lg:ml-5 text-white bg-black'>Loading ...</a>
            </div>
            <p className=' text-justify'>
                <a id='post_title' className='font-bold block'>Loading ...</a>
                <span id='post_cat' className=' text-xs block'>Industry category Loading ...</span>
                <span id='post_req_skills' className=' text-xs block'>skills required - Loading ...</span>
                <span id='post_members' className=' text-xs inline'><FiUsers className='inline' />12</span>
            </p>
            <p className=' text-justify'>
                <span id='post_initiated_by' className='font-bold'>Loading ...</span>
                <span id='post_description' className=' max-h-96 overflow-auto scrollbar-hidden text-xs block text-slate-600'>
                    Loading ...
                </span>
            </p>
            <p className='flex mt-5 justify-between '>
              <a onClick={_join_project} className=' border hover:bg-slate-700 hover:text-white hover:cursor-pointer border-slate-700 rounded-2xl p-2 pl-9 pr-9'>Join</a>
              <a href='/' className=' border hover:bg-red-700 hover:text-white border-red-700 rounded-2xl p-2 pl-9 pr-9' onClick={_closepost}>Cancel</a>
            </p>
        </div>
    </div>
  )
}
