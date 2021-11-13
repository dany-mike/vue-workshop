const express = require('express')
const cors = require("cors");

const app = express()
const port = 3000

app.use(express.json());
app.use(cors({
  origin: `*`
}));

app.get('/', (req, res) => {
  res.send('Root endpoint')
})

const cityRoute = require('./routes/cities.route');

app.use('/city', cityRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
