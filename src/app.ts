import express, { Express } from 'express';
import postsRoutes from '../routes/posts.routes';
const app: Express = express();

app.use(express.json());

app.use(postsRoutes);

export default app;