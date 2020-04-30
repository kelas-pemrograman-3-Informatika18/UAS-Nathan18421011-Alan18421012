const express = require('express')
const app = express()
const mongoose = require('mongoose')

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
// list route
app.use('/user', require('./routes/User'))

app.listen(5000, function () {
    console.log('Server Started at port 5000')
})