import {Request, Response} from 'express';
import {UserService} from "../services/UserService";

class ActiviesController {

    async create(req:Request, res:Response) {
        const userData = req.body;
        const createUser = new UserService();
        const user = await createUser.createAsync(userData);
        return res.json(user);
    }
    
}

export {ActiviesController};