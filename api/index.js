const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Root endpoint')
})

const citiesRoute = require('./routes/cities.route');

app.use('/cities', citiesRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
