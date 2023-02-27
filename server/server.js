const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const session = require('express-session')
require("dotenv").config()

const app = express()

app.use(cookieParser())

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))

mongoose.set('strictQuery', true)

app.use(session({
    secret: 'secret',
    cookie: { maxAge: 600000 },
    resave: false,
    saveUninitialized: false
}))
app.use(flash())

app.set('view engine', 'ejs')
app.set('views', 'server/views/admin')

app.use(express.static(path.join(__dirname, 'public/admin')))
app.use(express.static(path.join(__dirname, 'public/imageUploads')))
app.use(express.static(path.join(__dirname, 'public/adminUpload')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

const authAdmin = require('./Middleware/AdminAuth')
app.use(authAdmin.authAdminJwt)

// -------------------------------------- Routes --------------------------------------

// ---------- ADMIN ----------

const adminAuthRoute = require('./Router/AdminRouter/adminRouter')
app.use('/admin', adminAuthRoute)

// ---------- ADMIN ----------

// Services
const adminServiceRoute = require('../server/Router/templateRouter/adminServiceRoute')                    // For Admin
app.use('/admin', adminServiceRoute)
const serviceRoute = require('../server/Router/apiRouter/serviceRoute')                                   // For ReactJS API
app.use('/api', serviceRoute)

// Doctors
const adminDoctorRoute = require('../server/Router/templateRouter/adminDoctorRoute')                      // For Admin
app.use('/admin', adminDoctorRoute)
const doctorRoute = require('../server/Router/apiRouter/doctorRoute')                                     // For ReactJS API
app.use('/api', doctorRoute)

// Departments
const adminDepartmentRoute = require('../server/Router/templateRouter/adminDepartmentRoute')              // For Admin
app.use('/admin', adminDepartmentRoute)
const departmentRoute = require('../server/Router/apiRouter/departmentRoute')                             // For ReactJS API
app.use('/api', departmentRoute)

// Appointments
const adminAppointmentRoute = require('../server/Router/templateRouter/adminAppointmentRoute')            // For Admin
app.use('/admin', adminAppointmentRoute)
const appointmentRoute = require('../server/Router/apiRouter/appointmentRoute')                           // For ReactJS API
app.use('/api', appointmentRoute)

// Categories
const adminCategoryRoute = require('../server/Router/templateRouter/adminCategoryRoute')                  // For Admin
app.use('/admin', adminCategoryRoute)
const categoryRoute = require('../server/Router/apiRouter/categoryRoute')                                 // For ReactJS API
app.use('/api', categoryRoute)

// Blogs
const adminBlogRoute = require('../server/Router/templateRouter/adminBlogRoute')                          // For Admin
app.use('/admin', adminBlogRoute)
const blogRoute = require('../server/Router/apiRouter/blogRoute')                                         // For ReactJS API
app.use('/api', blogRoute)

// Admin-User: Authenticated to Create, Edit and Delete User
const adminUserRoute = require('../server/Router/templateRouter/adminUserRoute')                          // For Admin
app.use('/admin', adminUserRoute)
const apiAdminUserRoute = require('../server/Router/apiRouter/userRoute')                                 // For ReactJS API
app.use('/api', apiAdminUserRoute)

// Client-User
const userRoute = require('./Router/UserRouter/userRoute')                                                // For ReactJS API
app.use('/api', userRoute)

// -------------------------------------- Routes --------------------------------------
const dbcon = "mongodb+srv://mernstack:uEcMUsb0BmH7CMbo@cluster0.atdylte.mongodb.net/cure-and-care"
const port = process.env.PORT || 3002

mongoose.connect(dbcon, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Database & Server connected. Running port at http://localhost:${port}/admin`)
        })
    }).catch(error => {
        console.log(error)
    })