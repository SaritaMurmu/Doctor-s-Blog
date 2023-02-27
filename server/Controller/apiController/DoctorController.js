const DoctorModel = require("../../Model/admin/Doctor/Doctor")
const DepartmentModel = require("../../Model/admin/Department");

// GET - All Doctors
exports.allDoctors = (req, res) => {
    DoctorModel.find()
        .populate("department")
        .exec((error, data) => {
            console.log(data)
            if (!error) {
                res
                  .status(200)
                  .send({
                    success: true,
                    msg: "All Doctors data from API fetched Successfully !",
                    doctors: data,
                  });
            }
        })
}


exports.doctorsByCategory = (req, res) => {
    const doctorCategory = req.params.cat

    DepartmentModel.findOne({ deptName: doctorCategory }).exec(
      (err, department) => {
        if (err) {
          res.status(500).json({ error: error });
        }

        if (!department) {
          res.status(404).json({ message: "Department not found" });
        } else {
          DoctorModel.find({ department: department._id })
            .populate("department")
            .exec((err, doctors) => {
              if (err) {
                res.status(500).json({ error: error });
              }

              res.status(200).json({doctors: doctors});
            });
        }
      }
    );
}

// GET - Single Doctor
exports.singleDoctor = (req, res) => {

    const doctorID = req.params.id

    DoctorModel.findById(doctorID)
        .then(data => {
            res.status(200).send({ success: true, msg: `Doctor ID ${doctorID}from API fetched Successfully !`, doctor: data })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating User"
            })
        })
}

// POST - Add Doctor (Use the department ID for the "department" field in "addDoctor API")
exports.createDoctor = async (req, res, next) => {
    try {
        const docImage = req.file.filename
        const { department, docName } = req.body

        const doctorData = await DoctorModel.create({ docImage, department, docName })
        return res.json({ status: true, data: doctorData })

    } catch (error) {
        next(error)
    }
}

// PUT - Edit Single Doctor
exports.updateDoctor = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Please fill all the input fields." })
    }

    const doctorID = req.params.id
    const docImage = req.file.filename
    const department = req.body.department
    const docName = req.body.docName

    DoctorModel.findById(doctorID)
        .then(async result => {
            result.docImage = docImage
            result.department = department
            result.docName = docName

            await result.save()
                .then(data => {
                    res.status(200).send({ success: true, msg: `Doctor edited using API successfully !`, doctor: data })
                })
                .catch(err => {
                    res.status(500).send({ message: err.message || "Some error occurred while creating a Service" })
                })
        })
}

// DELETE - Doctor
exports.deleteDoctor = (req, res) => {
    const doctorID = req.params.id

    console.log('serviceID Value: ', doctorID)

    DoctorModel.deleteOne({ _id: doctorID })
        .then(data => {
            res.status(200).send({ success: true, msg: `Data with Service ID [${doctorID}] using API deleted Successfully !`, doctor: data })
        })
        .catch(error => {
            console.log(`Error: ${error}`)
        })
}