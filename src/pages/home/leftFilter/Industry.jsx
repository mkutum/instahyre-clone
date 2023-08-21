import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import React, { useState } from 'react'

const Industry = () => {
    const [industry, setIndustry] = useState({
        all: true,
        animation: false,
        software: false,
        media: false,
    });
    const { all, animation, software, media } = industry;
    const handleIndustry = (e) => {
        setIndustry({
            ...industry, [e.target.name]: e.target.checked
        })
    };
    return (
        <div className="industry leftTabs">
            <FormControl className='formControl'>
                <FormLabel className='label'></FormLabel>
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={all} onChange={handleIndustry} name='all' />} label="All" />
                    <FormControlLabel control={<Checkbox checked={animation} onChange={handleIndustry} name='animation' />} label="Animation/Graphic/Design" />
                    <FormControlLabel control={<Checkbox checked={software} onChange={handleIndustry} name='software' />} label="Computer Software/IT/Internet" />
                    <FormControlLabel control={<Checkbox checked={media} onChange={handleIndustry} name='media' />} label="Media/Entertainment" />
                </FormGroup>
            </FormControl>
        </div>
    )
}

export default Industry;