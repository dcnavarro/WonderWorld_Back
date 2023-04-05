const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },   
     
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    difficulty: {
      type: DataTypes.ENUM(
        "1",
        "2",
        "3",
        "4",
        "5"
      ),
      allowNull: false,
    },

    duration: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
        max: 24
      }
    },

    season: {
      type: DataTypes.ENUM(
        "Summer",
        "Autumn",
        "Winter",
        "Spring"
      ),
      allowNull: false,
    },
    cost: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
        max: 3000
      }
    },
},
{timestamps: false}
);
};