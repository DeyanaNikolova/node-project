import User from '../../models/user-model';

export function getUserByLogin(login: string) {
  return User.findAll({ where: { login: login } });
}
