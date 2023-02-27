const DepartmentModel = require('../../Model/admin/Department')

// GET - All Department
// exports.allDepartments = (req, res) => {
//     DepartmentModel.find((error, data) => {
//         if (!error) {
//             res.render('Departments/allDepartments', {
//                 title: 'AdminLTE | All Department',
//                 dashboardtitle: 'Departments Page',
//                 message: req.flash('message'),
//                 error: req.flash('error'),
//                 displaydata: data
//             })
//         }
//     })
// }

exports.allDepartments = async (req, res) => {
    try {

        var search = ''
        if (req.query.search) {
            search = req.query.search
        }

        var page = 1
        if (req.query.page) {
            page = req.query.page
        }

        const limit = 5

        const departmentData = await DepartmentModel.find({
            $or: [
                { deptName: { $regex: '.*' + search + '.*', $options: 'i' } },
                { deptDescription: { $regex: '.*' + search + '.*', $options: 'i' } }
            ]
        })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec()

        const count = await DepartmentModel.find({
            $or: [
                { deptName: { $regex: '.*' + search + '.*', $options: 'i' } },
                { deptDescription: { $regex: '.*' + search + '.*', $options: 'i' } }
            ]
        })
            .countDocuments()

        res.render('Departments/allDepartments', {
            title: 'AdminLTE | All Department',
            dashboardtitle: 'Departments Page',
            message: req.flash('message'),
            error: req.flash('error'),
            displaydata: departmentData,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            previousPage: page - 1,
            nextPage: page - (-1),
            count: count,
            limit: limit
        })

    } catch (error) {
        console.log(error.message)
    }
}

// GET - Add Department
exports.addDepartment = ((req, res) => {
    res.render('Departments/addDepartment', {
        title: 'AdminLTE | Add New Department',
        dashboardtitle: 'Departments Page',
        message: req.flash('message')
    })
})


// POST - Add Department
exports.createDepartment = ((req, res) => {
    //console.log(req.body)
    const Department = new DepartmentModel({
        deptImage: req.file.filename,
        deptName: req.body.deptName,
        deptDescription: req.body.deptDescription
    })
    Department.save()
        .then(result => {
            console.log(result, "Department data created successfully.")
            req.flash('message', 'Added department successfully')
            res.redirect('/admin/allDepartments')
        })
        .catch(err => {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not send Empty data.')
            res.redirect('/admin/addDepartment')
        })
})

// GET - Single Department for "Edit Department Page"
exports.singleDepartment = ((req, res) => {

    const departmentID = req.params.id

    DepartmentModel.findById(departmentID)
        .then(result => {
            res.render('Departments/editDepartment', {
                title: 'AdminLTE | Edit Department',
                dashboardtitle: 'Departments Page',
                message: req.flash('message'),
                data: result
            })
        })
})

// PUT - Edit Department
exports.updateDepartment = ((req, res) => {
    DepartmentModel.findByIdAndUpdate(req.params.id, {
        deptImage: req.file.filename,
        deptName: req.body.deptName,
        deptDescription: req.body.deptDescription
    }, (error, result) => {
        if (!error) {
            console.log(result, "Departments data saved successfully.")
            req.flash('message', 'Departments edited successfully')
            res.redirect('/admin/allDepartments')
        } else {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not save Empty data.')
            res.redirect('/admin/editDepartment')
        }
    })
})

// DELETE - Department
exports.deleteDepartment = ((req, res, next) => {
    const departmentID = req.params.id

    DepartmentModel.deleteOne({ _id: departmentID })
        .then(result => {
            console.log(result, "Department data deleted successfully.")
            req.flash('message', 'Deleted department data successfully')
            res.redirect('/admin/allDepartments')
        })
        .catch(err => {
            console.log(err, "No Data Deleted.")
            req.flash('error', 'Unable to delete department data.')
            res.redirect('/admin/allDeaprtments')
        })
});