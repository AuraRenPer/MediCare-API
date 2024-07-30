import Notificacion from '../models/Notificacion.js';

// Obtener todas las notificaciones
const getAllNotificaciones = async (req, res) => {
  try {
    const notificaciones = await Notificacion.find();
    res.json(notificaciones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear una nueva notificación
const createNotificacion = async (req, res) => {
  const notificacion = new Notificacion({
    medicamento_id: req.body.medicamento_id,
    fecha_hora_notificación: req.body.fecha_hora_notificación,
    tipo: req.body.tipo,
    estado: req.body.estado
  });

  try {
    const newNotificacion = await notificacion.save();
    res.status(201).json(newNotificacion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar una notificación
const updateNotificacion = async (req, res) => {
  try {
    const notificacion = await Notificacion.findById(req.params.id);
    if (!notificacion) return res.status(404).json({ message: 'Notificación no encontrada' });

    notificacion.medicamento_id = req.body.medicamento_id || notificacion.medicamento_id;
    notificacion.fecha_hora_notificación = req.body.fecha_hora_notificación || notificacion.fecha_hora_notificación;
    notificacion.tipo = req.body.tipo || notificacion.tipo;
    notificacion.estado = req.body.estado || notificacion.estado;

    const updatedNotificacion = await notificacion.save();
    res.json(updatedNotificacion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar una notificación
const deleteNotificacion = async (req, res) => {
  try {
    const notificacion = await Notificacion.findById(req.params.id);
    if (!notificacion) return res.status(404).json({ message: 'Notificación no encontrada' });

    await notificacion.remove();
    res.json({ message: 'Notificación eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { getAllNotificaciones, createNotificacion, updateNotificacion, deleteNotificacion };
