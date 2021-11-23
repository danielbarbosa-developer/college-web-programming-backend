import { Request, Response } from "express";
import { AuthenticationService } from "../services/AuthenticationService";

class AuthenticationController{
    async create(request:Request, response:Response){
        
        const authData = request.body;

        const authService = new AuthenticationService();

        const auth = await authService.execute(authData);

        return response.json(auth);

    }
}

export{AuthenticationController}