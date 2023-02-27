import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchService } from '../Redux/ServiceSlice'
import { Vortex } from 'react-loader-spinner'

const Service = () => {

    const dispatch = useDispatch()
    const { serviceData } = useSelector(state => state?.serviceSlice)
    console.log('serviceData: ', serviceData)

    useEffect(() => {
        dispatch(fetchService())
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
                                <li className="nav-item active"><a className="nav-link" href="/service">Services</a></li>
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

            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">Our services</span>
                                <h1 className="text-capitalize mb-5 text-lg">What We Do</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section service-2">
                <div className="container">
                    <div className="row">

                        {
                            serviceData !== null ? (
                                <>
                                    {
                                        serviceData?.displaydata?.map((service, key) => {
                                            const desc = service.description
                                            return (
                                                <>

                                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                                        <div className="service-block mb-5">
                                                            <img src="./Assets/images/service/service-1.jpg" alt="" className="img-fluid" />
                                                            {/* <img src={service.image} alt="" className="img-fluid" /> */}
                                                            <div className="content">
                                                                <h4 className="mt-4 mb-2 title-color" key={key}> {service.serviceName} </h4>
                                                                {/* <p className="mb-4"> {service.description} </p> */}
                                                                <p className="mb-4"> {desc.substring(0, 60)} <Link to='' style={{ marginLeft: '10px', color: 'blue' }}> Read More </Link> ... </p>
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
            </section>

            <section className="section cta-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="cta-content">
                                <div className="divider mb-4"></div>
                                <h2 className="mb-5 text-lg">We are pleased to offer you the <span className="title-color">chance to have the healthy</span></h2>
                                <a href="/appointment" className="btn btn-main-2 btn-round-full"> Get appointment <i className="icofont-simple-right  ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service



// <img src="./Assets/images/service/service-1.jpg" alt="" className="img-fluid" />
// <img src="./Assets/images/service/service-2.jpg" alt="" className="img-fluid" />
// <img src="./Assets/images/service/service-3.jpg" alt="" className="img-fluid" />
// <img src="./Assets/images/service/service-4.jpg" alt="" className="img-fluid" />
// <img src="./Assets/images/service/service-6.jpg" alt="" className="img-fluid" />
// <img src="./Assets/images/service/service-8.jpg" alt="" className="img-fluid" />