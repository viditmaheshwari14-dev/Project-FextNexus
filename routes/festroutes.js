const express   = require('express')
const router    = express.Router()
const festmodels = require('../models/festmodels')

router.get('/', async (req, res) => {
  try {
    const query = {}
    if (req.query.collegeId) query.collegeId = req.query.collegeId
    if (req.query.type)      query.type      = req.query.type
    const fests = await festmodels.find(query)
    res.json(fests)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const fest = await festModel.findOne({ id: req.params.id })
    if (!fest) return res.status(404).json({ error: 'Fest not found' })
    res.json(fest)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/:id/sponsors', async (req, res) => {
  try {
    const fest = await festmodels.findOne({ id: req.params.id })
    if (!fest) return res.status(404).json({ error: 'Fest not found' })
    const year = req.query.year
    if (year) {
      const sponsors = fest.years.get(year) || []
      return res.json(sponsors)
    }
    res.json(Object.fromEntries(fest.years))
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const fest = new festmodels(req.body)
    await fest.save()
    res.status(201).json(fest)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router