import React from 'react'

const Instamatch = () => {
    return (
        <div className='instamatch'>
            <div className='insta-text'>Your Instamatch score</div>
            <div className='progress'>
                <div className='match' style={{ width: '20%' }}></div>
            </div>
            <div className='mood'>Oops! Your Instamatch score is Low <span>😥</span></div>
            <div className='suggest'>Your chances of being shortlisted for this job are low. The InstaMatch score is calculated by using a large number of data points from your profile, this company's hiring patterns, and this recruiter's preferences for this role.</div>
        </div>
    )
}

export default Instamatch;