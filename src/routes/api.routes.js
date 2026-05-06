import { Router } from 'express';
import { getApiPokenea } from '../controllers/pokenea.controller.js';

const router = Router();

router.get('/pokenea', getApiPokenea);

export default router;