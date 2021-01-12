module.exports = function (sequelize, DataTypes) {
  let Flavor = sequelize.define(
    "Flavor",
    {
      id: {
        type: DataTypes.Int,
        allowNull: false,
        validate: {
          len: [1],
        },
      },

      flavor: {
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
  return Flavor;
};
