import Sequelize, { Model } from "sequelize";

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: Sequelize.INTEGER,
        provinceId: Sequelize.INTEGER,
        cityId: Sequelize.INTEGER,
        districtId: Sequelize.INTEGER,
        address: Sequelize.STRING,
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
  }
}

export default Address;
