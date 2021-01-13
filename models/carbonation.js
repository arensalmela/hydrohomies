module.exports = function (sequelize, DataTypes) {
  let Bubbles = sequelize.define(
    "Bubbles",
    {
      carbonation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Bubbles;
};
