const { Product_Category, Product } = require(".");
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      product_name: DataTypes.STRING,
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      CustomerId: {
        type: DataTypes.UUID,
      },
    },
    {
      createdAt: true,
      updatedAt: true,
    }
  );

  Order.associate = (models) => {
    Order.belongsTo(models.Customer);
  };
  return Order;
};
