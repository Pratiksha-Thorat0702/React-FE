import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
//import img2 from './images/un.png';
//import img3 from './images/password.png';
import './SignIn.css'


function SignIn()
{


    const [UserName,setName]=useState("");
    const [Password,setPassword]=useState("");
    const history=useHistory();

    async function Login(){
        console.warn(UserName,Password)

      {/*  var t2=document.getElementById("t2");
        if(t2==true){
            alert("login sucess");
        }
        else{
            alert("fail");
        }*/}
        let item={UserName,Password}

        let result =await fetch("http://localhost:5000/api/signIn" ,{
            method:'POST',
          //  body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
                       
            }

        })
        result=await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/Home")
    } 

    return(
    
    <div className='col-sm-6-offset-sm-3'>
             <h1>SignIn Here!!</h1>
            
            <input type="text" values={UserName} onChange={(e)=>setUserName(e.target.value)} placeholder="UserName" className="UserName" />
            <br/>
            
             <input type="text"values={Password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="Paasword" />
             <br/>
             <buttton id="t2" onClick={Login} className="btn btn-primary">SignIn</buttton>
         </div>   
        )
}
export default SignIn