import React from 'react'

export default function NewWork() {
  return (
    <div className='fixed flex justify-center items-center top-0 bg-opacity-60 min-w-full bg-slate-900 max-w-full min-h-screen max-h-screen'>
        <div className=' bg-white top-20 rounded-xl w-full left-1/4 lg:w-1/4 h-3/4'>
            <form className='bg-slate-900 bg-opacity-5 m-5 p-5'>
                <input type={"text"} className="block bg-red-500 bg-opacity-0 border-b-2 w-full border-slate-900  mt-5 mb-5 p-2 rounded-2xl text-center" placeholder="Title of Work"/>
                <textarea type={"text"} className="block bg-red-500 border w-full bg-opacity-0 border-b-2 border-slate-900  mt-5 mb-5 p-2 rounded-2xl text-center" placeholder="Description"/>
                <select className='block bg-red-500 border w-full bg-opacity-0 border-b-2 border-slate-900  mt-5 mb-5 p-2 rounded-2xl'>
                    <option>Work category</option>
                    <option>Development</option>
                    <option>Designing</option>
                    <option>Accountant</option>
                    <option>Marketing</option>
                    <option>Manager</option>
                    <option>Teacher</option>
                    <option>Expert</option>
                </select>
                <input type={"submit"} className='inlnie-block mt-5 mb-5 text-center hover:border-b-0 hover:border-t-2 border-red-500 hover:cursor-pointer active:text-white border rounded-3xl p-2 pl-5 pr-5 border-b-2' value={"cancel"} />
                <input type={"submit"} className='inline-block ml-5 mt-5 mb-5 text-center hover:border-b-0 hover:border-t-2 border-green-500 hover:cursor-pointer active:text-white border rounded-3xl p-2 pl-5 pr-5 border-b-2' value={"submit"}/>
            </form>
        </div>
    </div>
  )
}
