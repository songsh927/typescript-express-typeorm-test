import express, {Express, Request, Response} from 'express';
import * as userController from '../controller/user.ctrl';

const router = express.Router();

export default function userRouter(){
    
    router.get('/memberlist', userController.getMemberList);

    return router;
}