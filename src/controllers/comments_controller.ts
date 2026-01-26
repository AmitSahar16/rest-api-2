import Comment from '../models/comment';
import { IComment } from '../types';
import { BaseController } from './base_controller';
import { Request, Response } from 'express';

class CommentsController extends BaseController<IComment> {
  constructor() {
    super(Comment);
  }

  async getCommentsByPostId(req: Request, res: Response) {
    try {
      const comments = await this.model
        .find({ post: req.params.postId })
        .sort({ createdAt: -1 })
        .populate('user', 'username email');

      res.send(comments);
    } catch (err) {
      console.error('error while trying to get comments by post id');
      res.status(500).json({ message: err.message });
    }
  }
}

export default new CommentsController();
