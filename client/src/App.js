import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { lazy, Suspense, useEffect } from 'react'

import { check_token, setUser } from './Redux/AuthSlice'

import Navbar from './Component/Common/Nav'
import Home from './Pages/Home'
import About from './Pages/About'
import Appointment from './Pages/Appointment'
import Blog from './Pages/Blog'
import BlogSingle from './Pages/BlogSingle'
import Confirmation from './Pages/Confirmation'
import Contact from './Pages/Contact'
import Department from './Pages/Department'
import DepartmentSingle from './Pages/DepartmentSingle'
import Doctors from './Pages/Doctors'
import DoctorSingle from './Pages/DoctorSingle'
import Service from './Pages/Service'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Footer from './Component/Common/Footer'

function App() {

    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("userdata"))

    useEffect(() => {
        dispatch(setUser(user))
    }, [])

    function PrivateRoute({ children }) {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token")
        return token !== null && token !== undefined ? (children) : (<Navigate to="/login" />)
    }

    const PublicRouteNames = [
        { path: '/', Component: <Home /> },
        { path: '/about', Component: <About /> },
        { path: '/confirmation', Component: <Confirmation /> },
        { path: '/department', Component: <Department /> },
        { path: '/departmentSingle', Component: <DepartmentSingle /> },
        { path: '/doctors', Component: <Doctors /> },
        { path: '/doctorSingle/:name', Component: <DoctorSingle /> },
        { path: '/service', Component: <Service /> },
        { path: '/contact', Component: <Contact /> },
        { path: '/register', Component: <Register /> },
        { path: '/login', Component: <Login /> }
    ]

    const PrivateRouteNames = [
        { path: '/appointment', Component: <Appointment /> },
        { path: '/blog', Component: <Blog /> },
        { path: '/blogSingle/:id', Component: <BlogSingle /> }

        // { path: '/blog-details/:id', Component: <BlogDetails /> }
    ]

    useEffect(() => {
        dispatch(check_token())
    }, [])

    return (
        <>
            <Suspense fallback={<h1> Loading </h1>}>
                <Router>
                    <Navbar />
                    <Routes>
                        {/* Public Routes */}
                        {
                            PublicRouteNames.map((route, index) => {
                                return (
                                    <Route Key={index + 1} exact path={route.path} element={route?.Component} />
                                )
                            })
                        }

                        {/* Protected Routes */}
                        {
                            PrivateRouteNames?.map((route, index) => {
                                return (
                                    <Route path={route.path} element={<PrivateRoute> {route?.Component} </PrivateRoute>} />
                                )
                            })
                        }
                    </Routes>
                    <Footer />
                </Router>
            </Suspense>
        </>
    )
}

export default App