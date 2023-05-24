import React, { useEffect } from 'react'
import { FiX } from 'react-icons/fi'

export default function Pro() {
  const queryParams = new URLSearchParams(window.location.search)
  const email = queryParams.get('email')
  useEffect(()=>{
    let url = 'http://localhost/hiredhand/server/get_profile.php?email='+email
    console.log(url)
    fetch(url).then((response)=>response.json()).then((actualData)=>{
      console.log(actualData)
      if(actualData.result=='success')
      {
        document.getElementById('u_name').innerHTML=actualData.data.full_name
        document.getElementById('p_num').innerHTML=actualData.data.phone
        document.getElementById('u_email').innerHTML=actualData.data.email
        let p_id_arr = actualData.data.project_id.split(",")
        console.log(p_id_arr)
        console.log(p_id_arr.length)
        if(p_id_arr.length == 1 && p_id_arr[0] == '')
        {
          document.getElementById('u_exp').innerHTML='no experience found'
        }

      }
    }).catch((err)=>{
      console.log(err.message)
    })
  }, [])
  return (
    <div className=' top-0 z-0 flex flex-wrap items-center justify-center fixed bg-opacity-60 min-w-full min-h-full bg-slate-700'>
      <a href='/' className='absolute z-10 right-20 hover:cursor-pointer bg-white rounded-full p-2 hover:bg-red-600 hover:text-white active:text-2xl top-5 text-4xl'><FiX /></a>
      <div className='  lg:w-1/2 flex flex-wrap p-5 bg-white top-20 rounded-full'>
        <div className=' flex w-full justify-center items-center '>
          <span id='u_name' className=' font-semibold lg:text-3xl text-3xl'>Loading ...</span>
        </div>
        {/* <div className=' w-1/2 border p-3'>
            <span className=' font-semibold'>Skills<br/></span>
            Web Development,
            Cloud Developer,
            Serverless Framework,
            AWS lambda
        </div> */}
      </div>
      <div className='w-full flex flex-wrap items-center justify-center'>
        <div className='bg-white lg:w-1/4'>
          contact Details
          <span className='block'>Phone : <a id='p_num'></a></span> 
          <span className='block'>Email :<a id='u_email' href='https://mail.google.com/mail/u/#inbox?compose=new'></a> </span>
        </div>
      </div>
      <div  className=' lg:w-1/4 justify-center flex flex-wrap items-center max-h-96 bg-white p-5 rounded-lg overflow-auto scrollbar-hidden'>
        <span className=' w-full font-semibold text-left'>EXPERIENCE</span>
        <div id='u_exp'>

        </div>
       
      </div>
    </div>
  )
}
