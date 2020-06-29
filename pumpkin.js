const db = require('./dbConfig');
const { Sequelize, DataTypes, Model } = require('sequelize');


const Pumpkin = db.define({

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.STRING
  },
  evil: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
  carved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  candle: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})




// the defined model is the class itself
console.log(User === sequelize.models.User); // true
module.exports = Pumpkin;
