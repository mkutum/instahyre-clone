import React from 'react';
import ButtonCustom from '../../../components/button/ButtonCustom';
import Skills from '../../../components/skills/Skills';

const RecommendedSkill = () => {
    const handleRecommended = () => {
        console.log("recommended");
    }
    const data = ["JavaScript", "Reactjs", "Analytical Skills", "Machine Learning", "Data Analysis", "Agile", "Teamwork", "Leadership", "Operations", "DSA", "Nodejs"];
    return (
        <div className="section trending">
            <ButtonCustom name="Recommended Skils" handleClick={handleRecommended} />
            <div className="skills">
                {
                    data.map((item, index) => <Skills key={index} skill={item} />)
                }
            </div>
        </div>
    )
}

export default RecommendedSkill;