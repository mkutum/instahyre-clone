import React from 'react';
import ButtonCustom from '../../../components/button/ButtonCustom';
import Skills from '../../../components/skills/Skills';

const TopRecruiter = () => {
    const handleTopRecruiter = () => {
        console.log("recruiters");
    }
    const data = ["AMAZON", "Deloitte", "Infosys Limited", "Randstad India", "Wipro", "HCL Tech", "ICICI Bank", "IBM", "Instahyre", "Citigroup", "Accenture", "Reliance Jio"]
    return (
        <div className="section trending">
            <ButtonCustom name="Top Companies Recruiting" handleClick={handleTopRecruiter} />
            <div className="skills">
                {
                    data.map((item, index) => <Skills skill={item} key={index} />)
                }
            </div>
        </div>
    )
}

export default TopRecruiter;