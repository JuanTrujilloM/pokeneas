import { Router } from 'express';
import { getViewPokenea } from '../controllers/pokenea.controller.js';

const router = Router();

router.get('/pokenea', getViewPokenea);

export default router;
