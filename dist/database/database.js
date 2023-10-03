"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize("git-posts", "fl0user", "as8nNjqdK6Vc", {
    host: "ep-empty-salad-13069354.ap-southeast-1.aws.neon.fl0.io",
    dialect: "postgres",
    dialectModule: require('pg'),
    dialectOptions: {
        ssl: true,
    },
});
//# sourceMappingURL=database.js.map