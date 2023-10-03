import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("git-posts", "fl0user", "as8nNjqdK6Vc", {
  host: "ep-empty-salad-13069354.ap-southeast-1.aws.neon.fl0.io",
  dialect: "postgres",
  dialectModule: require('pg'),
  dialectOptions: {
    ssl: true,
  },
});
