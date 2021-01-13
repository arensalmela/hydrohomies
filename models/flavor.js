module.exports = function (sequelize, DataTypes) {
  const Flavor = sequelize.define(
    "Flavor",
    {
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
