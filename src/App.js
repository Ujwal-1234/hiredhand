import { useState } from 'react';
import './App.css';
import Feed from './component/Feed';
import Message from './component/Message';
import Notify from './component/Notify';
import NewWork from './component/NewWork';
import { FiSearch } from "react-icons/fi";
import { BsFillCpuFill } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiHome } from "react-icons/fi";


function App() {
  const [auth,setAuth] = useState(true)
  const [notify, setNotify] = useState(false)
  const [newuser, setUser] = useState(false)
  const [message, setMessage] = useState(false)
  const [newWork, setNewWork] = useState(false)
  const _notify = ()=>{
    setNotify(true)
    setMessage(false)
  }
  const setLogin=(data)=>{
    setUser(data)
  }
  const _message = ()=>{
    setNotify(false)
    setMessage(true)
  }
  const _home=()=>{
    setNotify(false)
    setMessage(false)
  }
  return (
    <>
    {
    auth?
    <div className="App bg-red-50">
      <header className=" bg-slate-900 relative text-slate-50">
        <div className=' absolute bg-slate-900 text-white left-0 inline  w-1/4 '> 
          <p className='font-bold border-b-2 p-2 rounded-2xl text-2xl top-1'>hired-Hand</p>
          <p className=' m-5'>
            <a className=' hover:border hover:rounded-2xl hover:p-2 cursor-pointer pl-2 pr-2' onClick={_home}><FiHome className='inline m-3'/><span className='text-xs'>Home</span></a>
            <a className=' hover:border hover:rounded-2xl hover:p-2 cursor-pointer pl-2 pr-2' onClick={_notify}><FiBell className='inline m-3'/><span className='text-xs'>Notification</span></a>
            <a className=' hover:border hover:rounded-2xl hover:p-2 cursor-pointer pl-2 pr-2' onClick={_message}><FiMessageSquare className='inline m-3'/><span className='text-xs'>Messages</span></a>
          </p>
          <p>
            <input type={"text"} className=' w-3/4 mb-2 inline rounded-full text-black p-2 text-center' placeholder='Search...'></input><FiSearch className='inline text-4xl ml-4' />
          </p>
          <p className='bg-white text-slate-800 p-5 m-10 hover:cursor-pointer text-2xl hover:bg-opacity-40 hover:text-slate-50 rounded-2xl text' onClick={()=>setNewWork(true)}>
            Start Project<BsFillCpuFill className='inline ml-5 mb-1' />
          </p>
        </div>
        <div className='absolute top-4 right-5'> 
          {auth?<a className=' hover:text-2xl  rounded-full bg-slate-900 cursor-pointer p-2' onClick={()=>setAuth(false)}>logout</a> :<></>}
          {auth?<></>:<a className=' hover:text-2xl cursor-pointer pl-2 pr-2'><span className='bg-slate-600 p-2 rounded-l-full'>login</span><span className='bg-slate-50 p-2 rounded-r-full text-slate-900'>Register</span></a>}
        </div>
      </header>
      {<Feed />}
      {notify?<Notify />:<></>}
      {message?<Message />:<></>}
      {newWork?<NewWork />:<></>}
    </div>
    :
    <div className=' bg-red-200 min-h-screen flex items-center justify-center text-red-500'>
      <div className='bg-slate-900 bg-opacity-80 p-20 rounded-xl'>
        {newuser?<form>
          <input type={"text"} className='block bg-red-500 bg-opacity-0 border-b-2 border-white  mt-5 mb-5 text-2xl p-2 w-full rounded-2xl text-center' placeholder='User Id' />
          <input type={"password"} className='block bg-red-500 bg-opacity-0 border-b-2 border-white  mt-5 mb-5 text-2xl p-2 w-full rounded-2xl text-center' placeholder='Password' />
          <button type={"submit"} className='block mt-5 mb-5 text-center w-full hover:border-b-0 hover:border-t-8 hover:cursor-pointer active:text-white border-red-500 rounded-3xl p-2 text-2xl border-b-8'>LOGIN</button>
          <p className='text-center text-slate-50'>New to us ?<a className=' underline text-red-500 hover:cursor-pointer' onClick={()=>setLogin(false)}>create one</a> </p> 
        </form>:
        <form>
          <input type={"text"} className='block bg-red-500 bg-opacity-0 border-b-2 border-white  mt-5 mb-5 text-2xl p-2 w-full rounded-2xl text-center' placeholder='Full Name' />
          <input type={"text"} className='block bg-red-500 bg-opacity-0 border-b-2 border-white  mt-5 mb-5 text-2xl p-2 w-full rounded-2xl text-center' placeholder='Email Id' />
          <input type={"text"} className='block bg-red-500 bg-opacity-0 border-b-2 border-white  mt-5 mb-5 text-2xl p-2 w-full rounded-2xl text-center' placeholder='Phone' />
          <input type={"password"} className='block bg-red-500 bg-opacity-0 border-b-2 border-white  mt-5 mb-5 text-2xl p-2 w-full rounded-2xl text-center' placeholder='Password' />
          <input type={"submit"} className='block mt-5 mb-5 text-center w-full hover:border-b-0 hover:border-t-8 hover:cursor-pointer active:text-white border-red-500 rounded-3xl p-2 text-2xl border-b-8' value={"REGISTER"}></input>
          <p className='text-center text-slate-50'>Already a member ?<a className=' underline text-red-500 hover:cursor-pointer' onClick={()=>setLogin(true)}>login</a> </p> 
        </form>}
      </div>
    </div>
    }
    </>
  );
}
export default App;