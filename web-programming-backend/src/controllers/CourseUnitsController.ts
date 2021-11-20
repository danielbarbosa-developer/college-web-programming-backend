import {Request, Response} from 'express';
import { CourseUnitService } from '../services/CourseUnitService';

class CourseUnitsController {

    async create(req:Request, res:Response) {
        const courseUnitData = req.body;
        const createUser = new CourseUnitService
        const courseUnit = await createUser.createAsync(courseUnitData);
        return res.json(courseUnit);
    }
    
}

export {CourseUnitsController};