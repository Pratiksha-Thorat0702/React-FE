import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
//import img2 from './images/un.png';
//import img3 from './images/password.png';
import './SignIn.css'

function Signup()

{
    const [UserName,setName]=useState("");
    const [Password,setPassword]=useState("");
    const history=useHistory();

    async function Register(){
        var t2=document.getElementById("t2");
        if(t2==true){
            alert("login sucess");
        }
        else{
            alert("fail");
        }
        let item={UserName,Password}
        console.warn(item)
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
    }

    return(
    
    <div className='col-sm-6-offset-sm-3'>
             <h1>SignUp page</h1>
            
            <input type="text" values={UserName} onChange={(e)=>setName(e.target.value)} placeholder="UserName" className="UserName" />
            <br/>
            
             <input type="text"values={Password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="Paasword" />
             <br/>
             <buttton id="t2" onClick={Register} className="btn btn-primary">SignUp</buttton>
         </div>   
        )
}
export default Signup