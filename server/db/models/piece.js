const Sequelize = require('sequelize')
const db = require('../db')

const Piece = db.define('pieces', {
    positionX: {
        type: Sequelize.INTEGER,
        validate: {
            min: 0,
            max: 20
        }
    },
    positionY: {
        type: Sequelize.INTEGER,
        validate: {
            min: 0,
            max: 20
        }
    },
    wallOrCrate: {
        type: Sequelize.ENUM('wall', 'crate')
    }
})

module.exports = Piece;