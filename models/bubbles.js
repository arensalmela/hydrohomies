module.exports = function (sequelize, DataTypes) {
  const Bubbles = sequelize.define(
    "Bubbles",
    {
      bubbles: {
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
