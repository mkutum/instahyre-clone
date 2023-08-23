import React from 'react';
import ButtonCustom from '../../../components/button/ButtonCustom';
import { Button } from '@mui/material';

const SkillAssessment = () => {
    const handleAssessment = () => {
        console.log("assessment");
    }
    const data = ["JavaScript", "Reactjs", "Machine Learning", "Data Analysis", "Agile", "DSA", "Nodejs"];
    return (
        <div className="section trending">
            <ButtonCustom name="Skill Assessments" handleClick={handleAssessment} />
            <div className="skills">
                {
                    data.map((item, index) =>
                        <Button className='btn-cmn' key={index}>{item}</Button>
                    )
                }
            </div>
        </div>
    )
}

export default SkillAssessment;