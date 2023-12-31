import { createSlice } from "@reduxjs/toolkit";
const initialForm = [
    {
        skills: [
            { value: "reactjs", label: "Reactjs" },
            { value: "javascript", label: "Javascript" },
            { value: "nodejs", label: "Nodejs" },
            { value: "css", label: "Css" }
        ],
        jobs: [
            { value: "frontend", label: "Frontend" },
        ],
        industries: [
            { value: "software", label: "Software" },
        ],
        locations: [
            { value: "delhi", label: "Delhi" },
        ],
        companies: [
            { value: "instahyre", label: "Instahyre" },
        ],
        companySizes: [
            { value: "all", label: "All" }
        ],
        experiences: 2,
    },
]

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        searchForm: initialForm,
        employerDetails: null
    },
    reducers: {
        getSearchForm: (state, action) => {
            state.searchForm.push(action.payload);
        },
        getEmployerDetails: (state, action) => {
            state.employerDetails = action.payload;
        }
    }

});

export const { getSearchForm, getEmployerDetails } = homeSlice.actions;
export default homeSlice.reducer;