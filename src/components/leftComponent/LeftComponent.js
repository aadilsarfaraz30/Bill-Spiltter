import React from 'react'
import './LeftComponent.css';
import Bill from './bill/Bill';
import Tips from './tips/Tips';
import People from './people/People';


const LeftComponent = () => {
    return (
        <div className="left-container">
           <Bill/>
           <Tips/>
           <People/>
        </div>
    )
}

export default LeftComponent
