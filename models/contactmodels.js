// models/contactmodels.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  company: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String },
  contact: { type: String, required: true },
  type: { type: String, enum: ['email', 'linkedin'], default: 'email' },
  status: { type: String, enum: ['pending', 'approved'], default: 'pending' },
  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);
