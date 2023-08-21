import React, { useEffect, useState, useRef } from 'react';
import "./style.scss";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import SearchForm from '../../../../components/searchForm/SearchForm';
import { getSearchForm } from '../../../../store/homeSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from "react-hook-form";


const SearchFilter = ({ dropdown, setDropdown, handleSearch }) => {
    const { searchForm } = useSelector(state => state.home);
    const [currListWidth, setCurrListWidth] = useState(0);
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    const searchListRef = useRef();
    const { control, handleSubmit, reset, formState: { isDirty, isValid } } = useForm(
        {
            defaultValues: {
                skills: searchForm[0].skills,
                jobs: searchForm[0].jobs,
                industries: searchForm[0].industries,
                locations: searchForm[0].locations,
                companies: searchForm[0].companies,
                companySizes: searchForm[0].companySizes,
                experiences: searchForm[0].experiences,
            }
        }
    );

    const navigation = (direction) => {
        const container = searchListRef.current;
        const scrollAmount = direction === "left" ? container.scrollLeft - 91 : container.scrollLeft + 91;
        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        })
    }
    const handleIncreaseSearch = () => {
        setIndex(index => index + 1);
        dispatch(getSearchForm({
            skills: [null],
            jobs: [null],
            industries: [null],
            locations: [null],
            companies: [null],
            companySizes: "All",
            experiences: 0,
        }));
        reset({
            skills: [null],
            jobs: [null],
            industries: [null],
            locations: [null],
            companies: [null],
            companySizes: [{ value: "all", label: "All" }],
            experiences: 0,
        });
        const listLength = searchListRef.current;
        let tempChild = listLength?.childNodes;
        let listWidthTemp = 91;
        tempChild.forEach((node) => {
            listWidthTemp = listWidthTemp + node.offsetWidth;
        });
        setCurrListWidth(listWidthTemp);
    }

    const handleList = (e) => {
        let target = e.target;
        setIndex(target.id * 1);
        const { left: childL, width: childW } = target.getBoundingClientRect();
        const { left: parentL, width: parentW } = target.parentElement.getBoundingClientRect();
        if (childL < parentL) {
            const container = searchListRef.current;
            const scrollAmount = container.scrollLeft - 91;
            container.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            })
        } else if ((childL + childW) > (parentW - 40)) {
            const container = searchListRef.current;
            const scrollAmount = container.scrollLeft + 91;
            container.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            })
        }
    }
    useEffect(() => {
        if (currListWidth > 278) {
            const container = searchListRef.current;
            const scrollAmount = container.scrollLeft + 27 + 90.609375;
            container.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            })
        }
    }, [currListWidth])
    return (
        <>
            <div className={`searchJobs leftTabs ${dropdown ? "border" : ""}`}>
                <button onClick={handleSearch} className={`${dropdown ? "active" : "nonactive"} searchTab`}>
                    <span className='buttonTitle'>
                        Search other jobs
                    </span>
                    <span className="icon">
                        {
                            dropdown ? <RiArrowUpSLine /> : <RiArrowDownSLine />
                        }
                    </span>
                </button>
                {
                    dropdown ? (
                        <div className="listItems">
                            {
                                currListWidth >= 278 ? (
                                    <>
                                        <span className='carouselLeftNav spanArrow' onClick={() => navigation("left")}>
                                            <IoMdArrowDropleft
                                                className=' arrow'

                                            />
                                        </span>
                                        <span className='carouselRightNav spanArrow' onClick={() => navigation("right")}>
                                            <IoMdArrowDropright
                                                className=' arrow'
                                            />
                                        </span>
                                    </>
                                ) : ("")
                            }

                            <ul ref={searchListRef} style={{ margin: currListWidth >= 278 ? "0 20.25px" : "" }}>
                                {
                                    searchForm.length ? (
                                        searchForm.map((item, i) => {
                                            return <li id={i} key={i} onClick={(e) => handleList(e)} style={{ background: index === i ? "white" : "" }}>New Search</li>
                                        })

                                    ) : (
                                        <li>New Search</li>
                                    )
                                }
                                <li onClick={(e) => handleIncreaseSearch(e)}>+</li>
                            </ul>
                        </div>
                    ) : ""
                }

                {
                    dropdown ? <SearchForm index={index} handleSubmit={handleSubmit} Controller={Controller} control={control} reset={reset} /> : ""
                }

            </div>
        </>
    )
}

export default SearchFilter;