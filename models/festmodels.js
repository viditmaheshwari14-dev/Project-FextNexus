const mongoose = require('mongoose')

const sponsorEntrySchema = new mongoose.Schema({
  name:     { type: String, required: true },
  tier:     { type: String, enum: ['title','gold','silver','bronze','partner','associate'] },
  category: { type: String },
})

const festSchema = new mongoose.Schema({
  id:             { type: String, required: true, unique: true },
  collegeId:      { type: String, required: true },
  name:           { type: String, required: true },
  tagline:        { type: String },
  type:           { type: String, enum: ['cultural','tech','sports','other'] },
  icon:           { type: String },
  iconBg:         { type: String },
  footfall:       { type: String },
  sponsors_count: { type: Number, default: 0 },
  years: {
    type: Map,
    of: [sponsorEntrySchema],
  },
}, { timestamps: true })

module.exports = mongoose.model('Fest', festSchema)