import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: true,
        tableName: "Users",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Address, {
      through: "UserAddress",
      foreignKey: "userId",
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

export default User;
