import React, { useEffect, useState } from 'react';
import "./style.scss";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
const animatedComponents = makeAnimated();




const SearchForm = ({ index, handleSubmit, Controller, control, reset }) => {
    const { searchForm } = useSelector(state => state.home)
    // console.log("new", index);

    const [search, setSearch] = useState({
        skills: [
            { value: "reactjs", label: "Reactjs" },
            { value: "javascript", label: "Javascript" },
            { value: "nodejs", label: "Nodejs" },
            { value: "css", label: "Css" }
        ],
        jobs: [],
        industries: [],
        locations: [],
        companies: [],
        companySizes: [
            { value: "all", label: "All" },
            { value: "small", label: "Small" },
            { value: "large", label: "Large" },
            { value: "medium", label: "Medium" }
        ],
        experiences: "",
    })
    const onSubmit = (data) => {
        console.log(data);
    }
    // console.log(searchForm[index].skills, index);
    useEffect(() => {
        reset({
            skills: searchForm[index].skills,
            jobs: searchForm[index].jobs,
            industries: searchForm[index].industries,
            locations: searchForm[index].locations,
            companies: searchForm[index].companies,
            companySizes: searchForm[index].companySizes,
            experiences: searchForm[index].experiences,
        })
    }, [index])
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='searchForm'>
                <div className='noDrop'>
                    <label>Skills or Title</label>
                    <Controller
                        name='skills'
                        control={control}
                        render={({ field: { value, onChange } }) => (

                            <Select
                                components={animatedComponents}
                                placeholder="Enter skills or title, e.g Java, C++"
                                isMulti
                                options={search.skills}
                                value={value}
                                onChange={onChange}
                            />
                        )}

                    />
                </div>
                <div className='noDrop'>
                    <label>Job Functions</label>
                    <Controller
                        name='jobs'
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <Select
                                components={animatedComponents}
                                placeholder="Search job functions"
                                isMulti
                                options={search.jobs}
                                value={value}
                                onChange={onChange}
                            />
                        )}

                    />
                </div>
                <div className='noDrop'>
                    <label>Industries</label>
                    <Controller
                        name='industries'
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <Select
                                components={animatedComponents}
                                placeholder="Select Industries"
                                isMulti
                                options={search.industries}
                                value={value}
                                onChange={onChange}
                            />
                        )}

                    />
                </div>
                <div className='noDrop'>
                    <label>Locations</label>
                    <Controller
                        name='locations'
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <Select
                                components={animatedComponents}
                                placeholder="Select cities e.g. Bangalore, Delhi"
                                isMulti
                                options={search.locations}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                </div>
                <div className='noDrop'>
                    <label>Companies</label>
                    <Controller
                        name='companies'
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <Select
                                components={animatedComponents}
                                placeholder="Enter companies e.g Amazon"
                                isMulti
                                options={search.companies}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />

                </div>
                <div>
                    <label>Company Size</label>
                    <Controller
                        name='companySizes'
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <Select
                                components={animatedComponents}
                                options={search.companySizes}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                </div>
                <div>
                    <label>Experience (in years)</label>
                    <Controller
                        control={control}
                        name='experiences'
                        render={({ field: { value, onChange } }) => (
                            <input
                                className='experience'
                                type='number'
                                value={value}
                                onChange={onChange}
                                min={0}
                                placeholder='e.g. 4'
                            />
                        )}

                    />
                </div>
                <div className='searchBtn'>
                    <Button className='save'>Save</Button>
                    <Button variant="contained" type='submit'> Submit</Button>
                </div>

            </form>
        </>
    )
}

export default SearchForm