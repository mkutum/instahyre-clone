import React, { useState } from 'react';
import "./style.scss";
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import LeftFilter from "./leftFilter/LeftFilter";
import RightFilter from "./rightFilter/RightFilter";
import JobCards from "./jobCards/JobCards";
import JobCardPopup from '../../components/jobCardPopup/JobCardPopup';


const Home = () => {
    const [employerDetails, setEmployerDetails] = useState(false);
    const handleEmployer = (e) => {
        // console.log(id)
        setEmployerDetails(!employerDetails);

    }
    return (
        <div className='home'>
            {
                employerDetails ? (
                    <JobCardPopup handleEmployer={handleEmployer} employerDetails={employerDetails} setEmployerDetails={setEmployerDetails} />
                ) : (
                    <ContentWrapper>
                        <LeftFilter />
                        <JobCards handleEmployer={handleEmployer} />
                        <RightFilter />
                    </ContentWrapper>
                )
            }

        </div>
    )
}

export default Home;