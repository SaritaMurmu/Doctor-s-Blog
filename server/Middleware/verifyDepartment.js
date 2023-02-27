const Department=require('../Model/admin/Department')

exports.checkDuplicateEntries = (req, res, next) => {

    Department.findOne({
        deptName: req.body.deptName
    }).exec((err, dept) => {
        if (err) {
            console.log(err);
            return;
      }
        if (dept) {
            req.flash("message", "Department Name Already Exists.");
            return res.redirect("/admin/addDepartment");
    }
    next();
        })
}