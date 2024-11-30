import { Request, Response } from 'express';
import { isUserExists, isAdmin } from '../../util/auth';

export function signIn(req: Request, res: Response): void {
  const { login, password } = req.body;

  isUserExists(login, (isExisting: boolean, userId?: number) => {
    isAdmin(
      req,
      (isAnAdmin) => {
        if (isExisting) {
          res.json({ userId: userId, isAuthenticated: true, 'isAdmin': isAnAdmin });
        } else {
          res
            .status(302)
            .json({ userId: null, isAuthenticated: false, 'isAdmin': false });
        }
      },
      userId
    );
  });
}
