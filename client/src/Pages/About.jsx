const About = () => {
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
                                <li className="nav-item active"><a className="nav-link" href="/about">About</a></li>
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

            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">About Us</span>
                                <h1 className="text-capitalize mb-5 text-lg">About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section about-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h2 className="title-color">Personal care for your healthy living</h2>
                        </div>
                        <div className="col-lg-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae
                                dolorum, officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut
                                reprehenderit dignissimos, libero delectus.</p>
                            <img src="./Assets/images/about/sign.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="fetaure-page ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="about-block-item mb-5 mb-lg-0">
                                <img src="./Assets/images/about/about-1.jpg" alt="" className="img-fluid w-100" />
                                <h4 className="mt-3">Healthcare for Kids</h4>
                                <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="about-block-item mb-5 mb-lg-0">
                                <img src="./Assets/images/about/about-2.jpg" alt="" className="img-fluid w-100" />
                                <h4 className="mt-3">Medical Counseling</h4>
                                <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="about-block-item mb-5 mb-lg-0">
                                <img src="./Assets/images/about/about-3.jpg" alt="" className="img-fluid w-100" />
                                <h4 className="mt-3">Modern Equipments</h4>
                                <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="about-block-item">
                                <img src="./Assets/images/about/about-4.jpg" alt="" className="img-fluid w-100" />
                                <h4 className="mt-3">Qualified Doctors</h4>
                                <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section awards">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <h2 className="title-color">Our Doctors achievements </h2>
                            <div className="divider mt-4 mb-5 mb-lg-0"></div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src="./Assets/images/about/3.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src="./Assets/images/about/4.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src="./Assets/images/about/1.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src="./Assets/images/about/2.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src="./Assets/images/about/5.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <img src="./Assets/images/about/6.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section team">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">
                                <h2 className="mb-4">Meet Our Specialist</h2>
                                <div className="divider mx-auto my-4"></div>
                                <p>Today’s users expect effortless experiences. Don’t let essential people and processes stay
                                    stuck in the past. Speed it up, skip the hassles</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-block mb-5 mb-lg-0">
                                <img src="./Assets/images/team/1.jpg" alt="" className="img-fluid w-100" />

                                <div className="content">
                                    <h4 className="mt-4 mb-0"><a href="/doctorSingle">John Marshal</a></h4>
                                    <p>Internist, Emergency Physician</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-block mb-5 mb-lg-0">
                                <img src="./Assets/images/team/2.jpg" alt="" className="img-fluid w-100" />

                                <div className="content">
                                    <h4 className="mt-4 mb-0"><a href="/doctorSingle">Marshal Root</a></h4>
                                    <p>Surgeon, Сardiologist</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-block mb-5 mb-lg-0">
                                <img src="./Assets/images/team/3.jpg" alt="" className="img-fluid w-100" />

                                <div className="content">
                                    <h4 className="mt-4 mb-0"><a href="/doctorSingle">Siamon john</a></h4>
                                    <p>Internist, General Practitioner</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-block">
                                <img src="./Assets/images/team/4.jpg" alt="" className="img-fluid w-100" />

                                <div className="content">
                                    <h4 className="mt-4 mb-0"><a href="/doctorSingle">Rishat Ahmed</a></h4>
                                    <p>Orthopedic Surgeon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="section-title">
                                <h2 className="mb-4">What they say about us</h2>
                                <div className="divider  my-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 testimonial-wrap offset-lg-6">
                            <div className="testimonial-block">
                                <div className="client-info ">
                                    <h4>Amazing service!</h4>
                                    <span>John Partho</span>
                                </div>
                                <p>
                                    They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium,
                                    iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam
                                    eveniet nostrum nemo commodi numquam quod.
                                </p>
                                <i className="icofont-quote-right"></i>

                            </div>

                            <div className="testimonial-block">
                                <div className="client-info">
                                    <h4>Expert doctors!</h4>
                                    <span>Mullar Sarth</span>
                                </div>
                                <p>
                                    They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium,
                                    iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam
                                    eveniet nostrum nemo commodi numquam quod.
                                </p>
                                <i className="icofont-quote-right"></i>
                            </div>

                            <div className="testimonial-block">
                                <div className="client-info">
                                    <h4>Good Support!</h4>
                                    <span>Kolis Mullar</span>
                                </div>
                                <p>
                                    They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium,
                                    iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam
                                    eveniet nostrum nemo commodi numquam quod.
                                </p>
                                <i className="icofont-quote-right"></i>
                            </div>

                            <div className="testimonial-block">
                                <div className="client-info">
                                    <h4>Nice Environment!</h4>
                                    <span>Partho Sarothi</span>
                                </div>
                                <p>
                                    They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium,
                                    iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam
                                    eveniet nostrum nemo commodi numquam quod.
                                </p>
                                <i className="icofont-quote-right"></i>
                            </div>

                            <div className="testimonial-block">
                                <div className="client-info">
                                    <h4>Modern Service!</h4>
                                    <span>Kolis Mullar</span>
                                </div>
                                <p>
                                    They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium,
                                    iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam
                                    eveniet nostrum nemo commodi numquam quod.
                                </p>
                                <i className="icofont-quote-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About