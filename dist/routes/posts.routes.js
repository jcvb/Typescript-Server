"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_controller_1 = require("../controllers/posts.controller");
const router = (0, express_1.Router)();
router.get('/posts', posts_controller_1.getPosts);
router.get('/createPosts', posts_controller_1.createPosts);
exports.default = router;
//# sourceMappingURL=posts.routes.js.map