module.exports = function (sequelize, DataTypes) {
  const allReviews = sequelize.define(
    "All_Reviews",
    {
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
      carbonation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      flavor: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
      rating: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
    },
    {
      freezeTableName: true,
    }
  );
  return allReviews;
};
