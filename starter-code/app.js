const express = require("express")
const app = express()
require("dotenv").config()
app.use(express.static('public'))

app.get('/', (request, response) => {
  console.log(__dirname)
  response.sendFile(`${__dirname}/views/home.html`)
})

app.get('/about', (request, res) => {
  res.sendFile(`${__dirname}/views/about-page.html`)
})

app.get('/photos', (request, res) => {
  res.sendFile(`${__dirname}/views/photos-page.html`)
})

app.listen(process.env.PORT,
  console.log(`server on port ${process.env.PORT}`))
  