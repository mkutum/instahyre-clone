import React, { useState } from 'react';
import { FormControl, FormControlLabel, Checkbox, FormGroup, FormLabel } from "@mui/material"

const Location = () => {
    const [location, setLocation] = useState({
        all: true,
        bangalore: false,
        gurgaon: false
    });
    const { all, bangalore, gurgaon } = location;

    const handleLocation = (e) => {
        setLocation({
            ...location, [e.target.name]: e.target.checked
        });
    }
    return (
        <div className="location leftTabs ">
            <FormControl className='formControl'>
                <FormLabel className='label'>Filter by location</FormLabel>
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={all} onChange={handleLocation} name='all' />} label="All" />
                    <FormControlLabel control={<Checkbox checked={bangalore} onChange={handleLocation} name='bangalore' />} label="Bangalore" />
                    <FormControlLabel control={<Checkbox checked={gurgaon} onChange={handleLocation} name='gurgaon' />} label="Gurgaon" />
                </FormGroup>
            </FormControl>
        </div>
    )
}

export default Location;