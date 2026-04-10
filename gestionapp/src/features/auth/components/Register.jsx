import { useState } from "react"
import { useNavigate, Link as RouterLink } from "react-router-dom"
import {
  Box, Typography, TextField, Button, IconButton,
  InputAdornment, CircularProgress, Alert, Collapse, Link, Grid,
} from "@mui/material"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import { registerService } from "../services/AuthService"

// Validaciones 
const validators = {
  nombre: (v) => (!v.trim() ? "El nombre es obligatorio." : v.trim().length < 2 ? "Mínimo 2 caracteres." : ""),
  apellido: (v) => (!v.trim() ? "El apellido es obligatorio." : ""),
  correo: (v) => {
    if (!v.trim()) return "El correo es obligatorio."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Ingresa un correo válido."
    return ""
  },
  contrasena: (v) => {
    if (!v) return "La contraseña es obligatoria."
    if (v.length < 8) return "Mínimo 8 caracteres."
    if (!/[A-Z]/.test(v)) return "Debe incluir al menos una mayúscula."
    if (!/[0-9]/.test(v)) return "Debe incluir al menos un número."
    return ""
  },
  confirmar: (v, contrasena) => {
    if (!v) return "Confirma tu contraseña."
    if (v !== contrasena) return "Las contraseñas no coinciden."
    return ""
  },
}

