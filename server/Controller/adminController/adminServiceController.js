const ServiceModel = require('../../Model/admin/Services')

// GET - All Services
exports.allServices = async (req, res) => {
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

        const serviceData = await ServiceModel.find({
            $or: [
                { serviceName: { $regex: '.*' + search + '.*', $options: 'i' } },
                { description: { $regex: '.*' + search + '.*', $options: 'i' } }
            ]
        })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec()

        const count = await ServiceModel.find({
            $or: [
                { serviceName: { $regex: '.*' + search + '.*', $options: 'i' } },
                { description: { $regex: '.*' + search + '.*', $options: 'i' } }
            ]
        })
            .countDocuments()

        res.render('Services/allServices', {
            title: 'AdminLTE | All Services',
            dashboardtitle: 'Services Page',
            message: req.flash('message'),
            error: req.flash('error'),
            displaydata: serviceData,
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

// GET - Add Service
exports.addService = ((req, res) => {
    res.render('Services/addService', {
        title: 'AdminLTE | Add New Service',
        dashboardtitle: 'Services Page',
        message: req.flash('message')
    })
})

// POST - Add Service
exports.createService = ((req, res) => {
    //console.log(req.body)
    const Service = new ServiceModel({
        serviceName: req.body.serviceName,
        description: req.body.description,
        image: req.file.filename
    })
    Service.save()
        .then(result => {
            console.log(result, "Service data created successfully.")
            req.flash('message', 'Added service successfully')
            res.redirect('/admin/allServices')
        })
        .catch(err => {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not send Empty data.')
            res.redirect('/admin/addService')
        })
})

// GET - Single Service for "Edit Service Page"
exports.singleService = ((req, res) => {

    const serviceID = req.params.id

    ServiceModel.findById(serviceID)
        .then(result => {
            res.render('Services/editService', {
                title: 'AdminLTE | Edit Service',
                dashboardtitle: 'Services Page',
                message: req.flash('message'),
                data: result
            })
        })
})

// PUT - Edit Service
exports.updateService = ((req, res) => {
    ServiceModel.findByIdAndUpdate(req.params.id, {
        serviceName: req.body.serviceName,
        description: req.body.description,
        image: req.file.filename
    }, (error, result) => {
        if (!error) {
            console.log(result, "Service data saved successfully.")
            req.flash('message', 'Service edited successfully')
            res.redirect('/admin/allServices')
        } else {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not save Empty data.')
            res.redirect('/admin/editService')
        }
    })
})

// DELETE - Service
exports.deleteService = ((req, res, next) => {
    const serviceID = req.params.id

    ServiceModel.deleteOne({ _id: serviceID })
        .then(result => {
            console.log(result, "Service data deleted successfully.")
            req.flash('message', 'Deleted Service data successfully')
            res.redirect('/admin/allServices')
        })
        .catch(err => {
            console.log(err, "No Data Deleted.")
            req.flash('error', 'Unable to delete service data.')
            res.redirect('/admin/allServices')
        })
})