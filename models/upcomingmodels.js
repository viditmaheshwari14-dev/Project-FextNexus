const mongoose = require('mongoose')

const upcomingSchema = new mongoose.Schema({
  date:      { type: String, required: true },
  fest:      { type: String, required: true },
  college:   { type: String, required: true },
  collegeId: { type: String },
  type:      { type: String },
  seeking:   { type: Boolean, default: false },
  tags:      [{ type: String }],
}, { timestamps: true })

module.exports = mongoose.model('Upcoming', upcomingSchema)