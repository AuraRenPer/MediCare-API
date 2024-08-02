import mongoose from 'mongoose';
const { Schema } = mongoose;

const FrecuenciaSchema = new Schema({
  fecha: { type: Date, required: true },
  hora: { type: Number, required: true },
  minuto: { type: Number, required: true }
});

const ProximaTomaSchema = new Schema({
  fecha: { type: Date, required: true },
  hora: { type: Number, required: true },
  minuto: { type: Number, required: true }
});

const MedicamentoSchema = new Schema({
  nombre: { type: String, required: true },
  dosis: { type: String, required: true },
  presentación: { type: String, required: true },
  frecuencia: { type: FrecuenciaSchema, required: true },
  proxima_toma: { type: ProximaTomaSchema, required: true },
  cantidad_dosis_disponibles: { type: Number, required: false },
  fecha_creación: { type: Date, default: Date.now },
  fecha_actualización: { type: Date, default: Date.now }
});

export default mongoose.model('Medicamento', MedicamentoSchema);
