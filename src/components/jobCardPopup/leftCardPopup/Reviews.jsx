import React from 'react';
import { FaInfoCircle } from "react-icons/fa"
import { AiTwotoneStar } from "react-icons/ai";
export const review = [
    {
        id: 1,
        name: "Overall",
        rating: 4,
    },
    {
        id: 2,
        name: "Work-Life Balance",
        rating: 3.8,
    },
    {
        id: 3,
        name: "Salary and Benefits",
        rating: 3.6,
    },
    {
        id: 4,
        name: "Company Culture",
        rating: 4.1,
    },
    {
        id: 5,
        name: "Career Growth",
        rating: 4
    },
    {
        id: 6,
        name: "Diversity and Inclusion",
        rating: 4
    },
    {
        id: 7,
        name: "Will Recommend to Friends",
        rating: 4.2
    }


]
const Reviews = () => {
    return (
        <div className='reviews'>
            <div className='review-title'>
                <span>Employee reviews </span>
                <FaInfoCircle />
            </div>
            {
                review.map((item, index) => (
                    <div className='review-row' key={index}>
                        <div className='review-label'>{item.name}</div>
                        <div className='review-star'>
                            <span className='stars'>
                                <AiTwotoneStar style={{ color: "#ecbd41" }} />
                                <AiTwotoneStar style={{ color: "#ecbd41" }} />
                                <AiTwotoneStar style={{ color: "#ecbd41" }} />
                                <AiTwotoneStar style={{ color: "#ecbd41" }} />
                                <AiTwotoneStar style={{ color: "#D1D1D1" }} />
                            </span>

                            <span className='star-rates'>{item.rating}</span>
                        </div>
                    </div>))
            }
        </div>
    )
}

export default Reviews;