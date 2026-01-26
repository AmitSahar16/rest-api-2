import User from '../models/user';
import { IUser } from '../types';
import { BaseController } from './base_controller';

class UsersController extends BaseController<IUser> {
  constructor() {
    super(User);
  }
}

export default new UsersController();