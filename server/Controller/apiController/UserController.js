const bcryptjs = require('bcryptjs')
const UserModel = require('../../Model/User')

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

// GET - All Users
exports.allUsers = (req, res) => {
    UserModel.find((error, data) => {
        console.log(data)
        if (!error) {
            res.status(200).send({ success: true, msg: "All Users data from API fetched Successfully !", displaydata: data })
        }
    })
}

// GET - Single User
exports.singleUser = (req, res) => {

    const userID = req.params.id

    UserModel.findById(userID)
        .then(data => {
            res.status(200).send({ success: true, msg: `User ID ${userID} from API fetched Successfully !`, user: data })
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Some error occurred while creating User" })
        })
}

// POST - Add User
exports.createUser = async (req, res) => {
    //console.log(req.body)

    const setpassword = await securePassword(req.body.password)

    if (!req.body) {
        res.status(400).send({ message: "Please fill all the input fields." })
    }

    const User = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: setpassword,
        mobile: req.body.mobile,
        image: req.file.filename,
        status: 1
    })

    await User.save()
        .then(data => {
            res.status(200).send({ success: true, msg: "User data created using API successfully!", user: data })
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a User"
            })
        })
}

// PUT - Edit User
exports.updateUser = async (req, res) => {

    const setpassword = await securePassword(req.body.password)

    if (!req.body) {
        res.status(400).send({ message: "Please fill all the input fields." })
    }

    const userID = req.params.id
    const name = req.body.name
    const email = req.body.email
    const password = setpassword
    const mobile = req.body.mobile
    const image = req.file.filename

    UserModel.findById(userID)
        .then(async result => {
            result.name = name
            result.email = email
            result.password = password
            result.mobile = mobile
            result.image = image

            await result.save()
                .then(data => {
                    res.status(200).send({ success: true, msg: `User edited using API successfully !`, user: data })
                })
                .catch(err => {
                    res.status(500).send({ message: err.message || "Some error occurred while updating a User" })
                })
        })
}

// DELETE - User (Soft Delete)
exports.deleteUser = ((req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, { status: 0 },
        (error, data) => {
            if (!error) {
                res.status(200).send({ success: true, msg: `User deleted using API successfully !`, user: data })
            } else {
                res.status(500).send({ message: err.message || "Some error occurred while deleting a User" })
            }
        })
})

exports.activateUser = (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, {
        status: true
    })
        .then(() => {
            console.log("User Activated.")
            res.status(200).send({ success: true, msg: `User Activated !`, user: data })
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({ message: err.message || "Some error occurred while activating a User" })
        })
}

exports.deactivateUser = (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, {
        status: false
    })
        .then(() => {
            console.log("User Deactivated.")
            res.status(200).send({ success: true, msg: `User Deactivated !`, user: data })
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({ message: err.message || "Some error occurred while deactivating a User" })
        })
}