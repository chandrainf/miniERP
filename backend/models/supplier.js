const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({
    //item: [
     // {
       // type: Schema.Types.ObjectId,
      //  ref: 'sparepart',
      //},
    //],
    namaSupplier: {
      type: String,
      maxlength: 255,
      required: true,
    },
    alamat: { type: String, maxlength: 255 },
    telepon1: { type: String, maxlength: 24 },
    telepon2: { type: String, maxlength: 24 },
    email: { type: String, maxlength: 80, unique: true },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Supplier', supplierSchema);