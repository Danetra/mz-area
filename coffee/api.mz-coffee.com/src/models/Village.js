import Sequelize, { Model } from "sequelize";

class Village extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        districtId: Sequelize.BIGINT,
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
    this.belongsTo(models.District, { foreignKey: "districtId" });
  }
}

export default Village;
