import Sequelize from "sequelize";
import DB from "../database.js";

const Experience = DB.define("Experience", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  duration: {
    type: Sequelize.STRING,
  },
  company: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  details: {
    type: Sequelize.STRING,
  },
  companyImg: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
});

export default Experience;
