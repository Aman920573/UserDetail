import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    });
    const collectData = async () => {
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/')
    }
    return (
        <div className='signup-box'>
            <h3>Register component</h3>
            <input className='inputBox' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='enter name' />
            <input className='inputBox' type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter email' />
            <input className='inputBox' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter password' />
            <button className='signup-button' onClick={collectData} type='button'>Signup</button>
        </div>
    );
}

export default Signup;