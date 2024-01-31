import Sequelize, { Model } from "sequelize";
import User from "./User";
import Province from "./Province";
import City from "./City";
import District from "./District";
import Village from "./Village";
import WebsiteType from "./WebsiteType";

class Store extends Model {
  static init(sequelize) {
    super.init(
      {
        websiteTypeId: Sequelize.INTEGER,
        userId: Sequelize.INTEGER,
        provinceId: Sequelize.BIGINT,
        cityId: Sequelize.BIGINT,
        districtId: Sequelize.BIGINT,
        villageId: Sequelize.BIGINT,
        name: Sequelize.STRING,
        slug: Sequelize.STRING,
        official: Sequelize.INTEGER,
        address: Sequelize.TEXT,
        description: Sequelize.TEXT,
        createdBy: Sequelize.INTEGER,
        updatedBy: Sequelize.INTEGER,
        deletedAt: Sequelize.DATE,
        deletedBy: Sequelize.INTEGER,
      },
      {
        sequelize,
        timestamps: true,
      }
    );
  }

  static associate(models) {
    Store.belongsTo(User, { foreignKey: "userId", as: "owner" });
    Store.belongsTo(User, { foreignKey: "createdBy", as: "created" });
    Store.belongsTo(User, { foreignKey: "updatedBy", as: "updated" });
    Store.belongsTo(User, { foreignKey: "deletedBy", as: "deleted" });
    Store.belongsTo(Province, {
      foreignKey: "provinceId",
      as: "province",
    });
    Store.belongsTo(City, { foreignKey: "cityId", as: "city" });
    Store.belongsTo(District, {
      foreignKey: "districtId",
      as: "district",
    });
    Store.belongsTo(Village, { foreignKey: "villageId", as: "village" });
    Store.belongsTo(WebsiteType, {
      foreignKey: "websiteTypeId",
      as: "websiteType",
    });
  }
}

export default Store;
