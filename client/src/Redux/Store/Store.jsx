import { configureStore } from "@reduxjs/toolkit"

import { AuthSlice } from "../AuthSlice"
import { ServiceSlice } from "../ServiceSlice"
import { BlogSlice } from "../BlogSlice"
import { DoctorSlice } from "../DoctorSlice"
import { DepartmentSlice } from "../DepartmentSlice"
import { AppointmentSlice } from "../AppointmentSlice"
import { CategorySlice } from "../CategorySlice"

const Store = configureStore({
    reducer: {
        user: AuthSlice.reducer,
        serviceSlice: ServiceSlice.reducer,
        blogSlice: BlogSlice.reducer,
        categorySlice: CategorySlice.reducer,
        doctorSlice: DoctorSlice.reducer,
        departmentSlice: DepartmentSlice.reducer,
        appointmentSlice: AppointmentSlice.reducer
    }
})

export default Store