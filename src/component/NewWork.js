import {React, useRef, useState} from 'react'

export default function NewWork() {
  const project_title = useRef()
  const project_desc = useRef()
  const project_cat = useRef()

  const create_project=()=>{
    if(project_title.current.value!=''||project_cat.current.value!='null'||project_desc.current.value!=''){
      fetch(`http://localhost/hiredhand/server/project_creation.php?sessionid=`+localStorage.getItem('sessionid')+'&project_title='+project_title.current.value+'&project_desc='+project_desc.current.value+'&project_cat='+project_cat.current.value)
           .then((response) => response.json())
           .then((actualData) => {
            if(actualData.result !='success' && actualData.verified==false)
            {
              localStorage.removeItem('sessionid')
              window.location.reload()
            }
            console.log(actualData)
            window.location.reload()
          })
           .catch((err) => {
            console.log(err.message);
           });
    }
    console.log('empty fields')
  }
  return (
    <div className='fixed flex justify-center items-center top-0 bg-opacity-60 min-w-full bg-slate-900 max-w-full min-h-screen max-h-screen'>
        <div className=' bg-white top-20 rounded-xl w-full left-1/4 lg:w-1/4 h-3/4'>
            <form className='bg-slate-900 bg-opacity-5 m-5 p-5'>
                <input ref={project_title} type={"text"} className=" block bg-red-500 bg-opacity-0 border-b-2 w-full border-slate-900  mt-5 mb-5 p-2 rounded-2xl text-center" placeholder="Title of Work"/>
                <textarea ref={project_desc} type={"text"} className="block bg-red-500 border w-full bg-opacity-0 border-b-2 border-slate-900  mt-5 mb-5 p-2 rounded-2xl text-center" placeholder="Description"/>
                <select ref={project_cat} className='block bg-red-500 border w-full bg-opacity-0 border-b-2 border-slate-900  mt-5 mb-5 p-2 rounded-2xl'>
                    <option value={'null'}>Work category</option>
                    <option value={'Development'}>Development</option>
                    <option value={'Designing'}>Designing</option>
                    <option value={'Accountant'}>Accountant</option>
                    <option value={'Marketing'}>Marketing</option>
                    <option value={'Manager'}>Manager</option>
                    <option value={'Teacher'}>Teacher</option>
                    <option value={'Expert'}>Expert</option>
                </select>
                <input type={"submit"} className='inlnie-block mt-5 mb-5 text-center hover:border-b-0 hover:border-t-2 border-red-500 hover:cursor-pointer active:text-white border rounded-3xl p-2 pl-5 pr-5 border-b-2' value={"cancel"} />
                <input type={"button"} onClick={create_project} className='inline-block ml-5 mt-5 mb-5 text-center hover:border-b-0 hover:border-t-2 border-green-500 hover:cursor-pointer active:text-white border rounded-3xl p-2 pl-5 pr-5 border-b-2' value={"submit"}/>
            </form>
        </div>
    </div>
  )
}
