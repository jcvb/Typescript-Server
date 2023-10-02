import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Posts = sequelize.define("posts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
  },
  category: {
    type: DataTypes.STRING,
  },
});
