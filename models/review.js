module.exports = function (sequelize, DataTypes) {
  const Review = sequelize.define(
    "Review",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
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
