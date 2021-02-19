import React, { useState } from 'react';

function Counter(props) {
    const defaultvalue = 0
    const[stateVal,setStateVal] =useState(defaultvalue);
    
    return (
        <div>
            <div className='countervalue'><h2>{stateVal}</h2></div>

            <div className='oddeven'>
            {
                stateVal%2 === 0 ? 
                <span className='Even-Number'>The Counter Value is - Even Number</span>
                : <span className='Odd-Number'>The Counter Value is - Odd number</span>
            }
            </div>
            
            <div className='counter-cards'>
            <div className='increement'><button onClick={()=>setStateVal(prevState=>prevState+1)}>+</button></div>
            <div className='reset'><button onClick={()=>setStateVal(defaultvalue)}>Reset</button></div>
            <div className='decreement'><button onClick={()=>setStateVal(prevState=>prevState-1)}>-</button></div>
            </div>
            
        </div>
    );
}

export default Counter;