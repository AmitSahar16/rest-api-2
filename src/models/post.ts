import { Schema, model } from 'mongoose';

const postSchema = new Schema(
  {
    message: {
       type: String, 
       required: true, 
    },
    sender: {
       type: String, 
       required: true,
    },
  },
);

export default model('Post', postSchema, 'posts');

