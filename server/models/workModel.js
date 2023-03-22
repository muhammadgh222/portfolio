import Sequelize from "sequelize";

import DB from "../database.js";

const Work = DB.define("work", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  image: Sequelize.STRING,
  description: {
    type: Sequelize.STRING,
  },
  link: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  githubLink: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Work;
