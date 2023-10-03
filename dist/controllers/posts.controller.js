"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPosts = exports.getPosts = void 0;
const Posts_1 = require("../models/Posts");
const faker_1 = require("@faker-js/faker");
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Posts_1.Posts.findAll();
        res.json(posts);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
exports.getPosts = getPosts;
const createPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = generateFakePosts();
        posts.forEach(post => {
            Posts_1.Posts.create(post);
        });
        res.json(posts);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
exports.createPosts = createPosts;
const generateFakePosts = () => {
    const createRandomPosts = () => {
        return {
            title: faker_1.faker.commerce.productName(),
            description: faker_1.faker.commerce.productDescription(),
            author: faker_1.faker.person.firstName(),
            image: faker_1.faker.image.urlPicsumPhotos({ width: 640, height: 480 }),
            date: faker_1.faker.date.anytime(),
            category: faker_1.faker.commerce.department(),
        };
    };
    const posts = faker_1.faker.helpers.multiple(createRandomPosts, {
        count: 10,
    });
    return posts;
};
//# sourceMappingURL=posts.controller.js.map