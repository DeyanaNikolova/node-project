import { Request, Response } from 'express';
import User from '../../models/user';
import { getConnectedUserId } from '../../util/auth';

export function getUsersPage(req: Request, res: Response): void {
    getUsers(req, res);
}

export function getUserProfile(req: Request, res: Response): void{
    User.findOne({where: {id: getConnectedUserId(req)}})
    .then((user: any) =>{
        res.json(user);
        // res.render('user-profile', {
        //     pageTitle: 'User Profile Page',
        //     page: '',
        //     user: user,
        //     isAuthenticated: isAuthenticated(req),
        //     isAdmin: user && user.role === 'ADMIN',
        // });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
}

export function createUser(req: Request, res: Response): void {
    const { firstName, lastName, login, role } = req.body;
    
    User.create({ firstName, lastName, login, role })
    .then(() => {
        getUsers(req, res);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err.errors);
      });  
}

export function updateUser(req: Request, res: Response): void {
    const {firstName, lastName, login, role} = req.body;
    User.findOne({where: {login: login}})
        .then((user: any) => {
            if(user){
                user.firstName = firstName;
                user.lastName = lastName;
                user.role = role;
                return user.save();
            }
            return new Promise((_, reject) => {reject({message: 'User does not exist!'});});
        })
        .then(() => {
            getUsers(req, res);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err.errors);
        });
}

export function deleteUser(req: Request, res: Response): void {
    const login = req.params.login;
   
    User.findOne({ where: { login: login } })
        .then((user: any) => {
            if (user) {
                return user.destroy();
            }
            return new Promise((_, reject) => {reject('User does not exist!');});
        })
        .then(() => {
            res.status(204).end();
        })
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
}

function getUsers(req: Request, res: Response): void {
    User.findAll()
    .then((users) => {
      //  isAdmin(req, isAnAdmin) =>{
            
            res.json(users);
            // res.render('users', {
            //     users: users,
            //     pageTitle: 'Users Page',
            //     page: 'users',
            //     isAuthenticated: isAuthenticated(req),
            //     isAdmin: isAnAdmin,
          //  });
       //  });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      }); 
}



