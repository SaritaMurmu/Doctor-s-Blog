const DepartmentModel = require('../../Model/admin/Department')

// GET - All Departments
exports.allDepartments = (req, res) => {
    DepartmentModel.find((error, data) => {
        console.log(data)
        if (!error) {
            res.status(200).send({ success: true, msg: "All Departments data from API fetched Successfully !", displaydata: data })
        }
    })
}

// GET - Single Department
exports.singleDepartment = (req, res) => {

    const departmentId = req.params.id

    DepartmentModel.findById(departmentId)
        .then(data => {
            res.status(200).send({ success: true, msg: `Department ID ${departmentId} from API fetched Successfully !`, department: data })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating User"
            })
        })
}

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
            res.status(200).send({ msg: 'Added department successfully', data: result })
        })
        .catch(err => {
            console.log(err, "No Data Saved.")
            res.status(400).send('You can not send Empty data.')
        })
})

// PUT - Edit Department
exports.updateDepartment = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Please fill all the input fields." })
    }

    const departmentID = req.params.id
    const deptImage = req.file.filename
    const deptName = req.body.deptName
    const deptDescription = req.body.deptDescription

    DepartmentModel.findById(departmentID)
        .then(async result => {
            result.deptImage = deptImage
            result.deptName = deptName
            result.deptDescription = deptDescription

            await result.save()
                .then(data => {
                    res.status(200).send({ success: true, msg: `Department edited using API successfully !`, deapartment: data })
                })
                .catch(err => {
                    res.status(500).send({ message: err.message || "Some error occurred while creating a Department" })
                })
        })
};


// DELETE - Deaprtment
exports.deleteDepartment = (req, res) => {
    const departmentID = req.params.id

    console.log('departmentID Value: ', departmentID)

    DepartmentModel.deleteOne({ _id: departmentID })
        .then(data => {
            res.status(200).send({ success: true, msg: `Data with Department ID [${departmentID}] using API deleted Successfully !`, department: data })
        })
        .catch(error => {
            console.log(`Error: ${error}`)
        })
}