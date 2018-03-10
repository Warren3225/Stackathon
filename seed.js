const Sequelize = require('sequelize');
const Promise = require('bluebird');

const { Inventory, User, Piece } = require('./server/db/models')
const db = require('./server/db')

const userDBseed =
    [
        {
            email: 'test@test.com',
            username: 'BobTheBuilder',
            password: '123'
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
            positionX: 1,
            positionY: 5,
            wallOrCrate: 'wall'
        },
        {
            positionX: 1,
            positionY: 6,
            wallOrCrate: 'wall'
        },
        {
            positionX: 1,
            positionY: 7,
            wallOrCrate: 'wall'
        },
        {
            positionX: 1,
            positionY: 8,
            wallOrCrate: 'wall'
        },
        {
            positionX: 1,
            positionY: 9,
            wallOrCrate: 'wall'
        },
        {
            positionX: 1,
            positionY: 10,
            wallOrCrate: 'wall'
        },
        {
            positionX: 1,
            positionY: 11,
            wallOrCrate: 'wall'
        },
        {
            positionX: 1,
            positionY: 12,
            wallOrCrate: 'wall'
        },
        {
            positionX: 2,
            positionY: 12,
            wallOrCrate: 'wall'
        },
        {
            positionX: 3,
            positionY: 12,
            wallOrCrate: 'wall'
        },
        {
            positionX: 4,
            positionY: 12,
            wallOrCrate: 'wall'
        },
        {
            positionX: 5,
            positionY: 12,
            wallOrCrate: 'wall'
        },
        {
            positionX: 6,
            positionY: 12,
            wallOrCrate: 'wall'
        },
        {
            positionX: 7,
            positionY: 12,
            wallOrCrate: 'wall'
        },
        {
            positionX: 8,
            positionY: 12,
            wallOrCrate: 'wall'
        },
        {
            positionX: 8,
            positionY: 1,
            wallOrCrate: 'wall'
        },
        {
            positionX: 8,
            positionY: 2,
            wallOrCrate: 'wall'
        },
        {
            positionX: 8,
            positionY: 3,
            wallOrCrate: 'wall'
        },
        {
            positionX: 8,
            positionY: 4,
            wallOrCrate: 'wall'
        },
        {
            positionX: 8,
            positionY: 5,
            wallOrCrate: 'wall'
        },
        {
            positionX: 8,
            positionY: 6,
            wallOrCrate: 'wall'
        },
        {
            positionX: 8,
            positionY: 7,
            wallOrCrate: 'wall'
        },
        {
            positionX: 8,
            positionY: 8,
            wallOrCrate: 'wall'
        },
        {
            positionX: 8,
            positionY: 9,
            wallOrCrate: 'wall'
        },
        {
            positionX: 8,
            positionY: 10,
            wallOrCrate: 'wall'
        },
        {
            positionX: 8,
            positionY: 11,
            wallOrCrate: 'wall'
        },
        {
            positionX: 8,
            positionY: 12,
            wallOrCrate: 'wall'
        },
        {
            positionX: 5,
            positionY: 5,
            wallOrCrate: 'crate',
            category: 'electronics',
            item: 'laptops',
            quantity: 50
        },
        {
            positionX: 10,
            positionY: 10,
            wallOrCrate: 'crate',
            category: 'electronics',
            item: 'PS3',
            quantity: 100,
        },
        {
            positionX: 15,
            positionY: 15,
            wallOrCrate: 'crate',
            category: 'clothing',
            item: `sweaters`,
            quantity: 25,
        },

    ]

const seed = async () => {
    try {
        const piece = await Promise.all(pieceDBseed.map(piece => Piece.create(piece)));
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