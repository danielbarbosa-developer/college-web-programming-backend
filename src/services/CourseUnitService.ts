import { CourseUnit } from "../entities/course-unit";
import { getRepository } from "typeorm";

type CourseUnitData = {
    name: string;
    description: string;
}

class CourseUnitService{

    public async createAsync({name, description}: CourseUnitData){

        const courseUnitRepository = getRepository(CourseUnit);

        const course_unit = {
            name,
            description
        }

        await courseUnitRepository.save(course_unit);

        return course_unit;
    }
}

export {CourseUnitService};
