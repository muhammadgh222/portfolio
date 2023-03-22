import Sequelize from "sequelize";

import DB from "../database.js";

const Order = DB.define("Order", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  message: {
    type: Sequelize.STRING,
  },
});

export default Order;
