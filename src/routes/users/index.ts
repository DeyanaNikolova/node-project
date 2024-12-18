import express from 'express';

import { getUserProfile, createUser, deleteUser, getUsersPage, updateUser} from '../../controllers/users';
import { isAdminConnected } from '../../util/auth';

const router = express.Router();

router.get('/profile', getUserProfile);

router.post('/', isAdminConnected, createUser);

router.put('/', isAdminConnected, updateUser);

router.delete('/:login', isAdminConnected, deleteUser);

router.get('/', isAdminConnected, getUsersPage);

export default router;