import express from 'express';
import {
  createComment,
  getComments,
  updateComment,
  deleteComment,
} from '../controllers/comment';

const router = express.Router();

router.get('/', getComments);

router.post('/', createComment);

router.put('/:id', updateComment);

router.delete('/:id', deleteComment);

export default router;