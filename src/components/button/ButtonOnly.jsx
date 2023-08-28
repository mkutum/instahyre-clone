import React from 'react';
import "./style.scss";
import { Button } from '@mui/material';

const ButtonOnly = ({ name, handleClick }) => {
    return (
        <Button onClick={handleClick} className='button-only'>{name}</Button>
    )
}

export default ButtonOnly