import {Request, Response} from 'express';
import Nota from '../models/nota';

export const getNotas = async (req:Request, res:Response)=> {
    const listNotas = await Nota.findAll()
    res.json(listNotas)
}

export const getNota = async (req:Request, res:Response)=> {
    const {id} = req.params;
    const nota = await Nota.findByPk(id);
    if (nota) {
        res.json(nota)
    } else {
        res.status(404).json({msg : 'No existe una nota con el id ${id}'
            })
    }
}

export const deleteNota = async (req:Request, res:Response)=> {
    const {id} = req.params
    const nota = await Nota.findByPk(id);
    if (!nota) {
        res.status(404).json({msg : 'No existe una nota con el id ${id}'
        })
    } else {
        await nota.destroy();
        res.json({msg: 'La Nota fue eliminada con éxito'
        })
    }
    
}
export const postNota = async (req:Request, res:Response)=> {
    const {body} = req;
    try {
        await Nota.create(body);    
        res.json({
            msg: 'La Nota fue agregado con éxito'
        })
        
    } catch (error) {
        res.json({
            msg: 'Error al ingresar la Nota'
        })
        
    }
    
}

export const updateNota = async (req:Request, res:Response)=> {
    const {body} = req;
    const {id} = req.params
    const nota = await Nota.findByPk(id);
    try {
        if (nota){
            await nota.update(body);
            res.json({msg: 'La nota fue actualizada con éxito'})
        }else {
            res.json({ msg: 'No existe una nota con el id $(id)'})
        }
            
    } catch (error) {
        res.json({ msg: 'Ups, ocurrio un error' })
    }
}
