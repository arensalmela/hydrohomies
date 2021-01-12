module.exports = function (sequelize, DataTypes) {
  let Review = sequelize.define(
    "Review",
    {
      id: {
        type: DataTypes.Int,
        allowNull: false,
        validate: {
          len: [1],
        },
      },

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
    },
    {
      freezeTableName: true,
    }
  );

  //***Don't allow post without user
  Post.associate = function (models) {
    Post.belongsTo(models.user, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Review;
};
