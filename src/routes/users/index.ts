import express from 'express';
import { getUserProfilePage, addUser, deleteUser, getUsersPage} from '../../controllers/users';
import { isAdminConnected } from '../../util/auth';

const router = express.Router();

router.get('/profile', getUserProfilePage);

router.post('/', isAdminConnected, addUser);

router.delete('/:login', isAdminConnected, deleteUser);

router.get('/', isAdminConnected, getUsersPage);

export default router;