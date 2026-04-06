// routes/contactroutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/contactmodels');

// GET /api/contacts?company=CompanyName
// Returns only APPROVED contacts for a specific company
router.get('/', async (req, res) => {
  try {
    const { company } = req.query;
    if (!company) {
      return res.status(400).json({ error: 'Company parameter is required' });
    }
    
    const contacts = await Contact.find({ 
      company: company, 
      status: 'approved' 
    });
    
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/contacts
// Submits a new contact as 'pending'
router.post('/', async (req, res) => {
  try {
    const { company, name, role, contact, type } = req.body;
    
    if (!company || !name || !contact) {
      return res.status(400).json({ error: 'Missing required fields: company, name, and contact are required.' });
    }

    const newContact = new Contact({
      company,
      name,
      role,
      contact,
      type: type || 'email',
      status: 'pending' // Defaults to pending for manual approval
    });

    await newContact.save();
    res.status(201).json({ message: 'Contact submitted successfully and is pending approval.', contact: newContact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;