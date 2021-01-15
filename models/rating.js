module.exports = function (sequelize, DataTypes) {
  const Review = sequelize.define(
    "Review",
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

  //***Don't allow post without user
  Review.associate = function (models) {
    Review.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Review;
};
