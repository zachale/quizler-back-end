const express = require('express')

const router = express.Router()
const port = 3001


// My hello world in Express
router.get('/',(req,res) => {
  res.send('Hello World!')
})

module.exports = router;