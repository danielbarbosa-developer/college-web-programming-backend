import {Router} from 'express';

const router = Router();

router.get('/user', (request, response) =>{
    response.json({message: "Reques Well-Succeed"});
});

export default router;