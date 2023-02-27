import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { registerUser } from '../Redux/AuthSlice'

const Register = () => {

    const { redirectToLogin } = useSelector((state) => state.user)
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        image: ""
    })

    const [error, setError] = useState({})
    const { loading } = useSelector(state => ({ ...state.user }))
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const validation = () => {
        let error = {}

        if (!user.name) {
            error.name = "Name is Required"
        }

        if (!user.email) {
            error.email = "Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
        ) {
            error.email = "Enter a valid Email"
        }

        if (!user.password) {
            error.password = "Password is Required"
        }

        if (!user.mobile) {
            error.mobile = "Mobile is Required"
        }

        return error
    }
    let name, value
    const postUserData = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })

        if (name === "name") {
            if (value.length === 0) {
                setError({ ...error, name: "@Name is Required" })
                setUser({ ...user, name: "" })
            } else {
                setError({ ...error, name: "" })
                setUser({ ...user, name: value })
            }
        }

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

        if (name === "mobile") {
            if (value.length === 0) {
                setError({ ...error, mobile: "@Mobile Number is Required" })
                setUser({ ...user, mobile: "" })
            } else {
                setError({ ...error, mobile: "" })
                setUser({ ...user, mobile: value })
            }
        }
    }

    const RedirectUser = () => {
        let name = localStorage.getItem("name")
        let isInLoginPage = window.location.pathname.toLowerCase() === "/register"

        if (name !== null && name !== undefined && name !== "") {
            // window.location.pathname = getPathname
            isInLoginPage && navigate("/login")
        }
    }

    useEffect(() => {
        RedirectUser()
    }, [redirectToLogin])

    const SubmitInfo = async e => {
        e.preventDefault()
        let ErrorList = validation()
        setError(validation())

        let formData = new FormData()
        if (Object.keys(ErrorList).length === 0) {
            formData.append('name', user.name)
            formData.append('email', user.email)
            formData.append('mobile', user.mobile)
            formData.append('password', user.password)
            formData.append('image', user.image)

            dispatch(registerUser(formData))
            // await registerUser(user)
            // navigate('/login')
        }
    }

    const handlePhoto = e => {
        setUser({ ...user, image: e.target.files[0] })
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

            {/* <h1 className='text-uppercase text-center mt-5 letter-spacing'> Register </h1> */}

            <div className="container mt-5">
                <form className="row g-3 mb-5" onSubmit={SubmitInfo} method='POST' encType="multipart/form-data">
                    <div className="card text-center m-auto bg-light" style={{ width: '40em' }}>
                        <div className="card-header text-uppercase letter-spacing bg-success text-light">
                            Register
                        </div>
                        <div className="card-body p-5">

                            <img src="./Assets/images/team/5.png" alt="User" style={{ borderRadius: '50%' }} height='100px' width='100px' />

                            <div className="text-left">
                                <label htmlFor="inputEmail4" className="form-label"> Name </label>
                                <input type="text" name='name' value={user.name} onChange={e => postUserData(e)} className="form-control" placeholder="Enter Full Name" aria-label="Name" style={{  borderRadius: '10px', border: 'none' }} required />
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.name} </span>
                            </div>
                            <div className="text-left">
                                <label htmlFor="inputEmail4" className="form-label"> Email </label>
                                <input type="email" name='email' value={user.email} onChange={e => postUserData(e)} className="form-control" placeholder="Email ID" style={{  borderRadius: '10px', border: 'none' }} required />
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.email} </span>
                            </div>
                            <div className="text-left">
                                <label htmlFor="inputPassword4" className="form-label"> Password </label>
                                <input type="password" name='password' value={user.password} onChange={e => postUserData(e)} className="form-control" placeholder="Enter Password" style={{  borderRadius: '10px', border: 'none' }} required />
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.password} </span>
                            </div>
                            <div className="text-left">
                                <label htmlFor="inputCity" className="form-label"> Mobile </label>
                                <input type="number" name='mobile' value={user.mobile} onChange={e => postUserData(e)} className="form-control" placeholder="Enter Mobile Number" style={{  borderRadius: '10px', border: 'none' }} required />
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.mobile} </span>
                            </div>
                            <div className="text-left">
                                <label htmlFor="formFile" className="form-label"> Profile Picture </label>
                                <input className="form-control" name='image' type="file" accept='.png, .jpg, .jpeg' onChange={handlePhoto} style={{  borderRadius: '10px', border: 'none' }} required />
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.image} </span>
                            </div>

                            <a href="#"> <button type='submit' className='btn btn-success mt-3'> Sign Up </button> </a>

                        </div>
                        <div className="card-footer text-muted" style={{ cursor: 'default' }}>
                            Already have an account? <a href="/login"> <b style={{ cursor: 'pointer' }} className='text-primary'> Login </b> </a>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Register