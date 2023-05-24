import React, { useState, useEffect } from 'react'
import { FiUsers, FiHome, FiX } from 'react-icons/fi'

export default function OpenProject() {
    const queryParams = new URLSearchParams(window.location.search)
    const pid = queryParams.get('pid')
        console.log(pid)
    const [comm, setComm]=useState(queryParams.get('type')=='c'?true:false)
    const [header, setHeader]=useState(new URLSearchParams(window.location.search))
    useEffect(()=>{
        const queryParams = new URLSearchParams(window.location.search)
        const pid = queryParams.get('pid')
        console.log(pid)

        let json_data = JSON.parse(sessionStorage.getItem('json_data_feed'))
        console.log(json_data[pid]['requested_users'])
        console.log(json_data[pid]['community_members'])
        console.log(json_data[pid])
        console.log(json_data[pid]['requested_users'].split(","))
        let request_arr=Array()
        let community_arr=Array()
        request_arr=json_data[pid]['requested_users'].split(",")
        community_arr=json_data[pid]['community_members'].split(",")
        
        document.getElementById('post_cat').innerText=json_data[pid]['project_category']

        if(comm)
        {
            if((community_arr.length==1 && community_arr[0]=='')){
                document.getElementById('u_c').innerHTML='No Data Found'
            }else{
                for(let i=0; i<community_arr.length; i++)
                {
                    if(community_arr[i]!="")
                    {
                        console.log(community_arr)
                        document.getElementById('u_c').innerHTML+="<a class=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'>"+community_arr[i].slice(0, 15)+"...</a>"
                    }
                }
            } 
        }else{
            if((request_arr.length==1 && request_arr[0]=='') || request_arr[0]==''){
                document.getElementById('u_request').innerHTML='No Data Found'
            }else{
                for(let i=0; i<request_arr.length; i++)
                {
                    document.getElementById('u_request').innerHTML+="<p class=' block bg-red-600 bg-opacity-20 mt-2 p-2 rounded-md'><a href='/project/pro?email="+request_arr[i]+"' class='hover:cursor-pointer text-left w-1/2 inline-block'>"+request_arr[i].slice(0, 15)+"..."+"</a><a class='text-right w-1/2 inline-block'><a href='?pid="+pid+"&session="+localStorage.getItem('sessionid')+"&type=1&user="+request_arr[i]+"' class='bg-green-600 ml-1 rounded-md p-1 text-white hover:cursor-pointer'>Accept</a><a href='?pid="+pid+"&session="+localStorage.getItem('sessionid')+"&type=0&user="+request_arr[i]+"    ' class='bg-red-600 ml-1 rounded-md p-1 text-white hover:cursor-pointer'>Reject</a></a></p>"
                }
            }
        }
        document.getElementById('post_title').innerText=json_data[pid]['project_title']
        document.getElementById('post_initiated_by').innerText=json_data[pid]['initiated_by']
        document.getElementById('post_description').innerText=json_data[pid]['project_description']        
    }, [comm])
    useEffect(()=>{
        if(header.get('type') && header.get('user') && header.get('session') && header.get('pid'))
        {
            console.log(header.get('type'))
            let url = 'http://localhost/hiredhand/server/request_manage.php?sessionid='+header.get('session')+'&user='+header.get('user')+'&type='+header.get('type')+'+&pid='+header.get('pid')
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
    }, [header])
  return (
    <div className='bg-black absolute lg:flex items-center justify-center min-h-screen max-h-screen w-full top-0 bg-opacity-40'>
        <div className='fixed z-50 lg:hidden bottom-0 border bordre-white bg-black right-0 mb-2 mr-2 rounded-full active:text-2xl text-white flex justify-center items-center text-3xl'>
            <a href='/'><FiHome className=' m-5'/></a></div>
            <a href='/' className='absolute z-10 right-20 hover:cursor-pointer bg-white rounded-full p-2 hover:bg-red-600 hover:text-white active:text-2xl top-5 text-4xl'><FiX /></a>
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
            <p className='flex mt-5 justify-center items-center '>
              <a href={`openproject?pid=${pid}`} className=' border hover:cursor-pointer hover:bg-slate-700 hover:text-white border-slate-700 rounded-2xl p-2 pl-9 pr-9'>Project Data</a>
              {/* <a href='/' className=' border ml-5 hover:bg-red-700 hover:text-white border-red-700 rounded-2xl p-2 pl-9 pr-9' >Ignore</a> */}
            </p>
        </div>
        <div className='bg-white border lg:w-1/4 h-1/2 p-20'>
            <p className='text-left'>
                <a className='ml-4 hover:cursor-pointer' onClick={()=>{window.location='/project?pid='+pid+'&type=c';setComm(true)}}>Community</a>
                <span className='ml-4 hover:cursor-pointer' onClick={()=>{setComm(false)}}>Requests</span>
            </p>
            {
                comm?<><p id='u_c' className='border overflow-auto max-h-96 p-5'>
            </p></>:
            <>
            <div id='u_request' className='border overflow-auto max-h-96 p-5'>
                
            </div>
            </>
            }
        </div>
    </div>
        
  )
}