// Campo reutilizable 
function Field({ label, type, value, onChange, onBlur, error, placeholder, startIcon, endAdornment }) {
  return (
    <Box>
      <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "#4b3a6e", mb: 0.7 }}>
        {label}
      </Typography>
      <TextField
        fullWidth type={type} value={value}
        onChange={onChange} onBlur={onBlur}
        error={!!error} helperText={error}
        placeholder={placeholder} variant="outlined" size="small"
        InputProps={{
          startAdornment: startIcon && <InputAdornment position="start">{startIcon}</InputAdornment>,
          endAdornment,
          sx: {
            fontFamily: "'DM Sans', sans-serif",
            color: "#1e1030",
            backgroundColor: "#faf5ff",
            borderRadius: "10px",
            "& fieldset": { borderColor: error ? "rgba(239,68,68,0.5)" : "#e9d5ff" },
            "&:hover fieldset": { borderColor: error ? "rgba(239,68,68,0.7) !important" : "#a855f7 !important" },
            "&.Mui-focused fieldset": { borderColor: error ? "#ef4444 !important" : "#7c3aed !important", borderWidth: "1px !important" },
          },
        }}
        inputProps={{ sx: { py: 1.4, fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", "&::placeholder": { color: "#c4b5fd" } } }}
        FormHelperTextProps={{ sx: { fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", mx: 0, mt: 0.5, color: "#ef4444" } }}
      />
    </Box>
  )
}

// Indicador de fortaleza 
function PasswordStrength({ contrasena }) {
  const checks = [
    { label: "Mínimo 8 caracteres", ok: contrasena.length >= 8 },
    { label: "Una letra mayúscula", ok: /[A-Z]/.test(contrasena) },
    { label: "Un número", ok: /[0-9]/.test(contrasena) },
  ]
  if (!contrasena) return null
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.6, mt: 1 }}>
      {checks.map((c) => (
        <Box key={c.label} sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
          <CheckCircleOutlineIcon sx={{ fontSize: 14, color: c.ok ? "#7c3aed" : "#d1d5db" }} />
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: c.ok ? "#7c3aed" : "#9ca3af" }}>
            {c.label}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

// Register 
export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ nombre: "", apellido: "", correo: "", contrasena: "", confirmar: "" })
  const [touched, setTouched] = useState({ nombre: false, apellido: false, correo: false, contrasena: false, confirmar: false })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState("")
  const [success, setSuccess] = useState(false)

  const errors = {
    nombre: validators.nombre(form.nombre),
    apellido: validators.apellido(form.apellido),
    correo: validators.correo(form.correo),
    contrasena: validators.contrasena(form.contrasena),
    confirmar: validators.confirmar(form.confirmar, form.contrasena),
  }
  const isValid = Object.values(errors).every((e) => !e)

  const handleChange = (field) => (e) => {
    setForm((p) => ({ ...p, [field]: e.target.value }))
    setServerError("")
  }
  const handleBlur = (field) => () => setTouched((p) => ({ ...p, [field]: true }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTouched({ nombre: true, apellido: true, correo: true, contrasena: true, confirmar: true })
    if (!isValid) return

    setLoading(true)
    try {
      // Enviamos solo los campos que necesita el backend (sin "confirmar")
      await registerService({
        nombre: form.nombre,
        apellido: form.apellido,
        correo: form.correo,
        contrasena: form.contrasena,
      })
      setSuccess(true)
      // Redirige al login después de 1.5 segundos
      setTimeout(() => navigate("/login"), 2000)
    } catch (err) {
      setServerError(err.response?.data?.mensaje || "Error al registrar. Intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #ede9fe 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        px: 2, py: 4,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 5, justifyContent: "center", cursor: "pointer" }} onClick={() => navigate("/")}>
          <BarChartRoundedIcon sx={{ color: "#7c3aed", fontSize: 26 }} />
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#1e1030", fontSize: "1.2rem", letterSpacing: "-0.4px" }}>
            Gast<Box component="span" sx={{ color: "#7c3aed" }}>ify</Box>
          </Typography>
        </Box>

        {/* Card */}
        <Box sx={{ backgroundColor: "#fff", borderRadius: "20px", border: "1px solid #e9d5ff", boxShadow: "0 16px 48px rgba(124,58,237,0.1)", p: { xs: 3, sm: 4.5 } }}>
          <Typography variant="h5" sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#1e1030", fontSize: "1.5rem", letterSpacing: "-0.4px", mb: 0.5 }}>
            Crea tu cuenta
          </Typography>
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#9ca3af", fontSize: "0.875rem", mb: 3.5 }}>
            Gratis para siempre. Sin tarjeta de crédito.
          </Typography>

          <Collapse in={!!serverError}>
            <Alert severity="error" sx={{ mb: 2.5, borderRadius: "10px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem" }}>
              {serverError}
            </Alert>
          </Collapse>
          <Collapse in={success}>
            <Alert severity="success" sx={{ mb: 2.5, borderRadius: "10px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem" }}>
              ¡Cuenta creada! Redirigiendo al inicio de sesión…
            </Alert>
          </Collapse>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: "flex", flexDirection: "column", gap: 2.2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Field label="Nombre" type="text" value={form.nombre}
                  onChange={handleChange("nombre")} onBlur={handleBlur("nombre")}
                  error={touched.nombre ? errors.nombre : ""} placeholder="Tu nombre"
                  startIcon={<PersonOutlinedIcon sx={{ fontSize: 18, color: "#c4b5fd" }} />}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Field label="Apellido" type="text" value={form.apellido}
                  onChange={handleChange("apellido")} onBlur={handleBlur("apellido")}
                  error={touched.apellido ? errors.apellido : ""} placeholder="Tu apellido"
                  startIcon={<PersonOutlinedIcon sx={{ fontSize: 18, color: "#c4b5fd" }} />}
                />
              </Grid>
            </Grid>

            <Field label="Correo electrónico" type="email" value={form.correo}
              onChange={handleChange("correo")} onBlur={handleBlur("correo")}
              error={touched.correo ? errors.correo : ""} placeholder="tu@correo.com"
              startIcon={<EmailOutlinedIcon sx={{ fontSize: 18, color: "#c4b5fd" }} />}
            />

            <Box>
              <Field label="Contraseña" type={showPassword ? "text" : "password"} value={form.contrasena}
                onChange={handleChange("contrasena")} onBlur={handleBlur("contrasena")}
                error={touched.contrasena ? errors.contrasena : ""} placeholder="Crea una contraseña segura"
                startIcon={<LockOutlinedIcon sx={{ fontSize: 18, color: "#c4b5fd" }} />}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword((p) => !p)} edge="end" size="small" sx={{ color: "#c4b5fd" }}>
                      {showPassword ? <VisibilityOffOutlinedIcon sx={{ fontSize: 18 }} /> : <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <PasswordStrength contrasena={form.contrasena} />
            </Box>

            <Field label="Confirmar contraseña" type={showConfirm ? "text" : "password"} value={form.confirmar}
              onChange={handleChange("confirmar")} onBlur={handleBlur("confirmar")}
              error={touched.confirmar ? errors.confirmar : ""} placeholder="Repite tu contraseña"
              startIcon={<LockOutlinedIcon sx={{ fontSize: 18, color: "#c4b5fd" }} />}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowConfirm((p) => !p)} edge="end" size="small" sx={{ color: "#c4b5fd" }}>
                    {showConfirm ? <VisibilityOffOutlinedIcon sx={{ fontSize: 18 }} /> : <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />}
                  </IconButton>
                </InputAdornment>
              }
            />

            <Button type="submit" fullWidth variant="contained" disabled={loading}
              sx={{
                backgroundColor: "#7c3aed", color: "#fff",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                textTransform: "none", borderRadius: "10px", py: 1.4, fontSize: "0.95rem", mt: 0.5,
                boxShadow: "0 4px 14px rgba(124,58,237,0.25)",
                "&:hover": { backgroundColor: "#6d28d9", boxShadow: "0 6px 18px rgba(124,58,237,0.3)" },
                "&.Mui-disabled": { backgroundColor: "rgba(124,58,237,0.35)", color: "rgba(255,255,255,0.5)" },
              }}
            >
              {loading ? <CircularProgress size={20} sx={{ color: "rgba(255,255,255,0.6)" }} /> : "Crear cuenta gratis"}
            </Button>
          </Box>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#9ca3af", fontSize: "0.85rem" }}>
              ¿Ya tienes cuenta?{" "}
              <Link component={RouterLink} to="/login" underline="none"
                sx={{ color: "#7c3aed", fontWeight: 600, "&:hover": { color: "#6d28d9" } }}>
                Inicia sesión
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}