const app = require('express')()
const cors = require('cors')

const router = require('./router')
app.use(cors()) // 允许跨域

app.use('/api', router)

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World!')
})

app.get('/foo', (req, res, next) => {
  res.send('foo')
})
app.post('/foo', (req, res, next) => {
  res.send('POST foo')
})

module.exports = app
