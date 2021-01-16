module.exports = function (sequelize, DataTypes) {
  const Rating = sequelize.define(
    "Rating",
    {
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          isIn: [[1, 2, 3, 4, 5]],
          len: [1],
        },
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Rating;
};
