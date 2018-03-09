const router = require('express').Router()
const { Inventory, Piece } = require('../db/models')
module.exports = router

// //get all inventories by category
// router.get('/category/:category', (req, res, next) => {
//     Inventory.findAll({
//         where: { category: req.params.category },
//         include: [{ model: Piece }]
//     })
//         .then(inventory => res.json(inventory))
//         .catch(next)
// })


// //get all inventories by items
// router.get('/item/:item', (req, res, next) => {
//     Inventory.findAll({
//         where: { item: req.params.item },
//         include: [{ model: Piece }]
//     })
//         .then(inventory => res.json(inventory))
//         .catch(next)
// })



// //get inventory for a piece
// router.get('/:x:/y', (req, res, next) => {
//     const xAxis = req.params.x;
//     const yAxis = req.params.y;
//     Inventory.findOne({
//         include: [{
//             model: Piece,
//             where: { positionX: xAxis, positionY: yAxis }
//         }]
//     })
//         .then(inventory => rse.json(inventory))
//         .catch(next)
// })


// add inventory
// router.post('/:x/:y', (req, res, next) => {
//     const xAxis = req.params.x;
//     const yAxis = req.params.y;
//     Inventory.create(req.body, {
//         include: [{
//             model: Piece,
//             where: { positionX: xAxis, positionY: yAxis }
//         }]
//     })
//         .then(newInventory => res.json(newInventory))
//         .catch(next)
// })

// //edit inventory //HERE
// router.put('/:id/:x/:y', (req, res, next) => {
//     Inventory.findById(req.params.id)
//         .then(inventory => inventory.update(
//             {
//                 category: req.body.category,
//                 item: req.body.item,
//                 quantity: req.body.quantity
//             }
//         ))
//         .then(inventory => res.json(inventory))
//         .catch(next)
// })

// //get all inventories
// router.get('/', (req, res, next) => {
//     Inventory.findAll({
//         include: [{ model: Piece }]
//     })
//         .then(inventory => res.json(inventory))
//         .catch(next)
// })