import app from "./app";
import { sequelize } from "../database/database";

// import "../models/Posts";

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(8888);
    console.log("Server running on port", 8888);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
