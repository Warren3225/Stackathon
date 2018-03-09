const router = require('express').Router()
const { Piece, Inventory } = require('../db/models')
module.exports = router


//get all pieces
router.get('/', (req, res, next) => {
    Piece.findAll()
        .then(pieces => res.json(pieces))
        .catch(next)
})

//get a piece
router.get('/:x/:y', (req, res, next) => {
    const xAxis = req.params.x;
    const yAxis = req.params.y;
    Piece.findOne({ where: { positionX: xAxis, positionY: yAxis } })
        .then(piece => res.json(piece))
        .catch(next)
})

//delete all pieces
router.delete('/p/all', (req, res, next) => {
    Piece.destroy({ where: {} })
        .then(() => res.send('Your board has been cleared'))
        .catch(next)
})

//delete all crates
router.delete('/p/crates', (req, res, next) => {
    Piece.destroy({ where: { wallOrCrate: 'crate' } })
        .then(walls => res.json(walls))
        .catch(next)
})

//delete piece
router.delete('/:x/:y', (req, res, next) => {
    const xAxis = req.params.x;
    const yAxis = req.params.y;
    Piece.destroy({ where: { positionX: xAxis, positionY: yAxis } })
        .then( result => res.json({ result }))
})

//create a piece
router.post('/', (req, res, next) => {
    Piece.create(req.body)
        .then(piece => res.json(piece))
        .catch(next)
})
