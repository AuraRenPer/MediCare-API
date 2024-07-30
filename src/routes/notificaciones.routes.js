import express from 'express';
import notificacionesController from '../controllers/notificacionesController.js';

const router = express.Router();

router.get('/', notificacionesController.getAllNotificaciones);
router.post('/', notificacionesController.createNotificacion);
router.put('/:id', notificacionesController.updateNotificacion);
router.delete('/:id', notificacionesController.deleteNotificacion);

export default router;
