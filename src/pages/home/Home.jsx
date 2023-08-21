import React from 'react';
import "./style.scss";
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import LeftFilter from "./leftFilter/LeftFilter";
import RightFilter from "./rightFilter/RightFilter";
import JobCards from "./jobCards/JobCards";

const Home = () => {
    return (
        <div className='home'>
            <ContentWrapper>
                <LeftFilter />
                <JobCards />
                <RightFilter />
            </ContentWrapper>
        </div>
    )
}

export default Home;