import Sequelize, { Model } from "sequelize";
class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        slug: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: true,
        tableName: "CategoryProducts",
      }
    );

    return this;
  }
}

export default Category;
