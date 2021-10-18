import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import authConfig from "../config/auth";

interface TokenInfo{
    sub: string,
    role: string
}

export default function authenticated(request:Request, response:Response, next:NextFunction){

    const headerAuthorization = request.headers.authorization;

    if(!headerAuthorization){
        return{
            error:'token not found'
        }
    }

    const [, token] = headerAuthorization.split(' ');

    const verifyToken = verify(token, authConfig.jwt.secret);

    if(!verifyToken){
        throw new Error('Invalid token and authenticaiton');
    }

    const {sub, role} = verifyToken as TokenInfo;

    request.body = {
        id: sub,
        role: role
    }

    return next();

}