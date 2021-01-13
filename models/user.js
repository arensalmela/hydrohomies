module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define(
    "User",
    {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      email: {
        type: DataTypes.STRING,
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

  //***user can have multiple posts
  User.associate = function (models) {
    User.hasMany(models.Review, {
      onDelete: "cascade",
    });
  };
  return User;
};
