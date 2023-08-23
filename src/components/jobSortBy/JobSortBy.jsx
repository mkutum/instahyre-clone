import React from 'react';
import "./style.scss";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";

const JobSortBy = () => {
    return (
        <div className='job-sort'>
            <span className='text-sort'>Showing 1 - 30 out of 3577
                jobs that match your search</span>
            <Button className='btn-sort'>
                <span className='sort-by'>Sort by </span>
                <FaAngleDown />
            </Button>

        </div>
    )
}

export default JobSortBy;