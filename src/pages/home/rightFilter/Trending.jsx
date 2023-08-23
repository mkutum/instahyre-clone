import React from 'react';
import ButtonCustom from "../../../components/button/ButtonCustom";
import Skills from '../../../components/skills/Skills';

const Trending = () => {
    const handleTrending = () => {
        console.log("trending");
    }
    const data = ["Artificial Intelligence", "Machine Learning", "Data Analysis", "Agile Methodology", "JavaScript", "React.js", "Java", "Python Developer", "Software Developer"];
    return (
        <div className="section trending">
            <ButtonCustom name="Trending Skills" handleClick={handleTrending} />
            <div className="skills">
                {
                    data.map((item, index) => <Skills key={index} skill={item} />)
                }

            </div>
        </div>

    )
}

export default Trending