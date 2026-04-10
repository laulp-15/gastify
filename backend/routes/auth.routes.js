// Define los endpoints /register y /login

const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Usuario = require("../models/Usuario")

const router = express.Router();

// POST /api/auth/register
router.post("/register", async (req, res) => {
    const { nombre, apellido, correo, contrasena } = req.body;

    try {
        // Verificar si el correo ya está registrado
        const existe = await Usuario.findOne({ correo });
        if (existe) {
            return res.status(400).json({ mensaje: "Este correo ya está registrado." });
        }

        // Hashear la contraseña
        const hash = await bcrypt.hash(contrasena, 10);

        // Crear y guardar el usuario
        const usuario = new Usuario({ nombre, apellido, correo, contrasena: hash });
        await usuario.save();

        res.status(201).json({ mensaje: "Usuario registrado correctamente." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ mensaje: "Error en el servidor." });
    }
})

// POST /api/auth/login
router.post("/login", async (req, res) => {
    const { correo, contrasena } = req.body;

    try {
        // Buscar el usuario por correo
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(401).json({ mensaje: "Correo o contraseña incorrectos." });
        }

        // Comparar la contraseña ingresada con el hash guardado
        const esValida = await bcrypt.compare(contrasena, usuario.contrasena);
        if (!esValida) {
            return res.status(401).json({ mensaje: "Correo o contraseña incorrectos." });
        }

        // Generar el token JWT con el id del usuario
        // El token expira en 8 horas — después el usuario tendrá que volver a iniciar sesión
        const token = jwt.sign(
            { id: usuario._id, correo: usuario.correo },
            process.env.JWT_SECRET,
            { expiresIn: "8h" }
        )

        // Devolver el token y datos básicos del usuario (sin la contraseña)
        res.json({
            token,
            usuario: {
                id: usuario._id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                correo: usuario.correo,
            },
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ mensaje: "Error en el servidor." })
    }
})

module.exports = router;