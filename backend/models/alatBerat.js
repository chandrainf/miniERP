const mongoose = require('mongoose')

const alatBeratSchema = new mongoose.Schema({
  kodeAlat: {
    type: String,
    required: true,
    maxlength: 50,
  },
  namaAlat: { type: String, maxlength: 100 },
  merk: { type: String, maxlength: 80 },
  model: { type: String, maxlength: 80 },
  kapasitas: { type: String, maxlength: 80 },
  nomorRangka: { type: String, maxlength: 255 },
  nomorMesin: { type: String, maxlength: 255 },
  nomorPlat: { type: String, maxlength: 255 },
  tahunPembuatan: { 
    type: String,
    minLength: [4, 'Tahun pembuatan harus 4 angka'],
   },
  tahunRegistrasi: { type: String },
  proyek: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'proyek',
    },
  ],
  status: {
    type: String,
    required: true,
    enum: [
      'BEKERJA',
      'STANDBY',
      'RUSAK',
      'MAINTENANCE',
      'PERBAIKAN',
    ],
  },
  kepemilikan: {
    type: String,
    required: true,
    enum: [
      'Perusahaan',
      'Rental',
    ], 
  },
  SIA: { type: String },
  STNK: { type: String },
  Pajak: { type: String },
  KIR: { type: String },
  images: [
    {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    }
],
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

module.exports = mongoose.model('AlatBerat', alatBeratSchema);