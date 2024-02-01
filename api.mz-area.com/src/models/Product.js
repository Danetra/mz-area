import Sequelize, { Model } from "sequelize";
import User from "./User";
import Store from "./Store";
import Category from "./Category";
import SubCategory from "./SubCategory";
import ProductImages from "./ProductImage";
import Province from "./Province";
import City from "./City";
import District from "./District";
import Village from "./Village";

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        storeId: Sequelize.INTEGER,
        categoryId: Sequelize.INTEGER,
        name: Sequelize.STRING,
        slug: Sequelize.STRING,
        altName: Sequelize.STRING,
        description: Sequelize.TEXT,
        price: Sequelize.INTEGER,
        published: Sequelize.INTEGER,
        status: Sequelize.INTEGER,
        description: Sequelize.TEXT,
        createdBy: Sequelize.INTEGER,
        updatedBy: Sequelize.INTEGER,
        deletedAt: Sequelize.DATE,
        deletedBy: Sequelize.INTEGER,
      },
      {
        sequelize,
        timestamps: true,
        tableName: "Products",
      },
    );
  }

  static associate(models) {
    Product.belongsTo(Store, { foreignKey: "storeId", as: "store" });
    Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });
    Product.belongsTo(User, { foreignKey: "createdBy", as: "created" });
    Product.belongsTo(User, { foreignKey: "updatedBy", as: "updated" });
    Product.belongsTo(User, { foreignKey: "deletedBy", as: "deleted" });

    Product.hasMany(ProductImages, {
      foreignKey: "productId",
      as: "productImages",
    });
  }
}

export default Product;
