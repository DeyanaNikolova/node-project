import User from '../../models/user';

export function getUserByLogin(login: string): Promise<any> {
  return User.findOne({ where: { login: login } });
}

export function getUserById(userId: number): Promise<any> {
  return User.findOne({ where: { id: userId } });
}

