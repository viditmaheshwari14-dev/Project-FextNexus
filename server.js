const express  = require('express')
const mongoose = require('mongoose')
const cors     = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB error:', err))

app.use('/api/colleges', require('./routes/collegeroutes'))
app.use('/api/fests',    require('./routes/festroutes'))
app.use('/api/sponsors', require('./routes/sponsorsroutes'))
app.use('/api/upcoming', require('./routes/upcomingroutes'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`))