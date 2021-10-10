import { getRepository } from "typeorm";
import { Activy } from "../entities/activity";

type ActivityData = {
    name: string;
    activity_date: Date;
    course_unit_id: string;
}

class ActivityService{

    public async createAsync({name, activity_date, course_unit_id}: ActivityData){

        const activiesRepository = getRepository(Activy);

        const activity = {
            name,
            activity_date,
            course_unit_id
            
        }

        await activiesRepository.save(activity);

        return activity;
    }
}

export {ActivityService};