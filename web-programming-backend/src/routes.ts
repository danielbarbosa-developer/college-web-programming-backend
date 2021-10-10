import {Router, Request, Response, response} from 'express';
import { ActiviesController } from './controllers/ActiviesController';
import { CourseUnitsController } from './controllers/CourseUnitsController';
import { UserController } from './controllers/UsersController';

interface UserRequest{
    name: string;
    email: string;
    password: string;

}

const userController = new UserController();
const activityController = new ActiviesController();
const courseController = new CourseUnitsController();


const router = Router();

router.post('/user', () => userController.create);

router.post('/activy', () => activityController.create);

router.post('/courseunit', () => courseController.create);



export default router;