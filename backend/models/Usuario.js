const mongoose = require("mongoose");

// Define la estructura de un documento en la colección "usuarios"
const usuarioSchema = new mongoose.Schema(
    {
        nombre: { type: String, required: [true, "El nombre es obligatorio."], trim: true },

        apellido: { type: String, required: [true, "El apellido es obligatorio."], trim: true },

        correo: {
            type: String, required: [true, "El correo es obligatorio."],
            unique: true, lowercase: true, trim: true
        },

        contrasena: { type: String, required: [true, "La contraseña es obligatoria."] },
    },

    { timestamps: true } // Agrega automáticamente createdAt y updatedAt
)

module.exports = mongoose.model("Usuario", usuarioSchema);