const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize('emotions', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});


const models = [
    require('./models/survey'),
    // require('./models/response'),
    // require('./models/emotion'),
    // require('./models/demographic'),
];

// Initialize models
models.forEach(model => {
    const seqModel = model(sequelize, Sequelize)
    db[seqModel.name] = seqModel
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
