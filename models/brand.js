module.exports = function (sequelize, DataTypes) {
  const Brand = sequelize.define(
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
