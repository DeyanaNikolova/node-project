import User from '../../models/user-model';

export function getUserByLogin(login: string): Promise<any> {
  return User.findAll({ where: { login: login } });
}
