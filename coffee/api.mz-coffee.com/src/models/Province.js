import Sequelize, { Model } from "sequelize";

class Province extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
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
    this.belongsToMany(models.User, {
      through: "City",
      foreignKey: "provinceId",
    });
  }
}

export default Province;
