import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/users', UserControllers.createUser);

router.get('/users', UserControllers.getAllUser);

export const UserRoutes = router;
