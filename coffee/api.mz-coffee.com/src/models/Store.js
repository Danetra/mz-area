import Sequelize, { Model } from "sequelize";

class Store extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        userId: Sequelize.INTEGER,
        provinceId: Sequelize.BIGINT,
        cityId: Sequelize.BIGINT,
        districtId: Sequelize.BIGINT,
        villageId: Sequelize.BIGINT,
        official: Sequelize.INTEGER,
        address: Sequelize.TEXT,
        description: Sequelize.TEXT,
        createdBy: Sequelize.STRING,
        updatedBy: Sequelize.STRING,
        deletedBy: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "userId" });
    this.belongsTo(models.Province, { foreignKey: "provinceId" });
    this.belongsTo(models.City, { foreignKey: "cityId" });
    this.belongsTo(models.District, { foreignKey: "districtId" });
    this.belongsTo(models.Village, { foreignKey: "villageId" });
  }
}

export default Store;
