import React from 'react';
import "./style.scss";
import Img from '../laziLoadImage/Img';
import GameBerry from "../../assets/gameberry.png";
import Skills from '../skills/Skills';
import { HiUserGroup } from "react-icons/hi";
import { ImLocation } from "react-icons/im"
import { Button } from '@mui/material';
import { FiChevronsRight } from "react-icons/fi";

const Card = ({ employer }) => {
    return (
        <div className='card-box'>
            <div className='logo'>
                <Img
                    src={employer.logo}
                    className="img-align"
                />
            </div>
            <div className='company-details'>
                <div className='job-title'>{employer.title}</div>
                <div className="job-type">
                    <span className='icon'>
                        <ImLocation />
                    </span>
                    <span className='type'>{employer.location}</span>
                </div>
                <div className="company-founded">
                    <span className='icon'>
                        <HiUserGroup />
                    </span>
                    <span className='founded'>{employer.founded}</span>
                </div>
                <div className="details">
                    {employer.details}
                </div>
                <div className="job-department">
                    {
                        employer.depart.map((item, index) => <Skills skill={item} key={index} />)
                    }
                </div>
            </div>
            <div className='actions'>

                <Button className='btn-view'>
                    View <FiChevronsRight />
                </Button>
                <span className='btn-text'>
                    Not Interested
                </span>

            </div>
        </div>
    )
}

export default Card;