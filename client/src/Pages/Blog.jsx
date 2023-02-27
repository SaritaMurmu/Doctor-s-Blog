import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Vortex } from 'react-loader-spinner'
import { useSelector, useDispatch } from 'react-redux'

import { fetchBlog, popularBlog } from '../Redux/BlogSlice'
import { fetchCategory } from '../Redux/CategorySlice'

const Blog = () => {

    const dispatch = useDispatch()
    const { blogData } = useSelector(state => state?.blogSlice)
    // console.log('blogData: ', blogData)

    const { popularBlogData } = useSelector(state => state?.blogSlice)
    // console.log('popularBlogData: ', popularBlogData)

    const { categoryData } = useSelector(state => state?.categorySlice)
    // console.log('categoryData: ', categoryData)

    useEffect(() => {
        dispatch(fetchBlog())
        dispatch(fetchCategory())
        dispatch(popularBlog())
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
                                <li className="nav-item"><a className="nav-link" href="/"> Home </a></li>
                                <li className="nav-item"><a className="nav-link" href="/about"> About </a></li>
                                <li className="nav-item"><a className="nav-link" href="/service"> Services </a></li>
                                <li className="nav-item"><a className="nav-link" href="/department"> Department </a></li>
                                <li className="nav-item"><a className="nav-link" href="/doctors"> Doctors </a></li>
                                <li className="nav-item"><a className="nav-link" href="/appointment"> Appointment </a></li>
                                <li className="nav-item active"><a className="nav-link" href="/blog"> Blog </a></li>
                                <li className="nav-item"><a className="nav-link" href="/contact"> Contact </a></li>
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
                                <span className="text-white"> Our blog </span>
                                <h1 className="text-capitalize mb-5 text-lg"> Blog articles </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section blog-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">

                                <div className="col-lg-12 col-md-12 mb-5">
                                    <div className="blog-item">

                                        {
                                            blogData !== null ? (
                                                <>
                                                    {
                                                        blogData?.displayBlogs?.map(blog => {
                                                            const { _id, createdAt, blogTitle, blogSubtitle } = blog
                                                            return (
                                                                <>

                                                                    <div className="blog-thumb">
                                                                        <img src="./Assets/images/blog/blog-1.jpg" alt="" className="img-fluid" />
                                                                    </div>

                                                                    <div className="blog-item-content">
                                                                        <div className="blog-item-meta mb-3 mt-4">
                                                                            <span className="text-muted text-capitalize mr-3"><i className="icofont-comment mr-2"></i> 5 Comments </span>
                                                                            <span className="text-black text-capitalize mr-3" key={blog.id}><i className="icofont-calendar mr-1"></i> {createdAt} </span>
                                                                        </div>

                                                                        <h2 className="mt-3 mb-3"><Link to={`/blogSingle/${blog?._id}`}> {blogTitle} </Link></h2>
                                                                        <p className="mb-4"> {blogSubtitle} </p>
                                                                        {/* <p className="mb-4"> {_id} </p> */}

                                                                        <Link to={`/blogSingle/${blog?._id}`} className="btn btn-main btn-icon btn-round-full mb-5"> Read More <i className="icofont-simple-right ml-2  "></i></Link>
                                                                        {/* <Link to={`/blog-details/${blog?._id}`}> Read More </Link> */}
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

                                <div className="col-lg-12 col-md-12">
                                    <nav className="pagination py-2 d-inline-block">
                                        <div className="nav-links">
                                            <a className="page-numbers" href="#!"><i className="icofont-thin-double-left"></i></a>
                                            <span aria-current="page" className="page-numbers current"> 1 </span>
                                            <a className="page-numbers" href="#!"> 2 </a>
                                            <a className="page-numbers" href="#!"> 3 </a>
                                            <a className="page-numbers" href="#!"> <i className="icofont-thin-double-right"></i> </a>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
                                <div className="sidebar-widget search  mb-3 ">
                                    <h5> Search Here </h5>
                                    <form action="#" className="search-form">
                                        <input type="text" className="form-control" placeholder="search" name='search' />
                                        <i className="ti-search"></i>
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
                                                        // const d = new createdAt()
                                                        // var time = d.toDateString()
                                                        return (
                                                            <>

                                                                <div className="py-2" key={blog.id}>
                                                                    <span className="text-sm text-muted"> {createdAt} </span>
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
                                                            const { createdAt, categoryName } = category
                                                            // const d = new createdAt()
                                                            // var time = d.toDateString()
                                                            return (
                                                                <>
                                                                    <li className="align-items-center" key={category.id}>
                                                                        <a href="#"> {categoryName} </a>
                                                                        <span> (14) </span>
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

                                <div className="sidebar-widget schedule-widget mb-3">
                                    <h5 className="mb-4">Time Schedule</h5>

                                    <ul className="list-unstyled">
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>Monday - Friday</span>
                                            <span>9:00 - 17:00</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>Saturday</span>
                                            <span>9:00 - 16:00</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>Sunday</span>
                                            <span>Closed</span>
                                        </li>
                                    </ul>

                                    <div className="sidebar-contatct-info mt-4">
                                        <p className="mb-0">Need Urgent Help?</p>
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

export default Blog

{/* 
<img src="./Assets/images/blog/blog-1.jpg" alt="" className="img-fluid" />
<img src="./Assets/images/blog/blog-2.jpg" alt="" className="img-fluid" />
<img src="./Assets/images/blog/blog-4.jpg" alt="" className="img-fluid" />
*/}