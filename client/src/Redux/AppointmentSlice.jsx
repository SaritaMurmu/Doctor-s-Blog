import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axiosInstance from '../API/APIUrl'                   // http://localhost:3002/api/

const initialState = ({
    appointmentData: [],
    status: 'success'
})

export const fetchAppointment = createAsyncThunk(
    "Appointments/fetch",
    async () => {
        try {
            const response = await axiosInstance.get('allAppointments')
            // console.log(`Appointments's fetch API response: ${response.data}`)
            return response?.data
        } catch (error) {
            console.log(error)
        }
    })

export const postAppointment = async data => {
    try {
        const response = await axiosInstance.post('createAppointment', data)
        console.log(`Appointments's POST API response: ${response.data}`)
    } catch (error) {
        console.log(error)
    }
}

export const AppointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducer: {},
    extraReducers: {
        // All Appointments
        [fetchAppointment.pending]: state => {
            state.status = "loading..."
            state.appointmentData = null
        },
        [fetchAppointment.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.appointmentData = payload
            // console.log('', payload)
        },
        [fetchAppointment.rejected]: state => {
            state.status = "rejected"
        }
    }
})