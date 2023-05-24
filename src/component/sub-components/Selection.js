import React from 'react'
import { FiCheck, FiX } from 'react-icons/fi';

export default function Selection() {
  const header = new URLSearchParams(window.location.search)

  const manage_req = ()=>{
      console.log(header.get('type'))
      let url = 'http://localhost/hiredhand/server/request_manage.php?sessionid='+localStorage.getItem('sessionid')+'&user='+header.get('user')+'&type='+header.get('type')+'+&pid='+header.get('pid')
      console.log(url)
      fetch(url)
      .then((response) => response.json())
      .then((actualData) => {
          console.log(actualData)
          if(actualData.result =='success')
          {
              window.location='/'
          }
      })
      .catch((err) => {
          console.log(err.message);
      });
    
  }
  return (
    <div className=' absolute w-full flex justify-center items-cener  bottom-0'>
        {/* <p className='lg:p-2 lg:w-1/2 z-10 flex flex-wrap items-center justify-center'>
            <a onClick={manage_req(1)} className=' bg-white hover:bg-green-500 hover:cursor-pointer p-3 text-4xl'><FiCheck className='inline-block'/> Accept </a>
            <a onClick={manage_req(0)} className=' bg-white hover:bg-red-500 hover:cursor-pointer p-3 text-4xl'><FiX className='inline-block'/> Reject </a>
        </p> */}
    </div>
  )
}
