import { getRepository } from "typeorm";
import { User } from "../entities/user";
import {hash} from 'bcryptjs';

type UserData = {
    name: string;
    email: string;
    password: string;
}

class UserService{

    public async createAsync({name, email, password}: UserData){

        const usersRepository = getRepository(User);

        const checkEmailExists = await usersRepository.findOne({email});

        if(checkEmailExists){
            throw new Error('Email address already exists');
        }


        const hashedPassword = await hash(password, 8);

        const user = {
            name,
            email,
            password: hashedPassword
        }

        await usersRepository.save(user);
        
        return user;
    }
}

export {UserService};