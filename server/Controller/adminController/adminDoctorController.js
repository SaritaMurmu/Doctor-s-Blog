const DoctorModel = require('../../Model/admin/Doctor/Doctor');
const DepartmentModel = require('../../Model/admin/Department')
var arr=[]

// GET - All Doctors
exports.allDoctors = (req, res) => {
    DoctorModel.find()
        .populate("department")
        .exec((error, data) => {
            if (!error) {
                res.render('Doctors/allDoctors', {
                    title: 'AdminLTE | All Doctors',
                    dashboardtitle: 'Doctors Page',
                    message: req.flash('message'),
                    error: req.flash('error'),
                    displaydata: data,
                })
            }
        })
}

// GET - Add Doctor
exports.addDoctor = ((req, res) => {
    DepartmentModel.find().then(result => {
        res.render('Doctors/addDoctor', {
            title: 'AdminLTE | Add New Doctor',
            dashboardtitle: 'Doctors Page',
            message: req.flash('message'),
            displayDatas: result,
        })
    })
})

// POST - Add Doctor
exports.createDoctor = ((req, res) => {
    console.log(req.body)
    
    let arr1=[]
    let obj1={}
    obj1.expertise=req.body.expertise,
    arr1.push(obj1)
   console.log('arr', arr)

    const Doctor = new DoctorModel({
        docImage: req.file.filename,
        department: req.body.department,
        docName: req.body.docName,
        qualification: arr,
        skill: req.body.skill,
        expertise: arr1
    })
    Doctor.save()
        .then(result => {
            console.log(result, "Doctor data created successfully.")
            req.flash('message', 'Added Doctor successfully')
            res.redirect('/admin/allDoctors')
            arr=[]
        })
        .catch(err => {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not send Empty data.')
            res.redirect('/admin/addDoctor')
        })
})

exports.addMore=((req, res) => {
    console.log(req.body,"req.body")
    
    let obj={}
    obj.year=req.body.year,
    obj.qua=req.body.qua,
    obj.quaDescription=req.body.quaDescription
    arr.push(obj)

    // Doctor.save()
    //     .then(result => {
    //         console.log(result, "Doctor data created successfully.")
    //         req.flash('message', 'Added Doctor successfully')
    //         res.redirect('/admin/allDoctors')
    //     })
    //     .catch(err => {
    //         console.log(err, "No Data Saved.")
    //         req.flash('error', 'You can not send Empty data.')
    //         res.redirect('/admin/addDoctor')
    //     })
})


// DELETE - Doctor
exports.deleteDoctor = ((req, res, next) => {
    const doctorID = req.params.id

    DoctorModel.deleteOne({ _id: doctorID })
        .then(result => {
            console.log(result, "Doctor data deleted successfully.")
            req.flash('message', 'Deleted Doctor data successfully')
            res.redirect('/admin/allDoctors')
        })
        .catch(err => {
            console.log(err, "No Data Deleted.")
            req.flash('error', 'Unable to delete doctor data.')
            res.redirect('/admin/allDoctors')
        })
})

