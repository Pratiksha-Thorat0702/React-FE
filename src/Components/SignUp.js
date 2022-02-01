import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
//import img2 from './images/un.png';
//import img3 from './images/password.png';
import './SignUp.css'

function Signup()

{
    const [UserName,setUserName]=useState("");
    const [ActualName,setAcutalName]=useState("");
    const [PassWord,setPassWord]=useState("");
    const[Errors,setErrors]=useState("")
    const[isRegister,setisRegister]=useState(false);

    const history=useHistory();
    async function Register(){
        
        let item={UserName,AcutalName,PassWord}
        console.log(item);
        console.warn(item)
        setisRegister(true);
        let result =await fetch("http://localhost:5000/api/signup",{
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
       const regex=/^[^\s@]+[^\s@]+\.[^\s@]{2,}$/i;
        if(!value.UserName){
            Errors.UserName="enter Usename";
        }
        if(!value.ActualName){
            Errors.ActualName="enter Usename";
        }
        if(!value.PassWord){
            Errors.PassWord="enter password";
        }
        return Errors;
    }
    return(
    
    <div className='col-sm-6-offset-sm-3'>
             <h1>Sign Up Here!! </h1> <br/>
             <form onClick={Register} action='/Home'>
            
        <input type="text" values={UserName} onChange={(e)=>setUserName(e.target.value)}  className="form-control" placeholder="User Name" required/>
            <br/>
            <input type="text" values={ActualName} onChange={(e)=>setAcutalName(e.target.value)}  className="form-control" placeholder="Acutal Name" required/>
            <br/>
             <input type="Password"values={PassWord} onChange={(e)=>setPassWord(e.target.value)}  className="form-control" placeholder="Password" required/>
             <br/>
           <button >
           <input type="Submit"/> 
           </button>
             </form>
         </div>   
        )
}
export default Signup