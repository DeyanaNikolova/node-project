import { isUserExists } from '../../util/auth';
import { Request, Response } from 'express';

export function signIn(req: Request, res: Response): void{
    const { login } = req.body;

    isUserExists(login, isExisting => {
        if (isExisting) {
            res.cookie('isAuthenticated', true);
            res.cookie('login', login);
            res.redirect(302, '/product');
        } else {
            res.cookie('isAuthenticated', false);
            res.cookie('login', '');
            res.redirect(302, '/connection');
        }
        res.end();
    });
}