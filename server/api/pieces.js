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
router.get('/:id', (req, res, next) => {
    Piece.findById(req.params.id)
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
// router.delete('/:id', (req, res, next) => {
//     const pieceId = req.params.id;
//     const pieceToDelete = await Piece.findById(pieceId)
//     pieceToDelete.destroy()
//         .then(() => res.json({ id: pieceId }))
// })

//create a piece 
router.post('/', (req, res, next) => {
    console.log(req.body)
    Piece.create(req.body)
        .then(piece => res.json(piece))
        .catch(next)
})

