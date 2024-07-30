import mongoose from 'mongoose';
const { Schema } = mongoose;

const MedicamentoSchema = new Schema({
  nombre: { type: String, required: true },
  dosis: { type: String, required: true },
  presentación: { type: String, required: true },
  frecuencia: {
    horas: { type: [Number], required: true },
    minutos: { type: [Number], required: true }
  },
  cantidad_dosis_disponibles: { type: Number, required: false },
  fecha_creación: { type: Date, default: Date.now },
  fecha_actualización: { type: Date, default: Date.now }
});

export default mongoose.model('Medicamento', MedicamentoSchema);
