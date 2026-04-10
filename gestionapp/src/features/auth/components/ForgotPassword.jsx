import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  CircularProgress,
  Alert,
  Link,
} from "@mui/material";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Validación
const validateEmail = (v) => {
  if (!v.trim()) return "El correo es obligatorio.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Ingresa un correo válido.";
  return "";
};

// ForgotPassword Page 
export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const error = validateEmail(email);
  const isValid = !error;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #ede9fe 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 4,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 420 }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 6, justifyContent: "center", cursor: "pointer" }} onClick={() => navigate("/")}>
          <BarChartRoundedIcon sx={{ color: "#7c3aed", fontSize: 26 }} />
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#1e1030", fontSize: "1.2rem", letterSpacing: "-0.4px" }}>
            Gast<Box component="span" sx={{ color: "#7c3aed" }}>ify</Box>
          </Typography>
        </Box>

        {/* Card */}
        <Box sx={{ backgroundColor: "#fff", borderRadius: "20px", border: "1px solid #e9d5ff", boxShadow: "0 16px 48px rgba(124,58,237,0.1)", p: { xs: 3, sm: 4.5 } }}>

          {!sent ? (
            <>
              {/* Icon */}
              <Box sx={{ width: 56, height: 56, borderRadius: "16px", backgroundColor: "#f3e8ff", display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
                <EmailOutlinedIcon sx={{ fontSize: 28, color: "#7c3aed" }} />
              </Box>

              <Typography variant="h5" sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#1e1030", fontSize: "1.4rem", letterSpacing: "-0.4px", mb: 0.8 }}>
                ¿Olvidaste tu contraseña?
              </Typography>
              <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.6, mb: 3.5 }}>
                Ingresa tu correo y te enviaremos un enlace para que puedas crear una nueva contraseña.
              </Typography>

              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                <Box>
                  <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "#4b3a6e", mb: 0.7 }}>
                    Correo electrónico
                  </Typography>
                  <TextField
                    fullWidth
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched(true)}
                    error={touched && !!error}
                    helperText={touched ? error : ""}
                    placeholder="tu@correo.com"
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailOutlinedIcon sx={{ fontSize: 18, color: "#c4b5fd" }} />
                        </InputAdornment>
                      ),
                      sx: {
                        fontFamily: "'DM Sans', sans-serif",
                        color: "#1e1030",
                        backgroundColor: "#faf5ff",
                        borderRadius: "10px",
                        "& fieldset": { borderColor: touched && error ? "rgba(239,68,68,0.5)" : "#e9d5ff" },
                        "&:hover fieldset": { borderColor: touched && error ? "rgba(239,68,68,0.7) !important" : "#a855f7 !important" },
                        "&.Mui-focused fieldset": { borderColor: touched && error ? "#ef4444 !important" : "#7c3aed !important", borderWidth: "1px !important" },
                      },
                    }}
                    inputProps={{ sx: { py: 1.4, fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", "&::placeholder": { color: "#c4b5fd" } } }}
                    FormHelperTextProps={{ sx: { fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", mx: 0, mt: 0.5, color: "#ef4444" } }}
                  />
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  sx={{
                    backgroundColor: "#7c3aed",
                    color: "#fff",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    py: 1.4,
                    fontSize: "0.95rem",
                    boxShadow: "0 4px 14px rgba(124,58,237,0.25)",
                    "&:hover": { backgroundColor: "#6d28d9", boxShadow: "0 6px 18px rgba(124,58,237,0.3)" },
                    "&.Mui-disabled": { backgroundColor: "rgba(124,58,237,0.35)", color: "rgba(255,255,255,0.5)" },
                  }}
                >
                  {loading ? <CircularProgress size={20} sx={{ color: "rgba(255,255,255,0.6)" }} /> : "Enviar enlace de recuperación"}
                </Button>
              </Box>
            </>
          ) : (
            /* Success state */
            <Box sx={{ textAlign: "center", py: 2 }}>
              <Box sx={{ width: 64, height: 64, borderRadius: "18px", backgroundColor: "#f0fdf4", display: "flex", alignItems: "center", justifyContent: "center", mb: 3, mx: "auto" }}>
                <MarkEmailReadOutlinedIcon sx={{ fontSize: 32, color: "#16a34a" }} />
              </Box>
              <Typography variant="h5" sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#1e1030", fontSize: "1.3rem", mb: 1.5 }}>
                Revisa tu correo
              </Typography>
              <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#6b7280", fontSize: "0.9rem", lineHeight: 1.7, mb: 3 }}>
                Enviamos un enlace de recuperación a <Box component="span" sx={{ fontWeight: 600, color: "#1e1030" }}>{email}</Box>.
                Revisa tu bandeja de entrada y sigue las instrucciones.
              </Typography>
              <Alert severity="info" sx={{ textAlign: "left", borderRadius: "10px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", mb: 3, backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", color: "#1d4ed8" }}>
                ¿No lo encuentras? Revisa tu carpeta de spam o correo no deseado.
              </Alert>
              <Button
                onClick={() => { setEmail(""); setTouched(false); setSent(false); }}
                variant="outlined"
                fullWidth
                sx={{ borderColor: "#e9d5ff", color: "#7c3aed", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, textTransform: "none", borderRadius: "10px", py: 1.2, mb: 1.5, "&:hover": { borderColor: "#7c3aed", backgroundColor: "rgba(124,58,237,0.04)" } }}
              >
                Intentar con otro correo
              </Button>
            </Box>
          )}

          {/* Back to login */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: sent ? 0 : 3 }}>
            <Link
              component={RouterLink}
              to="/login"
              underline="none"
              sx={{ display: "flex", alignItems: "center", gap: 0.5, fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#9ca3af", "&:hover": { color: "#7c3aed" }, transition: "color 0.2s" }}
            >
              <ArrowBackIcon sx={{ fontSize: 16 }} />
              Volver al inicio de sesión
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}