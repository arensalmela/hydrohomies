module.exports = function (sequelize, DataTypes) {
  let Brand = sequelize.define(
    "Brand",
    {
      brand_name: {
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
  return Brand;
};
