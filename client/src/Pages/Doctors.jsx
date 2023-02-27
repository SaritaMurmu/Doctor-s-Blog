import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Vortex } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { fetchDoctor } from "../Redux/DoctorSlice";
import { fetchDepartment } from "../Redux/DepartmentSlice";

import $ from "jquery";

const Doctors = () => {
  const navigate=useNavigate()
  const [doctors, setDoctors] = useState([]);
  const getListByCategory = (cat) => {
    console.log(cat)
    $.ajax({
      url:
        cat === "all"
          ? "http://localhost:3002/api/alldoctors"
          : "http://localhost:3002/api/doctors-by-cat" + "/" + cat,
      method: "GET",
      success: function (response) {
        setDoctors(response.doctors);
        console.log(response)
      },
    });
  };
useEffect(() => {
  getListByCategory("all");
}, []);

  const dispatch = useDispatch();
  //   const { doctorData } = useSelector((state) => state?.doctorSlice);
  const { departmentData } = useSelector((state) => state?.departmentSlice);
  //   console.log("doctorData : ", doctorData);
  // console.log('departmentData : ', departmentData)

  useEffect(() => {
    dispatch(fetchDoctor());
    dispatch(fetchDepartment());
  }, [dispatch]);

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navigation" id="navbar">
          <div className="container">
          <a className="navbar-brand" href="/">
                            <img src="./Assets/images/cure-and-care-logo.png" alt="" className="img-fluid" style={{ height: '2em' }} />
                        </a>

            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarmain"
              aria-controls="navbarmain"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icofont-navigation-menu"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarmain">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/service">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/department">
                    Department
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/doctors">
                    Doctors
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/appointment">
                    Appointment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
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
                <span className="text-white">All Doctors</span>
                <h1 className="text-capitalize mb-5 text-lg">
                  Specalized doctors
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section doctors">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <h2>Doctors</h2>
                <div className="divider mx-auto my-4"></div>
                <p>
                  We provide a wide range of creative services adipisicing elit.
                  Autem maxime rem modi eaque, voluptate. Beatae officiis neque{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 text-center  mb-5">
            <div className="btn-group btn-group-toggle " data-toggle="buttons">
              <label className="btn active" onClick={() => getListByCategory("all")}>
                <input
                  type="radio"
                  name="shuffle-filter"
                  value="all"
                  checked="checked"
                />
                All Departments
              </label>

              {departmentData !== null ? (
                <>
                  {departmentData?.displaydata?.map((department, index) => 
                    <label
                      key={index}
                      id="topCat"
                      className="btn"
                      onClick={() =>
                        getListByCategory(`${department.deptName}`)
                      }
                    >
                      <input type="radio" name="deptName" />
                      {department.deptName}
                    </label>
                  )}
                </>
              ) : (
                <>
                  <Vortex
                    visible={true}
                    height="50"
                    width="50"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperclassName="vortex-wrapper"
                    colors={[
                      "red",
                      "green",
                      "blue",
                      "yellow",
                      "orange",
                      "purple",
                    ]}
                  />
                </>
              )}
            </div>
          </div>

          <div className="row shuffle-wrapper portfolio-gallery">
            {doctors && (
              <>
                {doctors?.map((doctor, i) => (
                  <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                    <div className="service-block mb-5">
                      <img
                        src="./Assets/images/service/service-1.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      {/* <img src={service.image} alt="" className="img-fluid" /> */}

                      <div className="content">
                        <h4 onClick={()=>navigate(`/doctorSingle/${doctor.docName.split(" ")[0]}`,{state:doctor})} className="mt-4 mb-2 title-color docName" >
                          {" "}
                          {doctor.docName}{" "}
                        </h4>
                        <h6 className="mt-4 mb-2 title-color">
                          {" "}
                          {doctor.department.deptName}{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            {/* LOADER */}
            {/* <>
              <Vortex
                visible={true}
                height="50"
                width="50"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperclassName="vortex-wrapper"
                colors={["red", "green", "blue", "yellow", "orange", "purple"]}
              />
            </> */}
          </div>
        </div>
      </section>

      <section className="section cta-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="cta-content">
                <div className="divider mb-4"></div>
                <h2 className="mb-5 text-lg">
                  We are pleased to offer you the{" "}
                  <span className="title-color">
                    chance to have the healthy
                  </span>
                </h2>
                <a
                  href="/appointment"
                  className="btn btn-main-2 btn-round-full"
                >
                  Get appoinment<i className="icofont-simple-right  ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
