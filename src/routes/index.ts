import express from 'express';
import postRoutes from './posts_route';

const router = express.Router();

router.use('/posts', postRoutes);

export default router;