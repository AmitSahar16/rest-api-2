import Post from '../models/post';
import { IPost } from '../types';
import { BaseController } from './base_controller';
import { Request, Response } from 'express';


class PostsController extends BaseController<IPost> {
  constructor() {
    super(Post);
  }

  async getPostById(req: Request, res: Response) {
    try {
      const post = await this.model.findById(req.params.id).populate('user');

      res.send(post);
    } catch (err) {
      console.error('error while trying to get post by id');
      res.status(500).json({ message: err.message });
    }
  }
}

export default new PostsController();
