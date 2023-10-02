import { Router } from "express";
import { getPosts, createPosts } from "../controllers/posts.controller";
const router = Router();

router.get('/posts', getPosts);
router.get('/createPosts', createPosts);

export default router;
