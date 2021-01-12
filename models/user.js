module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.Int,
        allowNull: false,
        validate: {
          len: [1],
        },
      },

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
    User.hasMany(models.post, {
      onDelete: "cascade",
    });
  };
  return User;
};
