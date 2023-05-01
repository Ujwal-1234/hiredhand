import React from 'react'

export default function Otp() {
  const verifyOTP = ()=>{
    console.log('otp verified')
  }
  return (
    <div className=' bg-red-200 min-h-screen flex items-center justify-center text-red-500'>
      <div className='bg-slate-900 bg-opacity-80 p-20 rounded-xl'>
      
        <span className='block w-full text-center text-2xl'>OTP Validation</span>
        <form onSubmit={verifyOTP}>
          <input type={"text"} className='block bg-red-500 bg-opacity-0 border-b-2 border-white  mt-5 mb-5 text-2xl p-2 w-full rounded-2xl text-center' placeholder='OTP' />
          <button type={"submit"} onClick={()=>sessionStorage.setItem('sessionid', '12345')} className='block mt-5 mb-5 text-center w-full hover:border-b-0 hover:border-t-8 hover:cursor-pointer active:text-white border-red-500 rounded-3xl p-2 text-2xl border-b-8'>SUBMIT</button>
          <p className='text-center text-slate-50 hover:text-red-500 hover:cursor-pointer'>Resend OTP</p> 
        </form>
      </div>
    </div>
  )
}
