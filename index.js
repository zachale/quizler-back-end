const express = require('express')

const app = express()
const port = 3001


// My hello world in Express
app.get('/',(req,res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('Quizler is listing on port ${port}')
})