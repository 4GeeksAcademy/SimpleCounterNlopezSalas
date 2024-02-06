import { propTypes } from "prop-types";
import React from "react";


const Counter = (props) => {
    
    return (
        <div className='bigCounter d-flex justify-content-center pt-5 pb-5 bg-black'>
            <div className='icon p-5 border border-secondary rounded-2 me-2 bg-black text-white '><i className="far fa-clock"></i></div>
            <div className='six p-5 border border-secondary rounded-2 me-2 bg-black text-white ' >{props.digitSix}</div>
            <div className='five p-5 border border-secondary rounded-2 me-2 bg-black text-white '>{props.digitFive}</div>
            <div className='four p-5 border border-secondary rounded-2 me-2 bg-black text-white '>{props.digitFour}</div>
            <div className='three p-5 border border-secondary rounded-2 me-2 bg-black text-white '>{props.digitThree}</div>
            <div className='two p-5 border border-secondary rounded-2 me-2 bg-black text-white '>{props.digitTwo}</div>
            <div className='one p-5 border border-secondary rounded-2 bg-black text-white '>{props.digitOne}</div>
        </div>

    )};

        

export default Counter;