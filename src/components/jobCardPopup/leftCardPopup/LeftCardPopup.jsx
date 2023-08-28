import React from 'react';
import "./style.scss";
import Img from '../../laziLoadImage/Img';
import { job } from "../../../data";
import { useSelector } from 'react-redux';
import EmployerLinks from './EmployerLinks';
import Instamatch from './Instamatch';
import Reviews from './Reviews';

const LeftCardPopup = () => {
    const { employerDetails } = useSelector(state => state.home);
    return (
        <div className='left-pop-card'>
            <div className='logo-place'>
                <Img
                    src={job[employerDetails - 1].logo}
                />
            </div>
            <div className='employer-brief'>
                <span className='eb title-glance'>{job[employerDetails - 1].title.split("-")[0] + " at a glance"}</span>
                <span className='eb company-founded'>{job[employerDetails - 1].founded.split("•")[0]}</span>
                <span className='eb company-size'>{job[employerDetails - 1].founded.split("•")[1]}</span>
            </div>
            <EmployerLinks />
            <Instamatch />
            <Reviews />
        </div>
    )
}

export default LeftCardPopup;