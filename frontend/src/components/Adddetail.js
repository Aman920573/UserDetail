import React from 'react';
import { useNavigate } from 'react-router-dom';

const Adddetail = () => {
    const [name,setName]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [phone,setPhone]=React.useState("");
    const [error,setError]=React.useState(false);
    const navigate = useNavigate();
    const setEvent= async()=>{

        if(!name || !email || !phone){
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({name,email,phone,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result = await result.json();
        console.warn(result);
        navigate('/');
    }
    return (
        <div className='add-product-style'>
            <h1>Add product</h1>
            <input className='inputBox' type='text' placeholder='enter name'
            onChange={(e)=>{setName(e.target.value)}} value={name} />
            { error && ! name && <span className='span-add-box' >enter valid name </span>}
            <input className='inputBox' type='text' placeholder='enter email' 
            onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
            { error && !email && <span className='span-add-box' >enter valid email</span> }
            <input className='inputBox' type='text' placeholder='enter phone'
            onChange={(e)=>{setPhone(e.target.value)}} value={phone} />
            { error && !phone && <span className='span-add-box' >enter valid phone</span> }
            <button  className='signup-button' type='button' onClick={setEvent}>Adddetail</button>
        </div>
    );
}

export default Adddetail;