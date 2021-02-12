const AlatBerat = require('../models/alatBerat')

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
//const APIFeatures = require('../utils/apiFeatures')
const cloudinary = require('cloudinary')

// Create new alatBerat   =>   /api/v1/admin/alatBerat/new
exports.newAlatBerat = catchAsyncErrors(async (req, res, next) => {

    let images = []
    if (typeof req.body.images === 'string') {
        images.push(req.body.images)
    } else {
        images = req.body.images
    }

    let imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: 'alatBerats'
        });

        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url
        })
    }

    req.body.images = imagesLinks

    req.body.user = req.user.id;

    const alatBerat = await AlatBerat.create(req.body);

    res.status(201).json({
        success: true,
        alatBerat
    })
})


// Get all alatBerats (Admin)  =>   /api/v1/admin/alatBerats
exports.getAllAlatBerats = catchAsyncErrors(async (req, res, next) => {

    const alatBerats = await AlatBerat.find();

    res.status(200).json({
        success: true,
        alatBerats
    })

})

// Get alatBerat details   =>   /api/v1/admin/alatBerat/:id
exports.getAlatBeratDetails = catchAsyncErrors(async (req, res, next) => {
    const alatBerat = await AlatBerat.findById(req.params.id);

    if (!alatBerat) {
        return next(new ErrorHandler(`Alat Berat does not found with id: ${req.params.id}`))
    }

    res.status(200).json({
        success: true,
        alatBerat
    })
})

/*
// Lihat alatBerat details   =>   /api/v1/admin/alatBerat/:id
exports.seeAlatBeratDetails = catchAsyncErrors(async (req, res, next) => {
    const alatBerat = await AlatBerat.findById(req.params.id);

    if (!alatBerat) {
        return next(new ErrorHandler(`Alat Berat does not found with id: ${req.params.id}`))
    }

    res.status(200).json({
        success: true,
        alatBerat
    })
})
*/


// Update AlatBerat   =>   /api/v1/admin/alatBerat/:id
exports.updateAlatBerat = catchAsyncErrors(async (req, res, next) => {

    let alatBerat = await AlatBerat.findById(req.params.id);

    if (!alatBerat) {
        return next(new ErrorHandler('Alat Berat not found', 404));
    }

    let images = []
    if (typeof req.body.images === 'string') {
        images.push(req.body.images)
    } else {
        images = req.body.images
    }

    if (images !== undefined) {

        // Deleting images associated with the alat Berat
        for (let i = 0; i < alatBerat.images.length; i++) {
            const result = await cloudinary.v2.uploader.destroy(alatBerat.images[i].public_id)
        }

        let imagesLinks = [];

        for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.v2.uploader.upload(images[i], {
                folder: 'alatBerats'
            });

            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url
            })
        }

        req.body.images = imagesLinks

    }


    alatBerat = await AlatBerat.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        alatBerat
    })

})


// Delete AlatBerat   =>   /api/v1/admin/alatBerat/:id
exports.deleteAlatBerat = catchAsyncErrors(async (req, res, next) => {

    const alatBerat = await AlatBerat.findById(req.params.id);

    if (!alatBerat) {
        return next(new ErrorHandler('Alat Berat tidak ditemukan', 404));
    }

    // Deleting images associated with the alatBerat
    for (let i = 0; i < alatBerat.images.length; i++) {
        const result = await cloudinary.v2.uploader.destroy(alatBerat.images[i].public_id)
    }

    await alatBerat.remove();

    res.status(200).json({
        success: true,
        message: 'AlatBerat is deleted.'
    })

})



