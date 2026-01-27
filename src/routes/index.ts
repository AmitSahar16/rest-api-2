import express from 'express';
import postRoutes from './posts_route';
import commentRoutes from './comments_route';

const router = express.Router();

router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

export default router;