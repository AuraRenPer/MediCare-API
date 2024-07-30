import mongoose from 'mongoose';
const { Schema } = mongoose;

const NotificacionSchema = new Schema({
  medicamento_id: { type: Schema.Types.ObjectId, ref: 'Medicamento', required: true },
  fecha_hora_notificación: { type: Date, required: true },
  tipo: { type: String, required: true },
  estado: { type: String, required: true }
});

export default mongoose.model('Notificacion', NotificacionSchema);
