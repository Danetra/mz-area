import Sequelize, { Model } from "sequelize";

class City extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        provinceId: Sequelize.BIGINT,
        altName: Sequelize.STRING,
        latitude: Sequelize.STRING,
        longitude: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Province, { foreignKey: "provinceId" });
  }
}

export default City;
