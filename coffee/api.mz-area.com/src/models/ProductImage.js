import Sequelize, { Model } from "sequelize";
import Product from "./Product";
import User from "./User";

class ProductImages extends Model {
  static init(sequelize) {
    super.init(
      {
        productId: Sequelize.STRING,
        name: Sequelize.STRING,
        createdBy: Sequelize.INTEGER,
        updatedBy: Sequelize.INTEGER,
        deletedAt: Sequelize.DATE,
        deletedBy: Sequelize.INTEGER,
      },
      {
        sequelize,
        timestamps: true,
        tableName: "ProductImages",
      }
    );
  }

  static associate(models) {
    ProductImages.belongsTo(Product, {
      foreignKey: "productId",
      as: "product",
    });
    ProductImages.belongsTo(User, { foreignKey: "createdBy", as: "created" });
    ProductImages.belongsTo(User, { foreignKey: "updatedBy", as: "updated" });
    ProductImages.belongsTo(User, { foreignKey: "deletedBy", as: "deleted" });
  }
}

export default ProductImages;
