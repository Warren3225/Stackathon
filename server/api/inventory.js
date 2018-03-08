const router = require('express').Router()
const { Inventory, Piece } = require('../db/models')
module.exports = router

//get all inventories
router.get('/', (req, res, next) => {
    Inventory.findAll({
        include: [{ model: Piece }]
    })
        .then(inventory => res.json(inventory))
        .catch(next)
})

//get inventory for a piece
router.get('/:id', (req, res, next) => {
    Inventory.findOne({
        where: { pieceId: req.params.id },
        include: [{ model: Piece }]
    })
        .then(inventory => rse.json(inventory))
        .catch(next)
})


// add inventory
router.post('/', (req, res, next) => {
    Inventory.create(req.body, {
        include: [{ model: Piece }]
    })
        .then(newInventory => res.json(newInventory))
        .catch(next)
})

//edit inventory
router.put('/:id', (req, res, next) => {
    Inventory.findById(req.params.id)
        .then(inventory => inventory.update(
            {
                category: req.body.category,
                item: req.body.item,
                quantity: req.body.quantity
            }
        ))
        .then(inventory => res.json(inventory))
        .catch(next)
})