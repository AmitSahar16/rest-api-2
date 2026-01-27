import jwt from 'jsonwebtoken';
import { ITokenPayload } from '../types';

export const verifyAccessToken = (token: string): ITokenPayload => {
  const ACCESS_TOKEN_SECRET = (process.env.ACCESS_TOKEN_SECRET || 'access-token-secret') as string;
  return jwt.verify(token, ACCESS_TOKEN_SECRET) as ITokenPayload;
};

