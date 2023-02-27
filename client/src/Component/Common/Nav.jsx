import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { handleLogoutToken, setLogout, setUser } from '../../Redux/AuthSlice'

const Nav = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoggedInToken, hellotoken } = useSelector(state => state?.user)
    const [loggedInName, setis_loggedIn] = useState("")
    const [loggedInImage, setis_loggedInImage] = useState("")

    const name = localStorage.getItem("name")
    // console.log('name: ', name)
    const image = localStorage.getItem("image")
    // console.log('image: ', image)
    // console.log(isLoggedInToken, "isLoggedInToken")
    // console.log(setUser, "setUser")         // hgggggg
    // console.log("loggedInName:-------------------------------------------------- ", loggedInName)                          // Username on Console log
    // console.log("loggedInImage: ", loggedInImage)              // Profile Pic String Info on Console log

    useEffect(() => {
        setis_loggedIn(name)
        setis_loggedInImage(image)
    }, [name, image])

    const logout = () => {
        dispatch(handleLogoutToken())
        navigate("/login")
    }

    // console.log(hellotoken, "HelloToken")           // efefwefe
    // console.log(isLoggedInToken, "isLoggedInToken")

    return (
        <div>

            <div className="header-top-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <ul className="top-bar-info list-inline-item pl-0 mb-0">
                                {/* <li className="list-inline-item"><a href="mailto:john@gmail.com"><i className="icofont-support-faq mr-2"></i> john@gmail.com </a></li> */}
                                <li className="list-inline-item"><a href="john@gmail.com"><i className="icofont-support-faq mr-2"></i> support.us0@gmail.com </a></li>
                                <li className="list-inline-item"><i className="icofont-location-pin mr-2"></i> Address Ta-134/A, New York, USA </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                                {/* <a href="tel:+23-345-67890">
                                        <span>Call Now : </span>
                                        <span className="h4">823-4565-13456</span>
                                    </a> */}
                                {/* <img src="/Assets/images/team/1.jpg" alt="" width='25px' height='25px' style={{ borderRadius: '50%' }} />
                                <a href="/"> <span className="mr-5 ml-2"> Dion James Smith </span> </a>
                                <a href="/"> <span className="mr-5 ml-2"> Logout </span> </a> */}

                                {
                                    isLoggedInToken ? (
                                        <>
                                            {/* <img src={loggedInImage} alt="" style={{ borderrRadius: '50%' }} height='25px' width='25px' /> */}
                                            <img src="/Assets/images/team/1.jpg" alt="profile_pic" style={{ borderRadius: '50%' }} height='25px' width='25px' />
                                            <a href="/"> <span className="mr-5 ml-2"> {loggedInName} </span> </a>
                                        </>
                                    ) : (
                                        <Link to="" style={{ color: "white" }}> <i className="fa fa-user-o" style={{ color: "white" }} aria-hidden="true"> </i> {" "} </Link>
                                    )
                                }

                                {
                                    isLoggedInToken ? (
                                        <b> <span role='button' className="mr-5 ml-2" onClick={() => { logout() }}> Logout </span> </b>
                                    ) : (
                                        <>
                                            {/* <Link to="/login" style={{ color: "white" }}> {" "} Login </Link>
                                            <Link to="/register" style={{ color: "white" }}> {" "} Register </Link> */}
                                            <Link to="/login" className='mr-3'> <span> Login </span> </Link>
                                            <Link to="/register"> <span className="mr-5"> Register </span> </Link>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Nav