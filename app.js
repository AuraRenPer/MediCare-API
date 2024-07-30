import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Cargar las variables de entorno

import medicamentos from './src/routes/medicamentos.routes.js';
import notificaciones from './src/routes/notificaciones.routes.js';

const app = express();
app.use(express.json());

// Ruta inicial
app.get('/', (req, res) => {
    res.send('Welcome to MediCare API');
});

app.use(cors({
    origin: "*",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));

// Conexión a MongoDB usando la URI del archivo .env
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Rutas
app.use('/api/medicamentos', medicamentos);
app.use('/api/notificaciones', notificaciones);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
