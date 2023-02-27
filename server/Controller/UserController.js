const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const randomstring = require('randomstring')
const bcryptjs = require('bcryptjs')

const User = require('../Model/User')
const config = require('../Config/config')

// Reset password mail
const resetPasswordMail = async (name, email, token) => {
    try {
        const transPorter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            requireTLS: true,
            auth: {
                user: config.email,
                pass: config.password
            }
        })

        const mailOption = {
            from: config.email,
            to: email,
            subject: "for reset password",
            html: '<p> Hi..' + name + ',</p> Please copy the link and <a href="http://localhost:3002/api/reset-password?token=' + token + '">reset your password</a> '
        }

        transPorter.sendMail(mailOption, function (err, info) {
            if (err) {
                console.log(err)
            } else {
                console.log("mail send", info.response)
            }
        })

    } catch (error) {
        res.status(400).send({ success: false, msg: error.message })
    }
}

// Create Token
const createToken = async id => {
    try {
        const token = await jwt.sign({ _id: id }, config.secret_jwt, { expiresIn: "1h" })
        return token
    } catch (error) {
        // res.status(400).send(error.message)
        console.log(error)
    }
}

// Password checking method
const securePassword = async (password) => {
    try {
        const passwordHash = await bcryptjs.hash(password, 10)
        return passwordHash
    } catch (error) {
        // res.status(400).send(error.message)
        console.log(error)
    }
}

exports.registerUser = async (req, res) => {
    try {
        const setpassword = await securePassword(req.body.password)
        const userModel = new User({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: setpassword,
            image: req.file.filename,
            status: true
        })
        const userData = await userModel.collection.findOne({ email: req.body.email })
        if (userData) {
            return res.status(404).json({ success: false, msg: "This email already exist" })
        } else {
            const user_data = await userModel.save()
            const tokendata = await createToken(user_data._id)
            return res.status(200).json({ success: true, data: user_data, "token": tokendata })
        }
    } catch (error) {
        // console.log(error.message)
        return res.status(400).json(error.message)
    }
}

// Login
exports.userLogin = async (req, res) => {
    try {
        // Get user input
        const { email, password } = req.body

        // Validate user input
        if (!(email && password)) {
            return res.status(400).json("All input is required")
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email })

        if (user && (await bcryptjs.compare(password, user.password))) {
            // Create token
            const tokendata = await createToken(user._id)
            // user
            return res.status(200).json({ "user": user, "token": tokendata })
        }
        // return res.status(400).json("Invalid Credentials")
        return res.status(400).send({ success: false, "msg": "Invalid Credentials" })
    } catch (err) {
        console.log(err)
    }
}

// Check authenticated user
exports.test = (req, res) => {
    return res.status(201).json({ success: true, msg: "Authenticated User" })
}

// Update password
exports.updatePassword = async (req, res) => {
    try {
        const user_id = req.body.user_id
        const password = req.body.password

        // Check userID exists
        const data = await User.findOne({ _id: user_id })
        if (data) {
            const newPassword = await securePassword(password)
            const userData = await User.findByIdAndUpdate({ _id: user_id }, {
                $set: { password: newPassword }
            })
            res.status(201).send({ success: true, "msg": "your password has been updated." })
        } else {
            res.status(400).send({ success: false, "msg": "User ID Not found" })
        }
    } catch (error) {
        res.status(400).send(error, message)
    }
}

// Forget password
exports.forgetPassword = async (req, res) => {
    try {
        const email = req.body.email
        const userData = await User.findOne({ email: email })

        if (userData) {
            const randomString = randomstring.generate()
            const data = await User.updateOne({ email: email }, { $set: { token: randomString } })
            resetPasswordMail(userData.name, userData.email, randomString)

            res.status(200).send({ success: true, msg: "Please check your email." })
        }
        else {
            res.status(400).send({ success: true, msg: "Email does not exist." })
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message })
    }
}

exports.home = async (req, res) => {
    try {
        const AllUser = await User.find()
        res.status(200).send({ success: true, data: AllUser })
    } catch (error) {
        res.status(400).send({ success: false, msg: message.error })
    }
}

