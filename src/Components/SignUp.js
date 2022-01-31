import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
//import img2 from './images/un.png';
//import img3 from './images/password.png';
//import './SignIn.css'

function Signup()

{
    const [UserName,setName]=useState("");
    const [Password,setPassword]=useState("");
    const[Errors,setErrors]=useState("")
    const history=useHistory();
    const[isRegister,setisRegister]=useState(false);

    async function Register(){
        
        let item={UserName,Password}
        console.log(item);
        console.warn(item)
        setisRegister(true);
        let result =await fetch("http://localhost:5000/api/signup" ,{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
                       
            }

        })
        result=await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/add")
        setErrors(validate(item));
    }

    useEffect(()=>{
        console.log(Errors);
        if(Object.keys(Errors).length === 0 && isRegister){
           // console.log(item);
        }
    },[Errors])
    const validate = (value) =>{
        const Errors={};
      //  const regex=/^[^\s@]+[^\s@]+\.[^\s@]{2,}$/i;
        if(!value.UserName){
            Errors.UserName="enter Usename";
        }
        if(!value.Password){
            Errors.UserName="enter pw";
        }
        return Errors;
    }
    return(
    
    <div className='col-sm-6-offset-sm-3'>
             <h1>SignUp Here!! </h1>
             <form onClick={Register} action='/Home'>
            
        <input type="text" values={UserName} onChange={(e)=>setName(e.target.value)}  className="form-control" placeholder="UserName" required/>
            <br/>
            
             <input type="Password"values={Password} onChange={(e)=>setPassword(e.target.value)}  className="form-control" placeholder="Password" required/>
             <br/>
           <button >
           <input type="Submit"/> 
           </button>
             </form>
         </div>   
        )
}
export default Signup