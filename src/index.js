const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const xss = require('xss-clean')
const cors = require('cors')

const chiSquareTestRouter = require('./routes/chiSquareTestRouter.js')

// declare a new express app
const app = express()

const staticFilePath = path.join(__dirname + '/views')

app.use(express.static(staticFilePath))

// Set security HTTP Headers
app.use(helmet())

// Body parser, reading data from the body into req.body
app.use(bodyParser.json())

// Data sanitization against XSS
app.use(xss())

// Implement CORS
app.use(cors(
    // { origin: 'http://localhost:3000' }
))
app.options('*', cors())

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  // console.log('REQ HEADERS ======')
  // console.log(req.url)
  // console.log('REQ HEADERS ======')
  // console.log(req.headers)
  next()
})

app.get('/', (req, res) => {
  res.sendFile(path.join(staticFilePath + '/index.html'))
})
app.use('/api/v1/chiSquareTest', chiSquareTestRouter)

const PORT = 3000
const HOST = '0.0.0.0'

app.listen(PORT, HOST, function () {
  console.log('App started')
  console.log('http://localhost:3000')
})