
import React from 'react';

const Myheader=()=>{
    return (
        <>
     <div className='HeaderSection'>
     <div className='left'>
        <div className='title'>
                <h2>hello shoping</h2>
        </div>
     </div>
     <div className='center'>
        <ul>
            <li>women</li>
            <li>men</li>
            <li>kids</li>
        </ul>
     </div>
     <div className='search'>
        <input type='text' placeholder='search....'/>
     </div>
     <div className='right'>
        <div className='signin'>
            siginin/signup
        </div>
        <div className='cart'>
            Cart
        </div>
     </div>
     </div>
     
        </>
    )
}
export default Myheader;