import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Detail = () => {
    const [Detail, setDetail] = useState([]);

    useEffect(() => {
        selectDetail();
    }, []);
    const selectDetail = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setDetail(result);
    }
    console.warn(Detail);
    const delDetail=async (id)=>{
        let result = await fetch('http://localhost:5000/delete-product/'+id,{
            method:"Delete"
        })
        result = await result.json();
        if(result){
            selectDetail();
        }
    }

    const setListItem =async (event)=>{
        console.warn(event.target.value)
        let key = event.target.value;
        if(key){
        let result = await fetch('http://localhost:5000/search/'+key);
        result = await result.json();
        setDetail(result);
        }else{
            selectDetail();
        }
    }
    return (
        <div className='product-list' >
            <h1>Detail</h1>
            <input className='inputbox' type='text' placeholder='search product' 
            onChange={setListItem} />
            <ul className='product-l1'>
                <li className='list1'>s.no</li>
                <li className='list1'>Name</li>
                <li className='list1'>Email</li>
                <li className='list1'>Phone</li>
                <li className='list1'>operation</li>
            </ul>
            {
              Detail.length>0 ?  Detail.map((item, indx) =>
                    <ul className='product-l1' key={item._id}>
                        <li className='list1'>{indx+1}</li>
                        <li className='list1'>{item.name}</li>
                        <li className='list1'>{item.email}</li>
                        <li className='list1'>{item.phone}</li>
                        <li className='list1'><button onClick={()=>delDetail(item._id)} >Delete</button>
                        <Link to={"/update/"+item._id}>Update</Link></li>
                    </ul>
                )
                : <h1>NO RESULT FOUND</h1>
            }
        </div>
    );
}

export default Detail;