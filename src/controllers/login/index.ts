import { Request, Response } from 'express';
import { isUserExists } from '../../util/auth';

export function signIn(req: Request, res: Response): void{
    const { login } = req.body;

    isUserExists(login, (isExisting: boolean, userId?: number) => {
        if (isExisting) {
           res.cookie('isAuthenticated', true);
           res.cookie('userId', userId);
           res.json({success: true});
        } else {
            res.cookie('isAuthenticated', false);
            res.cookie('userId', '');
            res.status(302).json({success: false});

            // res.status(302).json({userId: null, isAuthenticated: false});
        }
    });
}