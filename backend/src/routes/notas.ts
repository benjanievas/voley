import { Router } from 'express';
import  { getNota, getNotas, deleteNota, postNota, updateNota }  from '../controllers/notas';
import { getPrincipal } from '../controllers/principal';

const router = Router();

router.get('/', getNotas);
router.get('/novedades', getPrincipal);
router.get('/:id', getNota);
router.delete('/:id', deleteNota);
router.post('/', postNota);
router.put('/:id', updateNota);

export default router;