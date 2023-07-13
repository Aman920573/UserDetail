import React from 'react';
import {Link} from 'react-router-dom';

const Error = ()=>{
    return(
        <div className='error-box'>
            <h2 className='error-con'>
                Choose the Detail you wish to make changes , By clicking on the  list Below
            </h2>
            <Link className='link-page' to="/"> Detail of User's</Link>
        </div>
    );
}

export default Error;