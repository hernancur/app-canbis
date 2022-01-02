const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "seed-companie",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.STRING,
        unique: true,
      },
      lineage: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      qr: {
        type: DataTypes.STRING,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
