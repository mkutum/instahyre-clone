import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, FormGroup } from '@mui/material';


const Status = () => {
    const [status, setStatus] = useState("undecided");
    const handleStatus = (e) => {
        setStatus(e.target.value);
    }
    return (
        <div className="status leftTabs">
            <FormControl className='filter-status formControl'>
                <FormLabel className='label'>Filter by status</FormLabel>
                <RadioGroup
                    name="controlled-radio-buttons-group"
                    value={status}
                    onChange={handleStatus}
                >
                    <FormControlLabel value="undecided" control={<Radio />} label="Undecided" />
                    <FormControlLabel value="interested" control={<Radio />} label="Interested" />
                    <FormControlLabel value="not interested" control={<Radio />} label="Not Interested" />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default Status;