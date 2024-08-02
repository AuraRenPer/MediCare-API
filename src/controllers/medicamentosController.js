import Medicamento from '../models/Medicamento.js';

// Obtener todos los medicamentos
const getAllMedicamentos = async (req, res) => {
  try {
    const medicamentos = await Medicamento.find();
    res.json(medicamentos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo medicamento
const createMedicamento = async (req, res) => {
  const medicamento = new Medicamento({
    nombre: req.body.nombre,
    dosis: req.body.dosis,
    presentación: req.body.presentación,
    frecuencia: {
      fecha: req.body.frecuencia.fecha,
      hora: req.body.frecuencia.hora,
      minuto: req.body.frecuencia.minuto
    },
    proxima_toma: {
      fecha: req.body.proxima_toma.fecha,
      hora: req.body.proxima_toma.hora,
      minuto: req.body.proxima_toma.minuto
    },
    cantidad_dosis_disponibles: req.body.cantidad_dosis_disponibles
  });

  try {
    const newMedicamento = await medicamento.save();
    res.status(201).json(newMedicamento);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar un medicamento
const updateMedicamento = async (req, res) => {
  try {
    const medicamento = await Medicamento.findById(req.params.id);
    if (!medicamento) return res.status(404).json({ message: 'Medicamento no encontrado' });

    medicamento.nombre = req.body.nombre || medicamento.nombre;
    medicamento.dosis = req.body.dosis || medicamento.dosis;
    medicamento.presentación = req.body.presentación || medicamento.presentación;
    medicamento.frecuencia = {
      fecha: req.body.frecuencia.fecha || medicamento.frecuencia.fecha,
      hora: req.body.frecuencia.hora || medicamento.frecuencia.hora,
      minuto: req.body.frecuencia.minuto || medicamento.frecuencia.minuto
    };
    medicamento.proxima_toma = {
      fecha: req.body.proxima_toma.fecha || medicamento.proxima_toma.fecha,
      hora: req.body.proxima_toma.hora || medicamento.proxima_toma.hora,
      minuto: req.body.proxima_toma.minuto || medicamento.proxima_toma.minuto
    };
    medicamento.cantidad_dosis_disponibles = req.body.cantidad_dosis_disponibles || medicamento.cantidad_dosis_disponibles;
    medicamento.fecha_actualización = Date.now();

    const updatedMedicamento = await medicamento.save();
    res.json(updatedMedicamento);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar un medicamento
const deleteMedicamento = async (req, res) => {
  try {
    const medicamento = await Medicamento.findById(req.params.id);
    if (!medicamento) return res.status(404).json({ message: 'Medicamento no encontrado' });

    await medicamento.remove();
    res.json({ message: 'Medicamento eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { getAllMedicamentos, createMedicamento, updateMedicamento, deleteMedicamento };
