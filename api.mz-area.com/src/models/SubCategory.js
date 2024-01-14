import Sequelize, { Model } from "sequelize";
import Category from "./Category";

class SubCategory extends Model {
  static init(sequelize) {
    super.init(
      {
        categoryId: Sequelize.INTEGER,
        name: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: true,
        tableName: "SubCategoryProducts",
      }
    );

    return this;
  }

  static associate(models) {
    SubCategory.belongsTo(Category, {
      foreignKey: "categoryId",
      as: "category",
    });
  }
}

export default SubCategory;
