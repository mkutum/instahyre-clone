import React from 'react';
import "./style.scss";
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Trending from "./Trending";
import TopRecruiter from "./TopRecruiter";
import RecommendedSkill from "./RecommendedSkill";
import SkillAssessment from "./SkillAssessment";

const RightFilter = () => {

    return (
        <div className='right'>
            <ContentWrapper>
                <Trending />
                <TopRecruiter />
                <RecommendedSkill />
                <SkillAssessment />
            </ContentWrapper>
        </div>
    )
}

export default RightFilter;