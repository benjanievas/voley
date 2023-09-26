import {Request, Response} from 'express';
// import Novedades from '../models/principal';
import principal from '../models/principal';

export const getPrincipal = async (req:Request, res:Response)=> {
    const listPrincipal = await principal.findAll()
    res.json(listPrincipal);
}

