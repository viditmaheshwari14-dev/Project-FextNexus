const mongoose = require('mongoose')

const collegeSchema = new mongoose.Schema({
  id:          { type: String, required: true, unique: true },
  name:        { type: String, required: true },
  short:       { type: String, required: true },
  type:        { type: String, enum: ['iit','du','state','iiit','nit'] },
  typeName:    { type: String },
  location:    { type: String },
  color:       { type: String },
  glow:        { type: String },
  established: { type: Number },
  students:    { type: String },
  fesTypes:    [{ type: String }],
  fests:       { type: Number, default: 0 },
  sponsors:    { type: Number, default: 0 },
  years:       { type: Number, default: 0 },
}, { timestamps: true })

module.exports = mongoose.model('College', collegeSchema)