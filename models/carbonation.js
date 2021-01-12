module.exports = function (sequelize, DataTypes) {
  let Bubbles = sequelize.define(
    "Bubbles",
    {
      id: {
        type: DataTypes.Int,
        allowNull: false,
        validate: {
          len: [1],
        },
      },

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
