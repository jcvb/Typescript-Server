"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
exports.Posts = database_1.sequelize.define("posts", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    author: {
        type: sequelize_1.DataTypes.STRING,
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
    },
});
//# sourceMappingURL=Posts.js.map