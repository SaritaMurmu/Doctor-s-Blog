const AdminModel = require("../Model/Admin")

exports.checkDuplicateEntries = (req, res, next) => {
    AdminModel.findOne({
        adminName: req.body.adminName
    }).exec((err, admin) => {
        if (err) {
            console.log(err)
            return
        }
        if (admin) {
            req.flash("message", "Admin Name Already Exists")
            return res.redirect("/register")
        }
        AdminModel.findOne({
            adminEmail: req.body.adminEmail
        }).exec((err, adminEmail) => {
            if (err) {
                console.log(err)
                return
            }
            if (adminEmail) {
                req.flash("message", "Email Already Exists")
                return res.redirect("/register")
            }
            const adminPassword = req.body.adminPassword
            const confirm = req.body.adminPasswordConfirm
            if (adminPassword !== confirm) {
                req.flash("message", "Passwords do not match")
                return res.redirect("/register")
            }
            next()
        })
    })
}