const router = require('express').Router()
const orderController = require('../controller/Order')
  
router.post('/tiket', (req, res) => {
    orderController.insertTiket(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
  })

router.get('/getalltiket', (req, res) => {
    orderController.getAllTiket()
      .then(result => res.json(result))
      .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    orderController.getbyId(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.json(err))
})

router.put('/edit/:id', (req, res) => {
    orderController.edit(req.body, req.params.id)
      .then(result => res.json(result))
      .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res) => {
    orderController.delete(req.params.id)
      .then(result => res.json(result))
      .catch(err => res.json(err))
})

module.exports = router