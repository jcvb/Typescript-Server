"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_routes_1 = __importDefault(require("../routes/posts.routes"));
const app = (0, express_1.default)();
const cors = require("cors");
app.use(cors());
app.use(express_1.default.json());
app.use(posts_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map