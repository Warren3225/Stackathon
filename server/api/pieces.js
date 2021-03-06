const router = require('express').Router()
const { Piece } = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
module.exports = router


//delete all pieces DONE
router.delete('/p/all', (req, res, next) => {
    Piece.destroy({ where: {} })
        .then(() => res.send([]))
        .catch(next)
})

//delete all crates DONE
router.delete('/p/crates', (req, res, next) => {
    Piece.destroy({ where: { wallOrCrate: 'crate' } })
        .then(() => Piece.findAll().then(result => res.send(result)))
        .catch(next)
})

//get pieces  by category  //DONE
router.get('/category/:category', (req, res, next) => {
    Piece.findAll({
        where: {
            [Op.or]: [{ category: req.params.category }, { wallOrCrate: 'wall' }]
        }
        // where: { category: req.params.category }
    })
        .then(piece => res.json(piece))
        .catch(next)
})

router.get('/item/:item', (req, res, next) => { //DONE
    Piece.findAll({
        where: {
            [Op.or]: [{ item: req.params.item }, { wallOrCrate: 'wall' }]
        }
    })
        .then(piece => res.json(piece))
        .catch(next)
})

//get a piece DONE
router.get('/:x/:y', (req, res, next) => {
    const xAxis = req.params.x;
    const yAxis = req.params.y;
    Piece.findOne({ where: { positionX: xAxis, positionY: yAxis } })
        .then(piece => res.json(piece))
        .catch(next)
})


//delete piece DONE
router.delete('/:id', (req, res, next) => {
    Piece.destroy({ where: { id: req.params.id } })
        .then(result => res.json(result))
        .catch(next)
})


//DONE??
//create a piece //should be able to lock x/y/id position so that you can add inventory data
router.post('/', (req, res, next) => {
    Piece.create(req.body)
        .then(piece => res.json(piece))
        .catch(next)
})

//update inventory of a piece DONE
router.put('/:x/:y', (req, res, next) => {
    const xAxis = req.params.x;
    const yAxis = req.params.y;
    Piece.findOne({ where: { positionX: xAxis, positionY: yAxis } })
        .then(piece => piece.update({
            category: req.body.category,
            item: req.body.item,
            quantity: req.body.quantity
        }))
        .then(piece => res.json(piece))
        .catch(next)
})

//get all pieces DONE
router.get('/', (req, res, next) => {
    Piece.findAll()
        .then(pieces => res.json(pieces))
        .catch(next)
})
