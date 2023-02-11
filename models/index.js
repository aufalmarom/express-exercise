const dbConfig = require('../config/dbConfig.js');
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: 0,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)
const db = {}

db.sequelize = sequelize

db.users = require('./UserModel.js')(sequelize, DataTypes);
db.projects = require('./ProjectModel.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

module.exports = db