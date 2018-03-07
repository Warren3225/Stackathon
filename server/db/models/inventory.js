const Sequelize = require('sequelize')
const db = require('../db')

const Inventory = db.define('inventory', {
    category: {
        type: Sequelize.STRING
    },
    item: {
        type: Sequelize.STRING
    },
    quantity: {
        type: Sequelize.NUMBER
    }
})

module.exports = Inventory