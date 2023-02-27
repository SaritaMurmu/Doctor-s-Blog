const Contact = () => {
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
                                <li className="nav-item active"><a className="nav-link" href="/contact">Contact</a></li>
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
                                <span className="text-white">Contact Us</span>
                                <h1 className="text-capitalize mb-5 text-lg">Get in Touch</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section contact-info pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-block mb-4 mb-lg-0">
                                <i className="icofont-live-support"></i>
                                <h5>Call Us</h5>
                                +823-4565-13456
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-block mb-4 mb-lg-0">
                                <i className="icofont-support-faq"></i>
                                <h5>Email Us</h5>
                                contact@mail.com
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="contact-block mb-4 mb-lg-0">
                                <i className="icofont-location-pin"></i>
                                <h5>Location</h5>
                                North Main Street,Brooklyn Australia
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-form-wrap section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">
                                <h2 className="text-md mb-2">Contact us</h2>
                                <div className="divider mx-auto my-4"></div>
                                <p className="mb-5">Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi
                                    mollitia sit
                                    perferendis maiores ratione aliquam?</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <form id="contact-form" className="contact__form " method="" action="">
                                {/* <div className="row">
                                    <div className="col-12">
                                        <div className="alert alert-success contact__msg" style="display: none" role="alert">
                                            Your message was sent successfully.
                                        </div>
                                    </div>
                                </div> */}

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Your Full Name" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your Email Address" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input name="subject" id="subject" type="text" className="form-control" placeholder="Your Query Topic" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input name="phone" id="phone" type="text" className="form-control" placeholder="Your Phone Number" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group-2 mb-4">
                                    <textarea name="message" id="message" className="form-control" rows="8" placeholder="Your Message" required></textarea>
                                </div>

                                <div>
                                    <input className="btn btn-main btn-round-full" name="submit" type="submit" value="Send Messege"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div class="google-map ">
                <div id="map" data-latitude="40.712776" data-longitude="-74.005974" data-marker="images/marker.png"></div>
            </div> */}

        </div>
    )
}

export default Contact