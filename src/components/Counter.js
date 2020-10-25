import React, { useState } from 'react'

import './Counter.css';


function Counter() {
    // let count = 400;
    const [count, setCount] = useState(0);

    function handleClick(diff) { 
        setCount(count + diff);    
    }

    return (
    <div className="container">
        <button onClick={ () => handleClick(1) } className="btn" >+</button>
        <button onClick={ () => handleClick(-1) } className="btn" >-</button>
        <strong className="output">{ count }</strong>
    </div>
    )
}

export default Counter;