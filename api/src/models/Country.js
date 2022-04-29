const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    alpha3Code:{
      type: DataTypes.STRING(3),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags:{
      type: DataTypes.JSON,
      allowNull: false,
    },
    region:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion:{
      type: DataTypes.STRING,
    },
    area:{
      type: DataTypes.DECIMAL,
    },
    population:{
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false
  });
};
