import Sequelize, { Model } from "sequelize";

class City extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        provinceId: Sequelize.INTEGER,
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
    this.belongsToMany(models.User, {
      through: "District",
      foreignKey: "cityId",
    });
  }
}

export default City;
