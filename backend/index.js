const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({
    path: ".env"
});

const authRoutes = require("./routes/auth.routes");

const app = express();

// Permite recibir JSON en el body de las peticiones
app.use(express.json());

// Permite peticiones desde el frontend
app.use(cors({ origin: ["http://localhost:5173", "https://gastify-f.vercel.app"] }));

// Todas las rutas de autenticación estarán bajo /api/auth
app.use("/api/auth", authRoutes);

// Conexión a MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Conectado a MongoDB");
        app.listen(process.env.PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error conectando a MongoDB:", err.message);
    })