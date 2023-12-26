import Sequelize, { Model } from "sequelize";

class District extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cityId: Sequelize.BIGINT,
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
    this.belongsTo(models.City, { foreignKey: "cityId" });
  }
}

export default District;
