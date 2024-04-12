import Example from "./navbar";
import Cads from "./newproductlist";
import { useNavigate } from 'react-router-dom'
export default function Home(){
    const navigate = useNavigate();
    const islogin=localStorage.getItem("login")
   
    if(islogin === false)
    {
        console.log(islogin)
  navigate('/')
    }

    return(
        <div>
            <Example/>
             <Cads/>        </div>
    )
}