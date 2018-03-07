const Sequelize = require('sequelize');
const Promise = require('bluebird');

const { Inventory, User, User } = require('./server/db/models')
const db = require('./server/db')

const userDBseed =
    [
        {
            email: 'test@test.com',
            username: 'BobTheBuilder',
            password: '123'
        }
    ]

const inventoryDBseed =
    [
        {
            category: 'electronics',
            item: 'laptops',
            quantity: 50
        },
        {
            category: 'electronics',
            item: 'PS3',
            quantity: 100
        },
        {
            category: 'electronics',
            item: 'X-box',
            quantity: 25
        }
    ]

const pieceDBseed =
    [
        {
            positionX: 1,
            positionY: 1,
            wallOrCrate: 'wall'
        },
        {
            positionX: 1,
            positionY: 2,
            wallOrCrate: 'wall'
        },
        {
            positionX: 1,
            positionY: 3,
            wallOrCrate: 'wall'
        },
        {
            positionX: 1,
            positionY: 4,
            wallOrCrate: 'wall'
        },
        {
            positionX: 5,
            positionY: 5,
            wallOrCrate: 'crate'
        },
        {
            positionX: 10,
            positionY: 10,
            wallOrCrate: 'crate'
        },
        {
            positionX: 15,
            positionY: 15,
            wallOrCrate: 'crate'
        },

    ]

const seed = async () => {
    try {
        const piece = await Promise.all(pieceDBseed.map(piece => Piece.create(piece)));
        const inventory = await Promise.all(inventoryDBseed.map(inventory => Inventory.create(inventory)))
    } catch (err) {
        console.log(err);
    }
}

const main = () => {
    console.log('Syncing db...');
    db.sync({ force: true })
        .then(() => {
            console.log('Seeding database...');
            return seed();
        })
        .catch(err => {
            console.log('Error while seeding');
            console.log(err.stack);
        })
        .then(() => {
            db.close();
            return null;
        });
};

main();