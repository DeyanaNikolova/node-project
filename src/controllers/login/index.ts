import { isUserExists } from '../../util/auth';
import { Request, Response } from 'express';

export function signIn(req: Request, res: Response): void{
    const { login } = req.body;

    isUserExists(login, (isExisting: boolean, userId?: number) => {
        if (isExisting) {
            res.cookie('isAuthenticated', true);
            res.cookie('userId', userId);
            res.json({success: true});
          //  res.redirect(302, '/product');
        } else {
            res.cookie('isAuthenticated', false);
            res.cookie('userId', '');

            res.status(302).json({success: false});

          //  res.redirect(302, '/connection');
        }
        res.end();
    });
}