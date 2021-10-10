import {Request, Response} from 'express';

class ActiviesController {

    async create(req:Request, res:Response) {
        const userData = req.body;
        const createUser = new CreateUserService();
        const user = await createUser.execute(userData);
        return res.json(user);
    }
    
}

export {ActiviesController};