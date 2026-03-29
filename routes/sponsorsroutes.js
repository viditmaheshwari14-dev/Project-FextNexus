const express = require('express')
const router  = express.Router()

router.post('/enquiry', async (req, res) => {
  try {
    const { companyName, email, festId } = req.body
    if (!companyName || !email || !festId) {
      return res.status(400).json({ error: 'companyName, email and festId are required' })
    }
    console.log(`Enquiry from ${companyName} for fest ${festId}`)
    res.status(201).json({
      success: true,
      message: `Enquiry received. The fest team will reach out to ${email} soon.`,
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router