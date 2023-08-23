import React from 'react';
import "./style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import JobSortBy from '../../../components/jobSortBy/JobSortBy';
import Card from '../../../components/card/Card';
import { job } from "../../../data";

const JobCards = () => {
    return (
        <div className='middle'>
            <ContentWrapper>
                <JobSortBy />
                <div className='job-cards'>
                    {
                        job.map((employer, index) => <Card employer={employer} key={index} />)
                    }
                </div>
            </ContentWrapper>
        </div>
    )
}

export default JobCards;