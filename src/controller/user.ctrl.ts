import {Express, Request, Response} from 'express';
import * as userRepository from '../data/user/user.data';

export async function getMemberList(req: Request, res: Response) {

    const result = await userRepository.findAll();

    console.log(result)

    res.json(result);
}