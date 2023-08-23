import React from 'react';
import "./style.scss";
import { HiArrowSmRight } from "react-icons/hi";

const ButtonCustom = ({ name, handleClick }) => {
    return (
        <>
            <button onClick={handleClick} className='btn'>
                <span className='buttonTitle'>
                    {name}
                </span>
                <span className="icon">
                    <HiArrowSmRight />
                </span>
            </button>
        </>
    )
}

export default ButtonCustom;