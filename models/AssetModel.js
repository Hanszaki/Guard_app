import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Photo = db.define(
  "asset",
  {
    catatan:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    url1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url2: {
    type: DataTypes.STRING,
      allowNull: false,
    }
    
  },
  {
    freezeTableName: true,
  }
);

export default Photo;

(async () => {
  await db.sync();
})();
