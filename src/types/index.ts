import { Request } from 'express';

export interface IUser {
  _id?: string;
  username: string;
  email: string;
  password: string;
  refreshTokens?: Array<string>;
}

export interface IAuthRequest extends Request {
  user?: { _id: string };
}

export interface ITokenPayload {
  _id: string
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    _id: string;
  };
}