const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init({
    // add properites here, ex:
   traveller_amount: {
         type: DataTypes.INTEGER,
         allowNull:false
    },
    trip_budget:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
},{
    sequelize
});

module.exports=Trip