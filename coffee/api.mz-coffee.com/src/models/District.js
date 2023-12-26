import Sequelize, { Model } from "sequelize";

class DeliveryTypes extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        slug: Sequelize.STRING,
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
      through: "Payments",
      foreignKey: "deliveryTypesId",
    });
  }
}

export default DeliveryTypes;
