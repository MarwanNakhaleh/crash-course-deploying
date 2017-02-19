const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send('It works!');
})

app.listen(process.env.PORT, () => {
  console.log('server has started');
})