//For future use with username / PW authentication

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    "User",
    {
      user_name: {
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

  return User;
};
