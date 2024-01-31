import Sequelize, { Model } from "sequelize";
import User from "./User";

class MenuCategory extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        slug: Sequelize.STRING,
        createdBy: Sequelize.INTEGER,
        updatedBy: Sequelize.INTEGER,
        deletedAt: Sequelize.DATE,
        deletedBy: Sequelize.INTEGER,
      },
      {
        sequelize,
        timestamps: true,
        tableName: "MenuCategories",
      }
    );

    return this;
  }

  static associate(models) {
    MenuCategory.belongsTo(User, { foreignKey: "createdBy", as: "created" });
    MenuCategory.belongsTo(User, { foreignKey: "updatedBy", as: "updated" });
    MenuCategory.belongsTo(User, { foreignKey: "deletedBy", as: "deleted" });
  }
}

export default MenuCategory;
