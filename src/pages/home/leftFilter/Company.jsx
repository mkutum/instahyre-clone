import React, { useState } from 'react';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from "@mui/material"

const Company = () => {
    const [company, setCompany] = useState({
        all: true,
        small: false,
        medium: false,
        large: false,
    });
    const { all, small, medium, large } = company;
    const handleCompany = (e) => {
        setCompany({
            ...company, [e.target.name]: e.target.checked
        })
    }

    return (

        <div className="company leftTabs">
            <FormControl className='formControl'>
                <FormLabel className='label'>Filter by Company size</FormLabel>
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={all} onChange={handleCompany} name="all" />} label="All" />
                    <FormControlLabel control={<Checkbox checked={small} onChange={handleCompany} name='small' />} label="Small" />
                    <FormControlLabel control={<Checkbox checked={medium} onChange={handleCompany} name='medium' />} label="Medium" />
                    <FormControlLabel control={<Checkbox checked={large} onChange={handleCompany} name='large' />} label="large" />
                </FormGroup>
            </FormControl>
        </div>
    )
}

export default Company;