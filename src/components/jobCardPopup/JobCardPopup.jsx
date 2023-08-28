import React from 'react';
import "./style.scss";
import { Button } from '@mui/material';
import ButtonOnly from '../button/ButtonOnly';
import { useDispatch } from 'react-redux';
import { getEmployerDetails } from '../../store/homeSlice';
import LeftCardPopup from './leftCardPopup/LeftCardPopup';
import RightCardPopup from './rightCardPopup/RightCardPopup';

const JobCardPopup = ({ setEmployerDetails }) => {
    const dispatch = useDispatch();
    const handlePosition = (e) => {
        if (e.target.className === 'job-card-popup') {
            setEmployerDetails(false);
            dispatch(getEmployerDetails(null))
        }

    }
    const handleApply = () => {
        console.log("click");
    }
    return (
        <div className='job-card-popup' onClick={handlePosition}>
            <div className='popup-card'>
                <div className='employer-details'>
                    <LeftCardPopup />
                    <RightCardPopup />
                </div>
                <div className='candidate-action'>
                    <Button>Not Interested</Button>
                    <ButtonOnly name="Apply" handleClick={handleApply} />
                </div>
            </div>
        </div>
    )
}

export default JobCardPopup