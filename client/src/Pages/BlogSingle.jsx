import img1 from '../Assets/images/blog/blog-1.jpg'
import img2 from '../Assets/images/blog/testimonial1.jpg'
import img3 from '../Assets/images/blog/testimonial2.jpg'

import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Vortex } from 'react-loader-spinner'
import { useSelector, useDispatch } from 'react-redux'

import { fetchSingleBlog, popularBlog } from '../Redux/BlogSlice'
import { fetchCategory } from '../Redux/CategorySlice'

const BlogSingle = () => {

    const id = useParams()
    const dispatch = useDispatch()

    const { singleBlogData, popularBlogData } = useSelector(state => state?.blogSlice)
    // console.log('singleBlogData: ', singleBlogData)
    // console.log('popularBlogData: ', popularBlogData)

    const { categoryData } = useSelector(state => state?.categorySlice)
    console.log('categoryData: ', categoryData)

    useEffect(() => {
        dispatch(popularBlog())
        dispatch(fetchCategory())
        dispatch(fetchSingleBlog(id))
    }, [id, dispatch])

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
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
                                <li className="nav-item active"><a className="nav-link" href="/blog">Blog</a></li>
                                <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <section class="page-title bg-1">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                            <div class="block text-center">
                                <span class="text-white"> News details </span>
                                <h1 class="text-capitalize mb-5 text-lg"> {singleBlogData.singleBlogData?.blogTitle}  </h1>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section class="section blog-wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-lg-12 mb-5">
                                    <div class="single-blog-item">
                                        <img src={img1} alt="" class="img-fluid" />

                                        <div class="blog-item-content mt-5">
                                            <div class="blog-item-meta mb-3">

                                                <span class="text-color-2 text-capitalize mr-3"><i class="icofont-book-mark mr-2"></i> Equipment </span>
                                                <span class="text-muted text-capitalize mr-3"><i class="icofont-comment mr-2"></i> 5 Comments </span>
                                                <span class="text-black text-capitalize mr-3">
                                                    <i class="icofont-calendar mr-2"></i>
                                                    <time> {(new Date(singleBlogData.singleBlogData?.createdAt)).toLocaleDateString("en-US", options)} </time>
                                                    <b style={{ textTransform: 'lowercase' }}> at </b>
                                                    <time> {(new Date(singleBlogData.singleBlogData?.createdAt)).toLocaleTimeString('en-US')} </time>
                                                </span>

                                            </div>

                                            <h2 class="mb-4 text-md"><a href="/blogSingle"> {singleBlogData.singleBlogData?.blogTitle} </a></h2>

                                            <p class="lead mb-4"> {singleBlogData.singleBlogData?.blogSubtitle} </p>

                                            <p> {singleBlogData.singleBlogData?.blogDescription} </p>

                                            <blockquote class="quote">
                                                {singleBlogData.singleBlogData?.blogQuote}
                                            </blockquote>

                                            <p class="lead mb-4 font-weight-normal text-black"> {singleBlogData.singleBlogData?.blogGist} </p>

                                            <p> {singleBlogData.singleBlogData?.blogConcluder} </p>

                                            <div class="mt-5 clearfix">
                                                <ul class="float-left list-inline tag-option">
                                                    <li class="list-inline-item"><a href="#!">Advancher</a></li>
                                                    <li class="list-inline-item"><a href="#!">Landscape</a></li>
                                                    <li class="list-inline-item"><a href="#!">Travel</a></li>
                                                </ul>

                                                <ul class="float-right list-inline">
                                                    <li class="list-inline-item"> Share: </li>
                                                    <li class="list-inline-item"><a href="#!"><i
                                                        class="icofont-facebook"></i></a></li>
                                                    <li class="list-inline-item"><a href="#!"><i
                                                        class="icofont-twitter"></i></a></li>
                                                    <li class="list-inline-item"><a href="#!"><i
                                                        class="icofont-pinterest"></i></a></li>
                                                    <li class="list-inline-item"><a href="#!"><i
                                                        class="icofont-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="comment-area mt-4 mb-5">
                                        <h4 class="mb-4">2 Comments on Healthy environment... </h4>
                                        <ul class="comment-tree list-unstyled">
                                            <li class="mb-5">
                                                <div class="comment-area-box d-block d-sm-flex">
                                                    <div class="comment-thumb">
                                                        <img src={img2} alt="" style={{ width: '70px' }} />
                                                    </div>

                                                    <div class="block">
                                                        <div class="comment-info">
                                                            <h5 class="mb-1">John</h5>
                                                            <span>United Kingdom</span>
                                                            <span class="date-comm">| Posted April 7, 2019</span>
                                                        </div>
                                                        <div class="comment-meta mt-2">
                                                            <a href="#!"><i class="icofont-reply mr-2 text-muted"></i>Reply</a>
                                                        </div>

                                                        <div class="comment-content mt-3">
                                                            <p>Some consultants are employed indirectly by the client via a
                                                                consultancy staffing company, a company
                                                                that provides consultants on an agency basis. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="comment-area-box d-block d-sm-flex">
                                                    <div class="comment-thumb">
                                                        <img src={img3} alt="" style={{ width: '70px' }} />
                                                    </div>

                                                    <div class="block">
                                                        <div class="comment-info">
                                                            <h5 class="mb-1">Philip W</h5>
                                                            <span>United Kingdom</span>
                                                            <span class="date-comm">| Posted June 7, 2019</span>
                                                        </div>

                                                        <div class="comment-meta mt-2">
                                                            <a href="#!"><i class="icofont-reply mr-2 text-muted"></i>Reply </a>
                                                        </div>

                                                        <div class="comment-content mt-3">
                                                            <p>Some consultants are employed indirectly by the client via a
                                                                consultancy staffing company, a company
                                                                that provides consultants on an agency basis. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div class="col-lg-12">
                                    <form class="comment-form my-5" id="comment-form">
                                        <h4 class="mb-4">Write a comment</h4>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input class="form-control" type="text" name="name" id="name" placeholder="Name:" required />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input class="form-control" type="text" name="mail" id="mail" placeholder="Email:" required />
                                                </div>
                                            </div>
                                        </div>

                                        <textarea class="form-control mb-4" name="comment" id="comment" cols="30" rows="5" placeholder="Comment" required></textarea>
                                        <input class="btn btn-main-2 btn-round-full" type="submit" name="submit-contact" id="submit_contact" value="Submit Message" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
                                <div class="sidebar-widget search  mb-3 ">
                                    <h5>Search Here</h5>
                                    <form action="#" class="search-form">
                                        <input type="text" class="form-control" placeholder="search" />
                                        <i class="ti-search"></i>
                                    </form>
                                </div>


                                <div className="sidebar-widget latest-post mb-3">
                                    <h5> Popular Blogs </h5>

                                    {
                                        popularBlogData !== null ? (
                                            <>
                                                {
                                                    popularBlogData?.displayPopularBlogData?.map(blog => {
                                                        const { createdAt, blogTitle } = blog
                                                        return (
                                                            <>

                                                                <div className="py-2">
                                                                    <span className="text-sm text-muted">
                                                                        <i class="icofont-calendar mr-2"></i>
                                                                        <time> {(new Date(singleBlogData.singleBlogData?.createdAt)).toLocaleDateString("en-US", options)} </time>
                                                                        <b style={{ textTransform: 'lowercase' }}> ---- </b>
                                                                        <time> {(new Date(singleBlogData.singleBlogData?.createdAt)).toLocaleTimeString('en-US')} </time>
                                                                    </span>
                                                                    <h6 className="my-2"><Link to={`/blogSingle/${blog?._id}`}> {blogTitle} </Link></h6>
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

                                <div className="sidebar-widget category mb-3">
                                    <h5 className="mb-4"> Categories </h5>

                                    {/* Medicine, Equipments, Heart, Free counselling, Lab test */}

                                    <ul className="list-unstyled">

                                        {
                                            categoryData !== null ? (
                                                <>
                                                    {
                                                        categoryData?.displayCategoryData?.map(category => {
                                                            const { categoryName } = category
                                                            return (
                                                                <>

                                                                    <li className="align-items-center">
                                                                        <a href="#"> {categoryName} </a>
                                                                        <span> (10) </span>
                                                                    </li>

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

                                    </ul>
                                </div>

                                <div class="sidebar-widget schedule-widget mb-3">
                                    <h5 class="mb-4"> Time Schedule </h5>

                                    <ul class="list-unstyled">
                                        <li class="d-flex justify-content-between align-items-center">
                                            <span>Monday - Friday</span>
                                            <span>9:00 - 17:00</span>
                                        </li>
                                        <li class="d-flex justify-content-between align-items-center">
                                            <span>Saturday</span>
                                            <span>9:00 - 16:00</span>
                                        </li>
                                        <li class="d-flex justify-content-between align-items-center">
                                            <span>Sunday</span>
                                            <span>Closed</span>
                                        </li>
                                    </ul>

                                    <div class="sidebar-contatct-info mt-4">
                                        <p class="mb-0">Need Urgent Help?</p>
                                        <h3>+23-4565-65768</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogSingle