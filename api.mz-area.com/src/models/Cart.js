import Sequelize, { Model } from "sequelize";
import Product from "./Product";
import User from "./User";
import Store from "./Store";
import MenuCategory from "./MenuCategory";
import Category from "./Category";
import SubCategory from "./SubCategory";

class Cart extends Model {
  static init(sequelize) {
    super.init(
      {
        menuCategoryId: Sequelize.INTEGER,
        categoryId: Sequelize.INTEGER,
        subCategoryId: Sequelize.INTEGER,
        productId: Sequelize.INTEGER,
        storeId: Sequelize.INTEGER,
        userId: Sequelize.INTEGER,
        qty: Sequelize.INTEGER,
        createdBy: Sequelize.INTEGER,
        updatedBy: Sequelize.INTEGER,
        deletedAt: Sequelize.DATE,
        deletedBy: Sequelize.INTEGER,
      },
      {
        sequelize,
        timestamps: true,
        tableName: "Carts",
      }
    );
  }

  static associate(models) {
    Cart.belongsTo(MenuCategory, {
      foreignKey: "menuCategoryId",
      as: "menuCategory",
    });
    Cart.belongsTo(Category, {
      foreignKey: "categoryId",
      as: "category",
    });
    Cart.belongsTo(SubCategory, {
      foreignKey: "subCategoryId",
      as: "subcategory",
    });
    Cart.belongsTo(Product, {
      foreignKey: "productId",
      as: "product",
    });
    Cart.belongsTo(Store, {
      foreignKey: "storeId",
      as: "store",
    });
    Cart.belongsTo(User, {
      foreignKey: "userId",
      as: "user",
    });
    Cart.belongsTo(User, { foreignKey: "createdBy", as: "created" });
    Cart.belongsTo(User, { foreignKey: "updatedBy", as: "updated" });
    Cart.belongsTo(User, { foreignKey: "deletedBy", as: "deleted" });
  }
}

export default Cart;
