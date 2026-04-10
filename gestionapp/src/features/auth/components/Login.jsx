import { useState } from "react"
import { useNavigate, Link as RouterLink } from "react-router-dom"
import {
  Box, Typography, TextField, Button, IconButton,
  InputAdornment, CircularProgress, Alert, Collapse, Link,
} from "@mui/material"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import { loginService } from "../services/AuthService"

// Validaciones 
const validators = {
  correo: (v) => {
    if (!v.trim()) return "El correo es obligatorio."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Ingresa un correo válido."
    return ""
  },
  contrasena: (v) => {
    if (!v) return "La contraseña es obligatoria."
    if (v.length < 8) return "Mínimo 8 caracteres."
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

// Login 
export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ correo: "", contrasena: "" })
  const [touched, setTouched] = useState({ correo: false, contrasena: false })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState("")

  const errors = {
    correo: validators.correo(form.correo),
    contrasena: validators.contrasena(form.contrasena),
  }
  const isValid = !errors.correo && !errors.contrasena

  const handleChange = (field) => (e) => {
    setForm((p) => ({ ...p, [field]: e.target.value }))
    setServerError("")
  }
  const handleBlur = (field) => () => setTouched((p) => ({ ...p, [field]: true }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTouched({ correo: true, contrasena: true })
    if (!isValid) return

    setLoading(true)
    try {
      const { data } = await loginService(form)

      // Guarda el token en localStorage para usarlo en peticiones futuras
      localStorage.setItem("token", data.token)
      localStorage.setItem("usuario", JSON.stringify(data.usuario))

      navigate("/dashboard")
    } catch (err) {
      // El backend devuelve el mensaje de error en err.response.data.mensaje
      setServerError(err.response?.data?.mensaje || "Error al iniciar sesión.")
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
      <Box sx={{ width: "100%", maxWidth: 440 }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 6, justifyContent: "center", cursor: "pointer" }} onClick={() => navigate("/")}>
          <BarChartRoundedIcon sx={{ color: "#7c3aed", fontSize: 26 }} />
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#1e1030", fontSize: "1.2rem", letterSpacing: "-0.4px" }}>
            Gast<Box component="span" sx={{ color: "#7c3aed" }}>ify</Box>
          </Typography>
        </Box>

        {/* Card */}
        <Box sx={{ backgroundColor: "#fff", borderRadius: "20px", border: "1px solid #e9d5ff", boxShadow: "0 16px 48px rgba(124,58,237,0.1)", p: { xs: 3, sm: 4.5 } }}>
          <Typography variant="h5" sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#1e1030", fontSize: "1.5rem", letterSpacing: "-0.4px", mb: 0.5 }}>
            Bienvenido de nuevo
          </Typography>
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#9ca3af", fontSize: "0.875rem", mb: 3.5 }}>
            Ingresa tus datos para continuar
          </Typography>

          <Collapse in={!!serverError}>
            <Alert severity="error" sx={{ mb: 2.5, borderRadius: "10px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", backgroundColor: "#fef2f2", border: "1px solid #fecaca", color: "#b91c1c", "& .MuiAlert-icon": { color: "#ef4444" } }}>
              {serverError}
            </Alert>
          </Collapse>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            <Field
              label="Correo electrónico" type="email"
              value={form.correo} onChange={handleChange("correo")} onBlur={handleBlur("correo")}
              error={touched.correo ? errors.correo : ""} placeholder="tu@correo.com"
              startIcon={<EmailOutlinedIcon sx={{ fontSize: 18, color: "#c4b5fd" }} />}
            />
            <Field
              label="Contraseña" type={showPassword ? "text" : "password"}
              value={form.contrasena} onChange={handleChange("contrasena")} onBlur={handleBlur("contrasena")}
              error={touched.contrasena ? errors.contrasena : ""} placeholder="Tu contraseña"
              startIcon={<LockOutlinedIcon sx={{ fontSize: 18, color: "#c4b5fd" }} />}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((p) => !p)} edge="end" size="small" sx={{ color: "#c4b5fd" }}>
                    {showPassword ? <VisibilityOffOutlinedIcon sx={{ fontSize: 18 }} /> : <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />}
                  </IconButton>
                </InputAdornment>
              }
            />

            <Box sx={{ textAlign: "right", mt: -1 }}>
              <Link component={RouterLink} to="/forgot-password" underline="none"
                sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#7c3aed", "&:hover": { color: "#6d28d9" } }}>
                ¿Olvidaste tu contraseña?
              </Link>
            </Box>

            <Button type="submit" fullWidth variant="contained" disabled={loading}
              sx={{
                backgroundColor: "#7c3aed", color: "#fff",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                textTransform: "none", borderRadius: "10px", py: 1.4, fontSize: "0.95rem",
                boxShadow: "0 4px 14px rgba(124,58,237,0.25)",
                "&:hover": { backgroundColor: "#6d28d9", boxShadow: "0 6px 18px rgba(124,58,237,0.3)" },
                "&.Mui-disabled": { backgroundColor: "rgba(124,58,237,0.35)", color: "rgba(255,255,255,0.5)" },
              }}
            >
              {loading ? <CircularProgress size={20} sx={{ color: "rgba(255,255,255,0.6)" }} /> : "Iniciar sesión"}
            </Button>
          </Box>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#9ca3af", fontSize: "0.85rem" }}>
              ¿No tienes cuenta?{" "}
              <Link component={RouterLink} to="/register" underline="none"
                sx={{ color: "#7c3aed", fontWeight: 600, "&:hover": { color: "#6d28d9" } }}>
                Regístrate gratis
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}