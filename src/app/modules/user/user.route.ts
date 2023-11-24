import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

//create api
router.post('/users', UserControllers.createUser);

//get api
router.get('/users', UserControllers.getAllUser);
router.get('/users/:userId', UserControllers.getSingleUser);
router.get('/users/:userId/orders', UserControllers.getSingleUserOrders);

//update api
router.put('/users/:userId', UserControllers.updateSingleUser);
router.put('/users/:userId/orders');
//delete api
router.delete('/users/:userId', UserControllers.deleteSingleUser);

export const UserRoutes = router;
