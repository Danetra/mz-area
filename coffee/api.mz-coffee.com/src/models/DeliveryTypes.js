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
}

export default DeliveryTypes;
