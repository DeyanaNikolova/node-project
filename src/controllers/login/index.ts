import { Request, Response } from 'express';
import { isUserExists } from '../../util/auth';

export function signIn(req: Request, res: Response): void{
    const { login, password } = req.body;

    isUserExists(login, (isExisting: boolean, userId?: number) => {
        if (isExisting) {
           res.json({userId: userId, isAuthenticated: true});
        } else {
           res.status(302).json({userId: null, isAuthenticated: false});
        }
    });
}