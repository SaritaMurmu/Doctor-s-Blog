import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axiosInstance from '../API/APIUrl'                   // http://localhost:3002/api/

const initialState = ({
    serviceData: [],
    status: 'success'
})

export const fetchService = createAsyncThunk(
    "Services/fetch",
    async () => {
        try {
            const res = await axiosInstance.get('allServices')
            return res?.data
        } catch (error) {
            console.log(error)
        }
    })

export const ServiceSlice = createSlice({
    name: 'service',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchService.pending]: state => {
            state.status = "loading..."
            state.serviceData = null
        },
        [fetchService.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.serviceData = payload
            // console.log('---------------------------------------------------------------', payload)
        },
        [fetchService.rejected]: state => {
            state.status = "rejected"
        }
    }
})