import express from 'express';
import medicamentosController from '../controllers/medicamentosController.js';

const router = express.Router();

router.get('/', medicamentosController.getAllMedicamentos);
router.post('/', medicamentosController.createMedicamento);
router.put('/:id', medicamentosController.updateMedicamento);
router.delete('/:id', medicamentosController.deleteMedicamento);

export default router;
