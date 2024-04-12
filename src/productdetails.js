import Example from "./navbar";
import "./productdetails.css";
import c1 from './cubook.jpg';
import c2 from './cuuniform.jpg';
import c3 from './cuimg4.jpg';
import c4 from './cuimg5.jpg';
import { Button, TextField } from '@mui/material'
import { useState } from "react";
import axios from 'axios'

export default function Product(props){
    const [isCheckout,setIsCheckout]=useState(false)
    const userdata=JSON.parse(localStorage.getItem("userdata"))
    const [data,setdata]=useState({
        userid:userdata.data.id,
        product:props.eachp.name,
        price:0
    })
    const [errmsg,setmsg]=useState("")
    const submitdata=async()=>{
        const config={
            headers:{
               "Content-type":"application/json",
               "Access-Control-Allow-Origin": "*",
               "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            },
          }
          try{
            const response=await axios.post("http://localhost:5000/user/priceset/",data,config)
            if(response.status===200)
            { setmsg("ordered successfully")
                setInterval(() => {
                   setmsg("")
                },3000);


setIsCheckout(false)
            }
          }
          catch(err)
          {
            setmsg("ordered unsuccessfully")
                setInterval(() => {
                   setmsg("")
                },3000);

            console.log(err)
          }
          
    }
return(
    <div className="flex flex-col gap-7">
        <Example></Example>
        <div className="flex justify-around  w-full h-[100vh]">
            <div className="flex flex-col gap-5">
                 <h1 className=''>{props.eachp.name}</h1>
                 <p className="font-semibold text-sm w-[700px]">{props.eachp.details}</p>
                 
                 
        {isCheckout ? (
            <div className="flex ml-9">
                    <TextField type="number" id="outlined-basic 1" label="enter your price" name="price" onChange={(e)=>{
                        setdata({...data,price:e.target.value})
                    }}  variant="outlined" className='m-10' />
                    <Button variant="contained" onClick={()=>{
                     submitdata()
         
        }}>order</Button>
         
        </div>
        ):(
            <Button variant="contained" onClick={()=>{
           setIsCheckout(true)
        }}>check out</Button>
        )}
        <span className='font-semibold text-sm' style={{color:"blue"}}>{errmsg}</span>
            </div>
                 
                  <img  className='border-rounded w-[300px] h-[300px]' src={props.eachp.imageSrc}></img>

        </div>
       
    </div>
)
}