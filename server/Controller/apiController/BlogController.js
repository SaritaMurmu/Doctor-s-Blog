const BlogModel = require('../../Model/admin/Blog')

// GET - All Blogs
exports.allBlogs = async (req, res) => {
    // BlogModel.find((error, data) => {
    //     console.log(data)
    //     if (!error) {
    //         res.status(200).send({ success: true, msg: "All Blogs data from API fetched Successfully !", displayBlogs: data })
    //     }
    // })

    try {
        const blogData = await BlogModel.find({ $sort: -1 })
        res.status(200).json({ status: 'success', msg: "All Blogs data from API fetched Successfullys !", displayBlogs: blogData })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// GET - Single Blog
exports.singleBlog = async (req, res) => {

    // const blogID = req.params.id

    // BlogModel.findById(blogID)
    //     .then(data => {
    //         res.status(200).send({ success: true, msg: `Blog ID ${blogID} from API fetched Successfully !`, singleBlogData: data })
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message: err.message || "Some error occurred while creating User"
    //         })
    //     })


    try {
        const dataResponse = await BlogModel.findById({ _id: req.params.id })
        console.log(dataResponse)
        if (dataResponse) {
            res.status(200).json({ status: 'success', msg: `Blog ID from API fetched Successfully !`, singleBlogData: dataResponse })
        } else {
            res.status(400).json({ status: 'failed', 'msg': "data not found" })
        }
    } catch (error) {
        console.log(error)
    }
}

// POST - Add Blog
exports.createBlog = async (req, res) => {
    // //console.log(req.body)
    // if (!req.body) {
    //     res.status(400).send({ message: "Please fill all the input fields." })
    // }

    // const Blog = new BlogModel({
    //     blogImage: req.file.filename,
    //     blogTitle: req.body.blogTitle,
    //     blogSubtitle: req.body.blogSubtitle,
    //     blogDescription: req.body.blogDescription,
    //     blogQuote: req.body.blogQuote,
    //     blogGist: req.body.blogGist,
    //     blogConcluder: req.body.blogConcluder,
    //     slug: req.body.blogTitle.trim().replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "_").toLowerCase(),
    //     category: req.body.category
    // })

    // await Blog.save()
    //     .then(data => {
    //         res.status(200).send({ success: true, msg: "Blog data created using API successfully!", blogData: data })
    //     }).catch(err => {
    //         res.status(500).send({
    //             message: err.message || "Some error occurred while creating a Blog"
    //         })
    //     })

    //-----------------------------------------------------------------------------------------------------------------

    if (!req.body) {
        res.status(400).send({ message: "Please fill all the input fields." })
    }

    BlogModel.findOne({
        slug: req.body.blogTitle.trim().replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '_').toLowerCase()
    }).exec((error, data) => {
        if (data) {
            res.status(400).send({ message: "Blog Title Already Exists" })
        } else {
            BlogModel({
                blogImage: req.file.filename,
                blogTitle: req.body.blogTitle,
                blogSubtitle: req.body.blogSubtitle,
                blogDescription: req.body.blogDescription,
                blogQuote: req.body.blogQuote,
                blogGist: req.body.blogGist,
                blogConcluder: req.body.blogConcluder,
                slug: req.body.blogTitle.trim().replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "_").toLowerCase(),
                category: req.body.category
            })
                .save()
                .then(result => {
                    console.log("Post Added.")
                    res.status(200).send({ success: true, msg: "Blog data created using API successfully!", blogData: data })
                    // res.status(400).send({ message: "Something Went Wrong." })
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating a Blog"
                    })
                })
        }
    })
}

// DELETE - Blog
exports.deleteBlog = (req, res) => {
    const blogID = req.params.id

    console.log('blogID Value: ', blogID)

    BlogModel.deleteOne({ _id: blogID })
        .then(data => {
            res.status(200).send({ success: true, msg: `Data with Blog ID [${blogID}] using API deleted Successfully !`, DeletedBlog: data })
        })
        .catch(error => {
            console.log(`Error: ${error}`)
        })
}

exports.popularBlogs = async (req, res) => {                                              // Latest POST for Blogs
    try {
        const post = await BlogModel.aggregate([{ $limit: 5 }, { $sort: { title: -1 } }])
            .exec(function (err, data) {
                if (!err) {
                    res.status(200).json({ status: 'success', displayPopularBlogData: data })
                }
            })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//filter post  data
exports.filter = async (req, res) => {                                                    // Search for BlogTitle
    try {
        var search = req.body.search
        const filterData = await BlogModel.find(
            { blogTitle: { $regex: ".*" + search + ".*" } }
        )
        if (filterData.length > 0) {
            return res.status(200).json({ status: true, msg: filterData })
        } else {
            return res.status(404).json({ status: false, msg: "No data found." })
        }

    } catch (err) {
        return res.status(404).json({ error: err.error })
    }
}