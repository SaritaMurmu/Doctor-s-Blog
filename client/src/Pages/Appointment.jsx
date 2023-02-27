import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchAppointment, postAppointment } from '../Redux/AppointmentSlice'

const Appointment = () => {

    const dispatch = useDispatch()
    const { appointmentData } = useSelector(state => state?.appointmentSlice)
    console.log('appointmentData: ', appointmentData)

    useEffect(() => {
        dispatch(fetchAppointment())
    }, [dispatch])

    const [appointment, setAppointment] = useState({
        department: "",
        doctor: "",
        date: "",
        time: "",
        patientName: "",
        phone: "",
        message: ""
    })

    const [error, setError] = useState({})
    const navigate = useNavigate()

    const validation = () => {
        let error = {}

        if (!appointment.department) {
            error.department = "Department Required"
        }

        if (!appointment.doctor) {
            error.doctor = "Doctor Required"
        }

        if (!appointment.date) {
            error.date = "Date Required"
        }

        if (!appointment.time) {
            error.time = "Time Required"
        }

        if (!appointment.patientName) {
            error.patientName = "Patient's Name Required"
        }

        if (!appointment.phone) {
            error.phone = "Phone Required"
        }

        if (!appointment.message) {
            error.message = "Message Required"
        }

        return error
    }

    let name, value
    const postAppointmentData = e => {
        name = e.target.name
        value = e.target.value
        setAppointment({ ...appointment, [name]: value })

        if (name === "date") {
            if (value.length === 0) {
                setError({ ...error, date: "@Date is Required" })
                setAppointment({ ...appointment, date: "" })
            } else {
                setError({ ...error, date: "" })
                setAppointment({ ...appointment, date: value })
            }
        }

        if (name === "time") {
            if (value.length === 0) {
                setError({ ...error, time: "@Time is Required" })
                setAppointment({ ...appointment, time: "" })
            } else {
                setError({ ...error, time: "" })
                setAppointment({ ...appointment, time: value })
            }
        }

        if (name === "patientName") {
            if (value.length === 0) {
                setError({ ...error, patientName: "@Patient's Name is Required" })
                setAppointment({ ...appointment, patientName: "" })
            } else {
                setError({ ...error, patientName: "" })
                setAppointment({ ...appointment, patientName: value })
            }
        }

        if (name === "phone") {
            if (value.length === 0) {
                setError({ ...error, phone: "@Patient's Phone Number is Required" })
                setAppointment({ ...appointment, phone: "" })
            } else {
                setError({ ...error, phone: "" })
                setAppointment({ ...appointment, phone: value })
            }
        }

        if (name === "message") {
            if (value.length === 0) {
                setError({ ...error, message: "@Urgent message for the Doctor ?" })
                setAppointment({ ...appointment, message: "" })
            } else {
                setError({ ...error, message: "" })
                setAppointment({ ...appointment, message: value })
            }
        }

        if (name === "department") {
            if (value.length === 0) {
                setError({ ...error, department: "@Department is Required" })
                setAppointment({ ...appointment, department: "" })
            } else {
                setError({ ...error, department: "" })
                setAppointment({ ...appointment, department: value })
            }
        }

        if (name === "doctor") {
            if (value.length === 0) {
                setError({ ...error, doctor: "@Doctor is Required" })
                setAppointment({ ...appointment, doctor: "" })
            } else {
                setError({ ...error, doctor: "" })
                setAppointment({ ...appointment, doctor: value })
            }
        }
    }

    const SubmitInfo = async e => {
        e.preventDefault()
        let ErrorList = validation()
        setError(validation())

        if (Object.keys(ErrorList).length === 0) {
            await postAppointment(appointment)
            navigate('/confirmation')
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
                                <li className="nav-item active"><a className="nav-link" href="/appointment">Appointment</a></li>
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
                                <span className="text-white">Book your Seat</span>
                                <h1 className="text-capitalize mb-5 text-lg">Appointment</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="appointment section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mt-3">
                                <div className="feature-icon mb-3">
                                    <i className="icofont-support text-lg"></i>
                                </div>
                                <span className="h3">Call for an Emergency Service!</span>
                                <h2 className="text-color mt-3">+84 789 1256 </h2>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="appointment-wrap mt-5 mt-lg-0 pl-lg-5">
                                <h2 className="mb-2 title-color">Book an appointment</h2>
                                <p className="mb-4">Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</p>
                                <form id="" className="appointment-form" method="POST" action="" onSubmit={SubmitInfo}>

                                    <div className="row">

                                        {/* <div class="col-lg-6">
                                            <div class="form-group">
                                                <select class="form-control" id="exampleFormControlSelect1">
                                                    <option>Choose Department</option>
                                                    <option>Software Design</option>
                                                    <option>Development cycle</option>
                                                    <option>Software Development</option>
                                                    <option>Maintenance</option>
                                                    <option>Process Query</option>
                                                    <option>Cost and Duration</option>
                                                    <option>Modal Delivery</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <select class="form-control" id="exampleFormControlSelect2">
                                                    <option>Select Doctors</option>
                                                    <option>Software Design</option>
                                                    <option>Development cycle</option>
                                                    <option>Software Development</option>
                                                    <option>Maintenance</option>
                                                    <option>Process Query</option>
                                                    <option>Cost and Duration</option>
                                                    <option>Modal Delivery</option>
                                                </select>
                                            </div>
                                        </div> */}

                                        {/* Department */}
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect1" name="department" onChange={e => postAppointmentData(e)} required>
                                                    <option value=''> Choose Department </option>
                                                    {
                                                        appointmentData?.displayDepartment?.map((appointment, key) => {
                                                            return (
                                                                <>
                                                                    <option value={appointment.id} key={key}> {appointment.deptName} </option>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>

                                        {/* Doctor */}
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect2" name="doctor" onChange={e => postAppointmentData(e)} required>
                                                    <option value=''> Select Doctor </option>
                                                    {
                                                        appointmentData?.displayDoctor?.map((appointment, key) => {
                                                            return (
                                                                <>
                                                                    <option value={appointment.id} key={key}> {appointment.docName} </option>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>


                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="date" value={appointment.date} type="date" onChange={e => postAppointmentData(e)} className="form-control" placeholder="dd/mm/yyyy" required />
                                                <span style={{ color: "red", marginLeft: "24px" }}> {error.date} </span>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="time" value={appointment.time} type="time" onChange={e => postAppointmentData(e)} className="form-control" placeholder="Time" required />
                                                <span style={{ color: "red", marginLeft: "24px" }}> {error.time} </span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="patientName" value={appointment.patientName} type="text" onChange={e => postAppointmentData(e)} className="form-control" placeholder="Full Name" required />
                                                <span style={{ color: "red", marginLeft: "24px" }}> {error.patientName} </span>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="phone" value={appointment.phone} type="Number" onChange={e => postAppointmentData(e)} className="form-control" placeholder="Phone Number" required />
                                                <span style={{ color: "red", marginLeft: "24px" }}> {error.phone} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group-2 mb-4">
                                        <textarea style={{ resize: 'none' }} name="message" value={appointment.message} onChange={e => postAppointmentData(e)} className="form-control" rows="6" placeholder="Your Message" required />
                                        <span style={{ color: "red", marginLeft: "24px" }}> {error.message} </span>
                                    </div>

                                    <button type="submit" className="btn btn-main btn-round-full"> Make Appointment <i className="icofont-simple-right ml-2"></i> </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Appointment