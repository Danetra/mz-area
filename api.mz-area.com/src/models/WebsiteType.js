import Sequelize, { Model } from "sequelize";

class WebsiteType extends Model {
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

export default WebsiteType;
