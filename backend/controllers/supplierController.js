const Supplier = require('../models/supplier')

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
//const APIFeatures = require('../utils/apiFeatures')
//const cloudinary = require('cloudinary')

// Create new supplier   =>   /api/v1/admin/supplier/new
exports.newSupplier = catchAsyncErrors(async (req, res, next) => {

    req.body.user = req.user.id;

    const supplier = await Supplier.create(req.body);

    res.status(201).json({
        success: true,
        supplier
    })
})


// Get all suppliers (Admin)  =>   /api/v1/admin/suppliers
exports.getAllSuppliers = catchAsyncErrors(async (req, res, next) => {

    const suppliers = await Supplier.find();

    res.status(200).json({
        success: true,
        suppliers
    })

})

// Get supplier details   =>   /api/v1/admin/supplier/:id
exports.getSupplierDetails = catchAsyncErrors(async (req, res, next) => {
    const supplier = await Supplier.findById(req.params.id);

    if (!supplier) {
        return next(new ErrorHandler(`Supplier does not found with id: ${req.params.id}`))
    }

    res.status(200).json({
        success: true,
        supplier
    })
})


// Update Supplier   =>   /api/v1/admin/supplier/:id
exports.updateSupplier = catchAsyncErrors(async (req, res, next) => {

    let supplier = await Supplier.findById(req.params.id);

    if (!supplier) {
        return next(new ErrorHandler('Supplier not found', 404));
    }


    supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        supplier
    })

})


// Delete Supplier   =>   /api/v1/admin/supplier/:id
exports.deleteSupplier = catchAsyncErrors(async (req, res, next) => {

    const supplier = await Supplier.findById(req.params.id);

    if (!supplier) {
        return next(new ErrorHandler('Supplier not found', 404));
    }

    await supplier.remove();

    res.status(200).json({
        success: true,
        message: 'Supplier is deleted.'
    })

})



