const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoURL = 'mongodb://localhost:27017/latihan'

mongoose.connect(mongoURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Success')
}).catch((err) => {
    console.log('Failed')
})

app.use(cors())

app.use(bodyParser.json({
    extended: true,
    limit: '20mb'
}))
  
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '20mb'
}))
// list route
app.use('/user', require('./routes/User'))
app.use('/order', require('./routes/Order'))

app.listen(5000, () => {
    console.log('Server Started at port 5000')
})