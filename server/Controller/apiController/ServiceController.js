const ServiceModel = require('../../Model/admin/Services')

// GET - All Services
exports.allServices = (req, res) => {
    ServiceModel.find((error, data) => {
        console.log(data)
        if (!error) {
            res.status(200).send({ success: true, msg: "All Services data from API fetched Successfully !", displaydata: data })
        }
    })
}

// GET - Single Service
exports.singleService = (req, res) => {

    const serviceID = req.params.id

    ServiceModel.findById(serviceID)
        .then(data => {
            res.status(200).send({ success: true, msg: `Service ID ${serviceID} from API fetched Successfully !`, service: data })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating User"
            })
        })
}

// POST - Add Service
exports.createService = async (req, res) => {
    //console.log(req.body)
    if (!req.body) {
        res.status(400).send({ message: "Please fill all the input fields." })
    }

    const Service = new ServiceModel({
        serviceName: req.body.serviceName,
        description: req.body.description,
        image: req.file.filename
    })

    await Service.save()
        .then(data => {
            res.status(200).send({ success: true, msg: "Service data created using API successfully!", service: data })
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a Service"
            })
        })
}

// PUT - Edit Service
exports.updateService = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Please fill all the input fields." })
    }

    const serviceID = req.params.id
    const serviceName = req.body.serviceName
    const description = req.body.description
    const image = req.file.filename

    ServiceModel.findById(serviceID)
        .then(async result => {
            result.serviceName = serviceName
            result.description = description
            result.image = image

            await result.save()
                .then(data => {
                    res.status(200).send({ success: true, msg: `Service edited using API successfully !`, service: data })
                })
                .catch(err => {
                    res.status(500).send({ message: err.message || "Some error occurred while creating a Service" })
                })
        })
}

// DELETE - Service
exports.deleteService = (req, res) => {
    const serviceID = req.params.id

    console.log('serviceID Value: ', serviceID)

    ServiceModel.deleteOne({ _id: serviceID })
        .then(data => {
            res.status(200).send({ success: true, msg: `Data with Service ID [${serviceID}] using API deleted Successfully !`, service: data })
        })
        .catch(error => {
            console.log(`Error: ${error}`)
        })
}