import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CircularProgress } from '@mui/material'
const Login = () => {
  const [progress,setprogress]=useState(false)
  const [errMsg,setErrMsg]=useState("")
  const navigate=useNavigate()
  const [user,setuser]=useState({
    username:"",
    password:"",
  })
  const handlechanger=(e)=>{
    setErrMsg("")
    setuser({...user,[e.target.name]:e.target.value})
  }
  const loginhandler= async()=>{
    try{
      setprogress(true)
      const config={
        headers:{
           "Content-type":"application/json",
           "Access-Control-Allow-Origin": "*",
           "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        },
      }
      const response=await axios.post("http://localhost:5000/user/login/",user,config)
      setprogress(false)
     
      if(response.status===200)
      {
       
        localStorage.setItem("userdata",JSON.stringify(response))
        navigate("/home")
      }
    }
    catch(err)
   {
    setprogress(false)
    setErrMsg("username or password incorrect")
   }
  }
  return (
    <div className="w-full justify-center items-center flex h-[100vh]">
        <div className='flex w-[30%] flex-col gap-3'>
            <p className='m-[10px] font-semibold text-lg'>LOG IN TO YOUR ACCOUNT</p>
        <TextField id="outlined-basic 1" label="enter username" name="username" onChange={handlechanger} variant="outlined" className='m-10' />
        <TextField id="outlined-basic 2" label="enter password" name='password' onChange={handlechanger} variant="outlined" type='password'  onKeyDown={(event) => {
                if (event.code === "Enter") {
                  
                  loginhandler();
                }
              }}/>
              <span className='font-semibold text-sm' style={{color:"red"}}>{errMsg}</span>
        <Button variant="contained" onClick={()=>{
          loginhandler()
        }
        }>{progress ? <CircularProgress color="inherit" /> : "Log in"}</Button>
        <p className='font-semibold text-lg '>DO YOU HAVE NO ACCOUNT <Button variant='containes' onClick={()=>{navigate('/Register')}}>Register</Button></p>
        </div>
    </div>
  )
}

export default Login