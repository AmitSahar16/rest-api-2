import { Request } from 'express';

export interface IUser {
  _id?: string;
  username: string;
  email: string;
  password: string;
}

export interface IComment {
  _id?: string;
  text: string;
  post: string;
  user: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IPost {
  _id: string;
  message: string;
  user: string;
}
