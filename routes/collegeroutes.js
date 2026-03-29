const express        = require('express')
const router         = express.Router()
const collegemodels   = require('../models/collegemodels')

router.get('/', async (req, res) => {
  try {
    const colleges = await collegemodels.find()
    res.json(colleges)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const college = await collegemodels.findOne({ id: req.params.id })
    if (!college) return res.status(404).json({ error: 'College not found' })
    res.json(college)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router