const BlogModel = require('../../Model/admin/Blog')
const CategoryModel = require('../../Model/admin/Category')

// GET - All Blogs
exports.allBlogs = (req, res) => {
    BlogModel.find()
    .exec((error, blogData) => {
        if (!error) {
            res.render('Blogs/AllBlogs', {
                title: 'AdminLTE | All Blogs',
                dashboardtitle: 'Blogs Page',
                message: req.flash('message'),
                error: req.flash('error'),
                displaydata: blogData
            })
        }
    })
}

// GET - Add Blog
exports.addBlog = (req, res) => {
    CategoryModel.find((err, data) => {
        //console.log(data)
        if (!err) {
            res.render('Blogs/addBlog', {
                title: 'AdminLTE | Add New Blog',
                dashboardtitle: 'Blogs Page',
                message: req.flash('message'),
                error: req.flash('error'),
                displaydata: data
            })
        }
    })
}

// POST - Add Blog
exports.createBlog = (req, res) => {
    BlogModel.findOne({
        slug: req.body.blogTitle.trim().replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '_').toLowerCase()
    }).exec((error, data) => {
        if (data) {
            req.flash('error', "Blog Title Already Exists")
            res.redirect("/admin/addBlog")
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
                    req.flash("message", "Blog Post Added successfully.")
                    req.flash("error", "Something Went Wrong.")
                    res.redirect("/admin/allBlogs")
                })
                .catch(err => {
                    req.flash("message", "Something Went Wrong.")
                    req.flash("error", "Something Went Wrong.")
                    res.redirect("/admin/addBlog")
                })
        }
    })
}

// GET - Single Blog for "Edit Blog Page"
exports.singleBlog = (req, res) => {

    const blogID = req.params.id

    BlogModel.findById(blogID)
        .then(result => {
            res.render('Blogs/editBlog', {
                title: 'AdminLTE | Edit Blog',
                dashboardtitle: 'Blogs Page',
                message: req.flash('message'),
                data: result
            })
        })
}

// PUT - Edit Blog
exports.updateBlog = (req, res) => {
    BlogModel.findByIdAndUpdate(req.params.id, {
        blogName: req.body.blogName,
        blogQuote: req.body.blogQuote,
        blogImage: req.file.filename
    }, (error, result) => {
        if (!error) {
            console.log(result, "Blog data edited successfully.")
            req.flash('message', 'Blog edited successfully')
            res.redirect('/admin/allBlogs')
        } else {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not save Empty data.')
            res.redirect('/admin/editBlog')
        }
    })
}

// DELETE - Blog
exports.deleteBlog = (req, res, next) => {
    const blogID = req.params.id

    BlogModel.deleteOne({ _id: blogID })
        .then(result => {
            console.log(result, "Blog data deleted successfully.")
            req.flash('message', 'Deleted Blog data successfully')
            res.redirect('/admin/allBlogs')
        })
        .catch(err => {
            console.log(err, "No Data Deleted.")
            req.flash('error', 'Unable to delete blog data.')
            res.redirect('/admin/allBlogs')
        })
}