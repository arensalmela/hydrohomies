module.exports = function (sequelize, DataTypes) {
  const Bubbles = sequelize.define(
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
