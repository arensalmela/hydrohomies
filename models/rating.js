module.exports = function (sequelize, DataTypes) {
  const Rating = sequelize.define(
    "Rating",
    {
      rating: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Rating;
};
