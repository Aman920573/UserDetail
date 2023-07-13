import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const Login=()=>{
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate('/');
        }
    },[])
    const handlebox= async ()=>{
        let result = await fetch('http://localhost:5000/login',{
            method : 'post',
            body : JSON.stringify({email , password}),
            headers:{
                'Content-Type':'application/json'
            },
        }); 
        result = await result.json()
        console.warn(result)
        if(result.name){
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/');
        }else{
            alert("provide correct details of user");
        }
    }
    return(
        <div className='login-box'>
        <input className='inputBox' type='text' value={email} placeholder='ente your email'
        onChange={(e)=>setEmail(e.target.value)} />
        <input className='inputBox' type='password' value={password} placeholder='enter your password'
        onChange={(e)=>setPassword(e.target.value)} />
        <button className='login-button' type='button' onClick={handlebox} >Login</button>
        </div>

    );
}

export default Login;
