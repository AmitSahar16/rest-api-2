import express from 'express';
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
} from '../controllers/post';

const router = express.Router();

router.get('/', getPosts);

router.get('/:id', getPostById);

router.post('/', createPost);

router.put('/:id', updatePost);

export default router;