import Sequelize from "sequelize";
import bcrypt from "bcryptjs";

import DB from "../database.js";

const Admin = DB.define(
  "Admin",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
    hooks: {
      beforeCreate: async function (user) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      },
    },
    instanceMethods: {
      validPassword: async function (password) {
        return await bcrypt.compare(password, this.password);
      },
    },
  }
);

export default Admin;
