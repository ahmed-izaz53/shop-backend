module.exports = (sequelize, DataTypes) => {
  const Product_Category = sequelize.define(
    "Product_Category",
    {
      product_category_name: {
        type: DataTypes.STRING,
        min: 3,
        max: 30,
        required: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );

  Product_Category.associate = (models) => {
    Product_Category.belongsTo(models.Shop);
    Product_Category.hasMany(models.Product);
  };
  return Product_Category;
};
