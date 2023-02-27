import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Vortex } from 'react-loader-spinner'
import { useSelector, useDispatch } from 'react-redux'

import { fetchDepartment } from '../Redux/DepartmentSlice'

const Department = () => {

    const dispatch = useDispatch()
    const { departmentData } = useSelector(state => state?.departmentSlice)
    console.log('departmentData:----------------------------------------------------', departmentData)

    useEffect(() => {
        dispatch(fetchDepartment())
    }, [dispatch])

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
                                <li className="nav-item "><a className="nav-link" href="/service">Services</a></li>
                                <li className="nav-item active"><a className="nav-link" href="/department">Department</a></li>
                                <li className="nav-item"><a className="nav-link" href="/doctors">Doctors</a></li>
                                <li className="nav-item"><a className="nav-link" href="/appointment">Appointment</a></li>
                                <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                                <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">All Department</span>
                                <h1 className="text-capitalize mb-5 text-lg">Care Department</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section service-2">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="section-title">
                                <h2>Award winning patient care</h2>
                                <div className="divider mx-auto my-4"></div>
                                <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt
                                    molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section service-2">
                <div className="container">
                    <div className="row">
                        {
                            departmentData !== null ? (
                                <>
                                    {
                                        departmentData?.displaydata?.map((department, key) => {
                                            const { _id, deptName, deptDescription } = department
                                            return (
                                                <>
                                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                                        <div className="service-block mb-5">
                                                            <img src="./Assets/images/service/service-1.jpg" alt="" className="img-fluid w-100" />
                                                            <div className="content">
                                                                <h4 className="mt-4 mb-2 title-color">{deptName}</h4>
                                                                <p className="mb-4">{deptDescription}</p>
                                                                <a href="/departmentSingle" className="read-more">Learn More <i
                                                                    className="icofont-simple-right ml-2"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </>
                            ) : (
                                <>
                                    <Vortex visible={true} height="50" width="50" ariaLabel="vortex-loading" wrapperStyle={{}} wrapperclassName="vortex-wrapper" colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']} />
                                </>
                            )
                        }
                    </div>


                </div>
            </section >

        </div>
    )
}

export default Department