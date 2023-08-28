import React, { useState } from 'react';
import "./style.scss";
import { Button, Checkbox } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import { FormControl, FormLabel, FormGroup, FormControlLabel } from "@mui/material";

const JobSortBy = () => {
    const [sortPopUp, setSortPopUp] = useState(false);
    const [sort, setSort] = useState({
        relevant: true,
        date_posted: false,
        no_employees: false
    })
    const handlePopUP = () => {
        setSortPopUp(!sortPopUp);
    }
    const { relevant, date_posted, no_employees } = sort;
    const handleSort = (e) => {
        console.log(e.target.name);
        setSort({
            ...sort,
            [e.target.name]: e.target.checked
        })
    }
    return (
        <div className='job-sort'>
            <span className='text-sort'>Showing 1 - 30 out of 3577
                jobs that match your search</span>
            <Button className='btn-sort' onClick={handlePopUP}>
                <span className='sort-by'>Sort by </span>
                <FaAngleDown />
            </Button>
            {
                sortPopUp && (
                    <div className='popup'>
                        <FormControl>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={relevant} onChange={handleSort} name="relevant" />} label="Relevant" />
                                <FormControlLabel control={<Checkbox checked={date_posted} onChange={handleSort} name="date_posted" />} label="Date Posted" />
                                <FormControlLabel control={<Checkbox checked={no_employees} onChange={handleSort} name="no_employees" />} label="No. of employees" />
                            </FormGroup>
                        </FormControl>
                    </div>
                )
            }


        </div>
    )
}

export default JobSortBy;