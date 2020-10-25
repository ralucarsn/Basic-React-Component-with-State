import React, { useState } from 'react';



function Homework1() {
    let arrColors = ['#00FF00', '#CCEEFF ', '#FFFF00'];
    const [color, setColor] =  useState('#00FF00');

    function handleChange() {
        setColor(arrColors);
        
    }

    return(
        <div >
            <strong >{ 'Currently Selected Colors:' + color}</strong>
            <button onClick={ () => handleChange(color) }>Change Color</button>
        </div>
    )
}

export default Homework1;

