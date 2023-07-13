import React, { useEffect } from 'react';
import {useParams , useNavigate} from 'react-router-dom';


const Updatedetail = () => {
    const [name,setName]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [phone,setPhone]=React.useState("");
    const navigate=useNavigate();
    const params = useParams();
    useEffect(()=>{
        getUserDetail();
    },[]);
    const getUserDetail=async ()=>{
        let result = await fetch('https://e-comserver1.onrender.com/delete-product/'+params.id);
        result = await result.json();
        setName(result.name);
        setEmail(result.email);
        setPhone(result.phone);
    }
    const updateEvent= async()=>{
        console.warn(name , email , phone);
        let result = await fetch('http://localhost:5000/product/'+params.id,{
            method:'Put',
            body:JSON.stringify({name,email,phone}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        navigate('/')
    }
    return (
        <div className='add-product-style'>
            <h1>Update Data</h1>
            <input className='inputBox' type='text' placeholder='enter name'
            onChange={(e)=>{setName(e.target.value)}} value={name} />
            
            <input className='inputBox' type='text' placeholder='enter email' 
            onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
           
            <input className='inputBox' type='text' placeholder='enter Phone'
            onChange={(e)=>{setPhone(e.target.value)}} value={phone} />
           
        
            <button  className='signup-button' type='button' onClick={updateEvent}>UpdateData</button>
        </div>
    );
}

export default Updatedetail;