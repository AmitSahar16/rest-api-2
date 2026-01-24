import express from 'express';
import postRoutes from './post_routes';
import commentRoutes from './comment_routes';

const router = express.Router();

router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

export default router;