import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axiosInstance from '../API/APIUrl'                   // http://localhost:3002/api/

const initialState = ({
    departmentData: [],
    singleDepartmentData: {},
    status: 'success'
})

export const fetchDepartment = createAsyncThunk(
    "Departments/fetch",
    async () => {
        try {
            const response = await axiosInstance.get('allDepartments')
            console.log(`Department's API response:  ${response.data}`)
            return response?.data
        } catch (error) {
            console.log(error)
        }
    })

export const DepartmentSlice = createSlice({
    name: 'department',
    initialState,
    reducer: {},
    extraReducers: {
        // All Departments
        [fetchDepartment.pending]: state => {
            state.status = "loading..."
            state.departmentData = null
            state.singleDepartmentData = null
        },
        [fetchDepartment.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.departmentData = payload
            state.singleDepartmentData = payload
            // console.log('', payload)
        },
        [fetchDepartment.rejected]: state => {
            state.status = "rejected"
        }
    }
})