import express, {Express, NextFunction, Request, Response} from 'express';
import dayjs from 'dayjs';
import userRouter from './user.route';


const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json(`[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] hello world!`);
})

router.use('/user', userRouter());

export default router;