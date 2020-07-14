const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    nama: {
        type: String
    },
    asal: {
        type: String
    },
    tujuan: {
        type: String
    },
    date: {
        type: String
    },
    classs: {
        type: String
    },
    jumlah: {
        type: String
    }
})

module.exports = mongoose.model('order', OrderSchema)