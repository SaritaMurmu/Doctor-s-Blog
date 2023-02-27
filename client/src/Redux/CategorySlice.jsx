import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axiosInstance from '../API/APIUrl'                   // http://localhost:3002/api/

const initialState = ({
    categoryData: [],
    status: 'success'
})

export const fetchCategory = createAsyncThunk(
    "AllCategories/fetch",
    async () => {
        try {
            const res = await axiosInstance.get('allCategories')
            return res?.data
        } catch (error) {
            console.log(error)
        }
    })


export const CategorySlice = createSlice({
    name: 'Category',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchCategory.pending]: state => {
            state.status = "Loading..."
            state.categoryData = null
        },
        [fetchCategory.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.categoryData = payload
        },
        [fetchCategory.rejected]: state => {
            state.status = "rejected"
        },

    }
})