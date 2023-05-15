import { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import Feed from './component/Feed';
import Message from './component/Message';
import Notify from './component/Notify';
import NewWork from './component/NewWork';
import { FiSearch, FiUser, FiX } from "react-icons/fi";
import { BsFillCpuFill } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import Iniprojects from './component/Iniprojects';
import Otp from './component/Otp';
import Pro from './component/Pro';
import NotFound from './component/NotFound';
import { Route, Routes } from 'react-router-dom';
import OpenProject from './component/OpenProject';
import Post from './component/Post';
import Community from './component/sub-components/Community';
import Selection from './component/sub-components/Selection';

function App() {
  // sessionStorage.setItem('sessionid', "12345")
  var authbool=false
  var verifybool=true
  if(localStorage.getItem('sessionid')!=null)
  authbool=true
  // console.log(authbool)
  // console.log(localStorage.getItem('sessionid'))
  const [_otp, setotp] = useState(verifybool)
  const [auth, setAuth] = useState(authbool)
  const [notify, setNotify] = useState(false)
  const [newuser, setUser] = useState(false)
  const [message, setMessage] = useState(false)
  const [newWork, setNewWork] = useState(false)
  const [initiated, setinitiated] = useState(true)
  const [profile, setProfile]=useState(true)
  const [view_iniprojects, set_view_iniprojects] = useState(false)


  const full_name = useRef();
  const email_id = useRef();
  const phone = useRef();
  const password = useRef();

  const l_user = useRef();
  const l_pass = useRef();

  // useEffect(() => {
  //   fetch(`http://localhost/hiredhand/server/verified.php?email=`+localStorage.getItem('email'))
  //    .then((response) => response.text())
  //    .then((actualData) => console.log(actualData))
  //    .catch((err) => {
  //     console.log(err.message);
  //    });
  //  }, []);
  setInterval(() => {
    if(sessionStorage.getItem('profile')==true){
      setProfile(true)
      console.log(sessionStorage.getItem('profile'))
    }
  }, 100);

    useEffect(() => {
      const getsession = setInterval(() => {
        if(localStorage.getItem('sessionid')){
          let url = 'http://localhost/hiredhand/server/onload_session_verify.php?sessionid='+localStorage.getItem('sessionid')
          console.log(url)
          fetch(url)
           .then((response) => response.json())
           .then((actualData) => {
            // console.log(actualData)
            // console.log(actualData.result)
            if(actualData.result !='success' && actualData.verified==false)
            {
              localStorage.removeItem('sessionid')
              window.location.reload()
            }
          })
           .catch((err) => {
            console.log(err.message);
           });
        }
      }, 5000);
      return ()=>clearInterval(getsession)
   }, []);

  const _check_verify =()=>{
    fetch(`http://localhost/hiredhand/server/verified.php?email=`+localStorage.getItem('email'))
     .then((response) => response.text())
     .then((actualData) => {
      console.log(actualData)
      if(actualData.verified === true){
        verifybool=true
      }
      else{
        verifybool=false
      }
    })
     .catch((err) => {
      console.log(err.message);
     });
  }
  
  const _register_user =()=>{
      console.log(full_name.current.value)
      let _url = 'http://localhost/hiredhand/server/register.php?full_name='+full_name.current.value+'&email_id='+email_id.current.value+'&phone='+phone.current.value+'&password='+password.current.value
      fetch(_url).then((response) => response.json())
      .then((actualData) => console.log(actualData))
      .catch((err) => {
       console.log(err.message);
      });
  }
  const _login_user = ()=>{
    console.log(l_user.current.value)
    let url = 'http://localhost/hiredhand/server/login.php?userid='+l_user.current.value+'&password='+l_pass.current.value
    console.log(url)
    fetch(url).then((response)=>response.json()).then((actualData)=>{
      console.log(actualData)
      if('session_id' in actualData){
        console.log(actualData.session_id)
        localStorage.setItem('sessionid', actualData.session_id)
        localStorage.setItem('email_id', actualData.email)
      }
    window.location.reload()
    }).catch((err)=>{
      console.log(err.message)
    })
  }
  const _logout = ()=>{
    let _url = 'http://localhost/hiredhand/server/logout.php?sessionid='+localStorage.getItem('sessionid')
    fetch(_url).then((response) => response.json())
    .then((actualData) => {
      console.log(actualData)
      if(actualData.result =='success'){
        localStorage.removeItem('sessionid')
        window.location.reload()
      }
    })
    .catch((err) => {
     console.log(err.message);
    });
  }
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
    set_view_iniprojects(false)
  }
  const _profile=()=>{
    setProfile(true)
  }
  return (
    <>
    {
    auth?
    <>
    {_check_verify}
    {
      _otp?<div className="App lg:flex lg:flex-wrap w-full bg-red-50">
      <header className=" min-h-screen lg:block bg-slate-900  text-slate-50">
        <div className=' absolute min-h-screen flex justify-center items-center flex-wrap bg-slate-900 text-white left-0 w-full lg:w-1/4 '> 
          <p className='font-bold border-b-2 p-2 lg:w-3/4 rounded-2xl text-2xl top-1'>hired-Hand</p>
          <p className=' m-5'>
            <a className=' hover:border hover:rounded-2xl hover:p-2 cursor-pointer pl-2 pr-2' onClick={_home}><FiHome className='inline m-3'/><span className='text-xs'>Home</span></a>
            <a className=' hover:border hover:rounded-2xl hover:p-2 cursor-pointer pl-2 pr-2' onClick={_notify}><FiBell className='inline m-3'/><span className='text-xs'>Notification</span></a>
            <a className=' hover:border hover:rounded-2xl hover:p-2 cursor-pointer pl-2 pr-2' onClick={_message}><FiMessageSquare className='inline m-3'/><span className='text-xs'>Messages</span></a>
            <a className=' hover:border hover:rounded-2xl hover:p-2 cursor-pointer pl-2 pr-2' href='/pro'><FiUser className='inline m-3'/><span className='text-xs'>Profile</span></a>

          </p>
          <p>
            <input type={"text"} className=' lg:w-3/4 mb-2 inline rounded-full text-black p-2 text-center' placeholder='Search...'></input><FiSearch className='hover:cursor-pointer active:text-2xl inline text-4xl ml-4' />
          </p>
          <p className='bg-white text-slate-800 p-5 m-10 hover:cursor-pointer text-2xl hover:bg-opacity-40 hover:text-slate-50 rounded-2xl text' onClick={()=>setNewWork(true)}>
            Start Project<BsFillCpuFill className='inline ml-5 mb-1' />
          </p>
        </div>
        <div className='absolute top-4 right-5'> 
          {auth?<a className='hover:text-2xl text-white rounded-full bg-slate-500 shadow-black shadow-lg cursor-pointer p-2' onClick={_logout}>logout</a> :<></>}
          {auth?<></>:<a className=' hover:text-2xl cursor-pointer pl-2 pr-2'><span className='bg-slate-600 p-2 rounded-l-full'>login</span><span className='bg-slate-50 p-2 rounded-r-full text-slate-900'>Register</span></a>}
        </div>
      </header>
      {/* {<Feed />} */}
      <Routes>
        <Route path='pro' element={<Pro/>} />
        <Route path='project/pro' element={<><Pro/><Selection/></>} />
        <Route path='post' element={<Post/>} />
        <Route path='project' element={<OpenProject/>}/>
        <Route path='/' element={<Feed/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      
      {
      initiated?
      <>
      <div className='fixed right-5 bottom-5'>
        <button onClick={()=>set_view_iniprojects(true)} className='hover:text-2xl text-white rounded-full bg-slate-500 shadow-black shadow-lg cursor-pointer p-2'>Initiated Projects</button>
      </div>
      </>:<></>
      }
      
      {
        view_iniprojects?
        <>
        <Iniprojects className='z=0'/>
        <div onClick={_home} className='fixed z-50 lg:hidden bottom-0 border bordre-white bg-black right-0 mb-2 mr-2 rounded-full active:text-2xl text-white flex justify-center items-center text-3xl'><FiHome className=' m-5'/></div>
        </>:
        <></>
      }
      {notify?
      <>
        <Notify className='z-0' />
        <div onClick={_home} className='fixed z-50 lg:hidden bottom-0 border bordre-white bg-black right-0 mb-2 mr-2 rounded-full active:text-2xl text-white flex justify-center items-center text-3xl'><FiHome className=' m-5'/></div>
      </>
      :<></>}
      {message?<>
        <Message />
        <div onClick={_home} className='fixed z-50 lg:hidden bottom-0 border bordre-white bg-black right-0 mb-2 mr-2 rounded-full active:text-2xl text-white flex justify-center items-center text-3xl'><FiHome className=' m-5'/></div>
      </>:<></>}
      {newWork?<NewWork />:<></>}
      

      {/* {profile?<><a href='/' onClick={()=>{setProfile(false)}} className='absolute z-10 right-20 hover:cursor-pointer bg-white rounded-full p-2 hover:bg-red-600 hover:text-white active:text-2xl top-5 text-4xl'><FiX /></a><Pro /></>:<></>} */}
    </div>:
    <>
    <Otp />
    </>
    }
    </>
    
    :
    <div className=' bg-red-200 min-h-screen flex items-center justify-center text-red-500'>
      <div className='bg-slate-900 bg-opacity-80 p-20 rounded-xl'>
        {newuser?<form>
          <input type={"text"} className='block bg-red-500 bg-opacity-0 border-b-2 border-white  mt-5 mb-5 text-2xl p-2 w-full rounded-2xl text-center' ref={l_user} placeholder='User Id' />
          <input type={"password"} className='block bg-red-500 bg-opacity-0 border-b-2 border-white  mt-5 mb-5 text-2xl p-2 w-full rounded-2xl text-center' ref={l_pass} placeholder='Password' />
          <button type={"button"} onClick={_login_user} className='block mt-5 mb-5 text-center w-full hover:border-b-0 hover:border-t-8 hover:cursor-pointer active:text-white border-red-500 rounded-3xl p-2 text-2xl border-b-8'>LOGIN</button>
          <p className='text-center text-slate-50'>New to us ?<a className=' underline text-red-500 hover:cursor-pointer' onClick={()=>setLogin(false)}>create one</a> </p> 
        </form>:
        <form>
          <input type={"text"} className='block bg-red-500 bg-opacity-0 border-b-2 border-white  mt-5 mb-5 text-2xl p-2 w-full rounded-2xl text-center' ref={full_name} name='fname' placeholder='Full Name' />
          <input type={"text"} className='block bg-red-500 bg-opacity-0 border-b-2 border-white  mt-5 mb-5 text-2xl p-2 w-full rounded-2xl text-center' ref={email_id} name='emailid' placeholder='Email Id' />
          <input type={"text"} className='block bg-red-500 bg-opacity-0 border-b-2 border-white  mt-5 mb-5 text-2xl p-2 w-full rounded-2xl text-center' ref={phone} name='phone' placeholder='Phone' />
          <input type={"password"} className='block bg-red-500 bg-opacity-0 border-b-2 border-white  mt-5 mb-5 text-2xl p-2 w-full rounded-2xl text-center' ref={password} name='pass' placeholder='Password' />
          <input type={"button"} onClick={_register_user} className='block mt-5 mb-5 text-center w-full hover:border-b-0 hover:border-t-8 hover:cursor-pointer active:text-white border-red-500 rounded-3xl p-2 text-2xl border-b-8' value={"REGISTER"}></input>
          <p className='text-center text-slate-50'>Already a member ?<a className=' underline text-red-500 hover:cursor-pointer' onClick={()=>setLogin(true)}>login</a> </p> 
        </form>}
      </div>
    </div>
    }
    
    </>
  );
}
export default App;