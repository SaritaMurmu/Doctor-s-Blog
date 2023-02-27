import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axiosInstance from '../API/APIUrl'                   // http://localhost:3002/api/

const initialState = ({
    doctorData: [],
    status: 'success'
})

export const fetchDoctor = createAsyncThunk(
    "Doctors/fetch",
    async () => {
        try {
            const res = await axiosInstance.get('alldoctors')
            return res?.data
        } catch (error) {
            console.log(error)
        }
    })

export const DoctorSlice = createSlice({
    name: 'doctor',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchDoctor.pending]: state => {
            state.status = "loading..."
            state.doctorData = null
        },
        [fetchDoctor.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.doctorData = payload
            // console.log('---------------------------------------------------------------', payload)
        },
        [fetchDoctor.rejected]: state => {
            state.status = "rejected"
        }
    }
})