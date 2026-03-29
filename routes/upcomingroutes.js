const express        = require('express')
const router         = express.Router()
const upcomingmodels  = require('../models/upcomingmodels')

router.get('/', async (req, res) => {
  try {
    const events = await upcomingmodels.find()
    res.json(events)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router