const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const AdminModel = require('../Model/Admin')

exports.index = (req, res) => {
    if (req.admin) {
        AdminModel.find({}, function (err, adminDetails) {
            if (!err) {
                res.render("index", {
                    title: 'AdminLTE | Dashboard',
                    dashboardtitle: 'Dashboard',
                    data: req.admin,
                    details: adminDetails,
                    message: req.flash('message')
                })
            } else {
                console.log(err)
            }
        })
    }
}

exports.contact = (req, res) => {
    res.render('contact', {
        title: 'AdminLTE | Contact',
        dashboardtitle: 'Contacts Page'
    })
}

exports.about = (req, res) => {
    res.render('about', {
        title: 'AdminLTE | About',
        dashboardtitle: 'About Page'    
    })
}

exports.getAdminRegister = (req, res) => {
    res.render('adminAccess/adminRegister', {
        title: "Admin | Registration",
        message: req.flash('message')
    })
}

// POST Admin Register
exports.adminRegister = (req, res) => {
    AdminModel({
        adminName: req.body.adminName,
        adminEmail: req.body.adminEmail,
        adminPassword: bcrypt.hashSync(req.body.adminPassword, bcrypt.genSaltSync(10)),
        adminPasswordConfirm: req.body.adminPasswordConfirm,
        adminImage: req.file.filename,
        status: 1
    })
        .save((err, admin) => {
            if (!err) {
                req.flash("message", "Admin Successfully Added")
                res.redirect("/admin/signIn")
            } else {
                req.flash("message", "No Admin Data added.")
                res.redirect("/admin/signUp")
            }
        })
}

exports.getAdminLogin = (req, res) => {
    loginData = {}
    loginData.adminEmail = (req.cookies.adminEmail) ? req.cookies.adminEmail : undefined
    loginData.adminPassword = (req.cookies.adminPassword) ? req.cookies.adminPassword : undefined

    res.render('adminAccess/adminLogin', {
        title: "Admin | Login",
        message: req.flash('message'),
        data: loginData
    })
}

// Login
exports.adminLogin = (req, res) => {
    AdminModel.findOne({ adminEmail: req.body.adminEmail }, (err, data) => {
        if (data) {
            const hashPassword = data.adminPassword
            if (bcrypt.compareSync(req.body.adminPassword, hashPassword)) {
                const token = jwt.sign({
                    id: data._id,
                    adminName: data.adminName
                }, "admin#SecretKey@123", { expiresIn: '5h' })
                res.cookie("adminToken", token)
                if (req.body.rememberme) {
                    res.cookie('adminEmail', req.body.adminEmail)
                    res.cookie('adminPassword', req.body.adminPassword)
                }
                console.log("LoggedIn Data: ", data)
                req.flash("message", "Login Successful.")
                res.redirect("/admin")
            } else {
                req.flash("message", "Invalid Password")
                res.redirect("/admin/signIn")
            }
        } else {
            req.flash("message", "Invalid Email")
            res.redirect("/admin/signIn")
        }
    })
}

exports.adminAuth = (req, res, next) => {
    if (req.admin) {
        console.log('req.admin', req.admin)
        next()
    } else {
        console.log(req.admin)
        res.redirect("/admin/signIn")
    }
}

exports.logout = (req, res) => {
    res.clearCookie("adminToken")
    res.redirect("/admin")
}