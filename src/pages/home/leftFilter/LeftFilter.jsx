import React, { useState } from 'react';
import "./style.scss";
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SearchFilter from './searchFilter/SearchFilter';
import Status from './Status';
import Location from "./Location";
import Company from "./Company";
import Industry from './Industry';
import SearchForm from '../../../components/searchForm/SearchForm';


const LeftFilter = () => {

    const [dropdown, setDropdown] = useState(false);
    const handleSearch = (e) => {
        setDropdown(!dropdown);
    }
    return (
        <div className='left'>
            <ContentWrapper>
                <SearchFilter
                    dropdown={dropdown}
                    setDropdown={setDropdown}
                    handleSearch={handleSearch}
                />
                {
                    !dropdown ? (
                        <>
                            <Status />
                            <Location />
                            <Company />
                            <Industry />
                        </>
                    ) : ""
                }

            </ContentWrapper>
        </div>
    )
}

export default LeftFilter;