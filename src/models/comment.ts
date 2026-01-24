import { Schema, model } from 'mongoose';

const commentSchema = new Schema(
  {
    post: { 
      type: Schema.Types.ObjectId, 
      ref: 'Post', 
      required: true,
    },
    text: { 
      type: String, 
      required: true, 
    },
    author: { 
      type: String, 
      required: true,
    },
  },
);

export default model('Comment', commentSchema, 'comments');