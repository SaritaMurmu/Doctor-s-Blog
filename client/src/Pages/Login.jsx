import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { handleLogoutName, loginUser, reset_redirectTo, loggedInEmail, loggedInPassword } from '../Redux/AuthSlice'

const Login = () => {

    const navigate = useNavigate()
    const { redirectToLogin, isLoggedInName } = useSelector(state => state.user)

    const initialValue = {
        email: "",
        password: ""
    }

    const register = () => {
        dispatch(handleLogoutName())
        navigate("/register")
    }

    useEffect(() => {
        dispatch(reset_redirectTo(null))
    }, [redirectToLogin])

    const { redirectTo } = useSelector((state) => state.user)
    const [user, setUser] = useState(initialValue)
    const [error, setError] = useState({})
    const dispatch = useDispatch()

    const validation = () => {
        let error = {}
        if (!user.email) {
            error.email = "Email Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
        ) {
            error.email = "Enter a valid Email"
        }
        if (!user.password) {
            error.password = "Password Required"
        }
        return error
    }

    const RedirectUser = () => {
        let token = localStorage.getItem("token")
        let isInLoginPage = window.location.pathname.toLowerCase() === "/login"

        if (token !== null && token !== undefined && token !== "") {
            // window.location.pathname = getPathname
            isInLoginPage && navigate("/")
        }
    }

    useEffect(() => {
        RedirectUser()
    }, [redirectTo])

    let name, value
    const postUserData = e => {
        name = e.target.name
        value = e.target.value

        setUser({ ...user, [name]: value })
        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "@Email is required" })
                setUser({ ...user, email: "" })
            } else {
                setError({ ...error, email: "" })
                setUser({ ...user, email: value })
            }
        }

        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "@Password is Required" })
                setUser({ ...user, password: "" })
            } else {
                setError({ ...error, password: "" })
                setUser({ ...user, password: value })
            }
        }
    }

    const SubmitInfo = async e => {
        e.preventDefault()
        let ErrorList = validation()
        setError(validation())

        let data = {
            "email": user.email,
            "password": user.password
        }

        if (Object.keys(ErrorList).length === 0) {
            dispatch(loginUser(data))
            navigate('/')
        }

    }

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navigation" id="navbar">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="./Assets/images/cure-and-care-logo.png" alt="" className="img-fluid" style={{ height: '2em' }} />
                        </a>

                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain"
                            aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icofont-navigation-menu"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarmain">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="/service">Services</a></li>
                                <li className="nav-item"><a className="nav-link" href="/department">Department</a></li>
                                <li className="nav-item"><a className="nav-link" href="/doctors">Doctors</a></li>
                                <li className="nav-item"><a className="nav-link" href="/appointment">Appointment</a></li>
                                <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                                <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <hr />

            {/* <h1 className='text-uppercase text-center mt-5 letter-spacing'> Login </h1> */}

            <div className="container" style={{ height: '42em', marginTop: '5em' }}>
                <form className="row g-3">
                    <div className="card text-center m-auto bg-light" style={{ width: '30em' }}>

                        <div className="card-header text-uppercase letter-spacing bg-primary text-light">
                            Login
                        </div>
                        <div className="card-body">

                            <img src="./Assets/images/team/5.png" alt="Hello" style={{ borderRadius: '50%', margin: '2em' }} height='100px' width='100px' />

                            <div className="mb-4 text-left">
                                {/* <label htmlFor="inputEmail4" className="form-label"> Email </label> */}
                                <input type="email" className="form-control" placeholder='Email ID' name="email" value={user.email} onChange={e => postUserData(e)} style={{ borderRadius: '10px', width: '25em', margin: 'auto', border: 'none' }} />
                                <span style={{ color: "red", marginLeft: '3.5em' }}> {error.email} </span>
                            </div>
                            <div className="mb-4 text-left">
                                {/* <label htmlFor="inputPassword4" className="form-label"> Password </label> */}
                                <input type="password" className="form-control" placeholder='Password' name="password" value={user.password} onChange={e => postUserData(e)} style={{ borderRadius: '10px', width: '25em', margin: 'auto', border: 'none' }} />
                                <span style={{ color: "red", marginLeft: '3.5em' }}> {error.password} </span>
                            </div>
                            <a href="#" className="btn btn-primary mt-3" onClick={SubmitInfo}> Sign In </a>
                        </div>
                        <div className="card-footer text-muted" style={{ cursor: 'default' }}>
                            Don't have an account? <b onClick={register} style={{ cursor: 'pointer' }} className='text-primary'> Register </b>
                        </div>

                    </div>
                </form>

            </div>

        </div>
    )
}

export default Login