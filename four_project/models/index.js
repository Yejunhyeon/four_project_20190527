const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize,Sequelize);
db.Team = require('./team')(sequelize,Sequelize);
db.Japan = require('./japan')(sequelize,Sequelize);
db.Question = require('./question')(sequelize,Sequelize);
db.Comment = require('./comment')(sequelize,Sequelize);

db.Question.hasMany(db.Comment,{ foreignKey:'commenter', sourceKey:'id'} );
db.Comment.belongsTo(db.Question,{ foreignKey:'commenter', targetKey:'id'} );

module.exports = db;
