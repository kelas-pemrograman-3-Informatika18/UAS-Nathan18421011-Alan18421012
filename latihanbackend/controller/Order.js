const orderModel = require('../model/Order')
const { requestResponse } = require('../config')
const objectId = require('mongoose').Types.ObjectId

exports.insertTiket = (data) =>
    new Promise((resolve, reject) => {
        orderModel.findOne({
            nama: data.nama
        }).then(order => {
            if (order) {
                resolve(requestResponse.gagal('Name Sudah Terdaftar'))
            } else {
                orderModel.create(data)
                    .then(() => resolve(requestResponse.sukses('Berhasil Pesan Tiket')))
                    .catch(() => reject(requestResponse.serverError))
            }
        })
    })

exports.getAllTiket = () =>
    new Promise((resolve, reject) => {
        orderModel.find({
        }).then(order => {resolve(requestResponse.suksesWithData(order))
        }).catch(() => reject(requestResponse.serverError))
    })

exports.getbyId = (id) =>
    new Promise((resolve, reject) => {
        orderModel.findOne({
            _id: objectId(id)
        }).then(order => resolve(requestResponse.suksesWithData(order)))
        .catch(error => reject(requestResponse.serverError))
    })

exports.edit = (data, id) =>
    new Promise((resolve, reject) => {
        orderModel.updateOne({
        _id: objectId(id)
        }, data).then(() => {
        resolve({
            sukses: true,
            pesan: 'Berhasil Edit'
        })
        }).catch(() => {
        reject({
            sukses: false,
            pesan: 'Gagal Edit'
        })
        })
    })

exports.delete = (id) =>
    new Promise((resolve, reject) => {
        orderModel.deleteOne({
        _id: objectId(id)
        }).then(() => {
        resolve({
            sukses: true,
            pesan: 'Berhasil Hapus'
        })
        }).catch(() => {
        reject({
            sukses: false,
            pesan: 'Gagal Hapus'
        })
        })
    })