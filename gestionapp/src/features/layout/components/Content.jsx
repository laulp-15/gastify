import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  TextField,
  Divider,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

// Shared Styles
const sectionLabel = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#7c3aed",
  mb: 1.5,
  display: "block",
};

const sectionTitle = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 700,
  color: "#1e1030",
  lineHeight: 1.2,
  letterSpacing: "-0.5px",
};

const sectionSubtitle = {
  fontFamily: "'DM Sans', sans-serif",
  color: "#6b7280",
  lineHeight: 1.8,
  fontSize: "1rem",
};

// Hero 
function HeroSection() {
  const navigate = useNavigate();
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 40%, #ede9fe 100%)",
        pt: { xs: 12, md: 10 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h1"
              sx={{
                ...sectionTitle,
                fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
                mb: 3,
              }}
            >
              Controla tus{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                gastos
              </Box>{" "}
              con claridad
            </Typography>
            <Typography sx={{ ...sectionSubtitle, mb: 4, fontSize: "1.05rem" }}>
              Gastify te ayuda a registrar, categorizar y entender en qué
              gastas tu dinero. Toma el control de tus finanzas personales de
              forma sencilla e inteligente.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                onClick={() => navigate("/register")}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: "#7c3aed",
                  color: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "10px",
                  px: 3.5,
                  py: 1.4,
                  fontSize: "0.95rem",
                  boxShadow: "0 4px 14px rgba(124,58,237,0.3)",
                  "&:hover": { backgroundColor: "#6d28d9", boxShadow: "0 6px 20px rgba(124,58,237,0.35)" },
                }}
              >
                Empezar gratis
              </Button>
              <Button
                variant="outlined"
                href="https://github.com/laulp-15/gastify"
                sx={{
                  borderColor: "#d8b4fe",
                  color: "#7c3aed",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "10px",
                  px: 3.5,
                  py: 1.4,
                  fontSize: "0.95rem",
                  "&:hover": { borderColor: "#7c3aed", backgroundColor: "rgba(124,58,237,0.04)" },
                }}
              >
                Visita nuestro repositorio
              </Button>
            </Box>

            {/* Stats */}
            <Box sx={{ display: "flex", gap: 4, mt: 5, flexWrap: "wrap" }}>
              {[
                { value: "50K+", label: "Usuarios activos" },
                { value: "98%", label: "Satisfacción" },
                { value: "Gratis", label: "Para siempre" },
              ].map((s) => (
                <Box key={s.label}>
                  <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#1e1030" }}>
                    {s.value}
                  </Typography>
                  <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#9ca3af", fontSize: "0.8rem" }}>
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Image */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 480,
              }}
            >
              <Box
                sx={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(124,58,237,0.18)",
                  border: "1px solid rgba(124,58,237,0.1)",
                }}
              >
                <Box
                  component="img"
                  src="/img/content-img-2.png"
                  alt="Control de gastos personales"
                  sx={{ width: "100%", display: "block", height: { xs: 260, md: 360 }, objectFit: "cover" }}
                />
              </Box>
              {/* Floating badge */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: -16,
                  left: { xs: 16, md: -20 },
                  backgroundColor: "#fff",
                  borderRadius: "14px",
                  px: 2.5,
                  py: 1.5,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(124,58,237,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <Box sx={{ width: 36, height: 36, borderRadius: "10px", backgroundColor: "#f3e8ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <SavingsOutlinedIcon sx={{ color: "#7c3aed", fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#1e1030", fontSize: "0.9rem" }}>
                    +$320.000
                  </Typography>
                  <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#9ca3af", fontSize: "0.72rem" }}>
                    Ahorro este mes
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// About 
function AboutSection() {
  return (
    <Box id="about" sx={{ py: { xs: 10, md: 14 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 16px 48px rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.08)",
              }}
            >
              <Box
                component="img"
                src="/img/content-img-1.png"
                alt="Gestión de finanzas personales"
                sx={{ width: "100%", display: "block", height: 380, objectFit: "cover" }}
              />
            </Box>
          </Grid>

          {/* Text */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography sx={sectionLabel}>Sobre nosotros</Typography>
            <Typography variant="h3" sx={{ ...sectionTitle, fontSize: { xs: "2rem", md: "2.5rem" }, mb: 3 }}>
              Creamos Gastify para que cada persona entienda su dinero
            </Typography>
            <Typography sx={{ ...sectionSubtitle, mb: 3 }}>
              Sabemos que manejar las finanzas personales puede sentirse abrumador. Por eso creamos Gastify:
              una herramienta simple, visual y poderosa que te muestra exactamente en qué se va tu dinero,
              para que puedas tomar mejores decisiones cada día.
            </Typography>
            <Typography sx={{ ...sectionSubtitle, mb: 4 }}>
              Nuestro equipo está compuesto por personas que vivieron en carne propia la dificultad de
              ahorrar sin tener claridad financiera. Fundada en 2022, hoy ayudamos a miles de personas a
              alcanzar sus metas económicas.
            </Typography>

            <Grid container spacing={2}>
              {[
                { icon: <WalletOutlinedIcon sx={{ color: "#7c3aed", fontSize: 20 }} />, text: "Registro fácil de gastos e ingresos" },
                { icon: <PieChartOutlinedIcon sx={{ color: "#7c3aed", fontSize: 20 }} />, text: "Reportes visuales y por categoría" },
                { icon: <TrackChangesOutlinedIcon sx={{ color: "#7c3aed", fontSize: 20 }} />, text: "Metas de ahorro personalizadas" },
                { icon: <LockOutlinedIcon sx={{ color: "#7c3aed", fontSize: 20 }} />, text: "Datos 100% privados y seguros" },
              ].map((item) => (
                <Grid size={{ xs: 12, sm: 6 }} key={item.text}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <Box sx={{ width: 36, height: 36, borderRadius: "9px", backgroundColor: "#f3e8ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, mt: 0.2 }}>
                      {item.icon}
                    </Box>
                    <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#374151", fontSize: "0.9rem", fontWeight: 500, lineHeight: 1.5 }}>
                      {item.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// Objectives 
function ObjectivesSection() {
  const objectives = [
    { number: "01", title: "Registro sin esfuerzo", desc: "Anota tus gastos e ingresos en segundos, con categorías predefinidas o personalizadas según tus hábitos." },
    { number: "02", title: "Visión clara de tu dinero", desc: "Gráficas y resúmenes que te muestran en qué gastas más y cómo evoluciona tu economía mes a mes." },
    { number: "03", title: "Metas de ahorro reales", desc: "Define objetivos concretos —vacaciones, emergencias, compras— y lleva un seguimiento visual de tu progreso." },
    { number: "04", title: "Alertas inteligentes", desc: "Recibe avisos cuando te acercas al límite de tu presupuesto o cuando un gasto supera tu promedio habitual." },
    { number: "05", title: "Historial completo", desc: "Accede a todos tus movimientos desde el primer día, con filtros por fecha, categoría o monto." },
    { number: "06", title: "Privacidad garantizada", desc: "Tus datos financieros son tuyos. No los compartimos, no los vendemos y siempre los puedes exportar o eliminar." },
  ];

  return (
    <Box
      id="objectives"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#faf5ff",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={sectionLabel}>Nuestros objetivos</Typography>
          <Typography variant="h3" sx={{ ...sectionTitle, fontSize: { xs: "2rem", md: "2.5rem" }, mb: 2 }}>
            Lo que Gastify hace por ti
          </Typography>
          <Typography sx={{ ...sectionSubtitle, maxWidth: 520, mx: "auto" }}>
            Cada función está pensada para que entiendas tu dinero mejor y puedas tomar decisiones con confianza.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
          {objectives.map((obj) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={obj.number} sx={{ display: "flex" }}>
              <Box
                sx={{
                  p: 3.5,
                  borderRadius: "16px",
                  border: "1px solid #e9d5ff",
                  backgroundColor: "#fff",
                  width: "100%",
                  "&:hover": { borderColor: "#a855f7", boxShadow: "0 8px 24px rgba(124,58,237,0.08)" },
                  transition: "all 0.2s ease",
                }}
              >
                <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "#c084fc", letterSpacing: "0.1em", mb: 2 }}>
                  {obj.number}
                </Typography>
                <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#1e1030", fontSize: "1rem", mb: 1.2 }}>
                  {obj.title}
                </Typography>
                <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.7 }}>
                  {obj.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// Advantages 
function AdvantagesSection() {
  const advantages = [
    {
      icon: <SpeedOutlinedIcon sx={{ fontSize: 26, color: "#7c3aed" }} />,
      title: "Rápido y sencillo",
      desc: "Registra un gasto en menos de 10 segundos. Diseñado para que usarlo sea un hábito, no una obligación.",
      points: ["Registro por voz (próximamente)", "Acceso directo desde inicio", "Sin pasos innecesarios"],
    },
    {
      icon: <InsightsOutlinedIcon sx={{ fontSize: 26, color: "#7c3aed" }} />,
      title: "Analíticas personales",
      desc: "Reportes mensuales y gráficas que muestran tus patrones de gasto de forma visual y comprensible.",
      points: ["Gráficas por categoría", "Comparativa mensual", "Exportación a PDF"],
    },
    {
      icon: <SavingsOutlinedIcon sx={{ fontSize: 26, color: "#7c3aed" }} />,
      title: "Metas de ahorro",
      desc: "Crea metas específicas con montos y fechas. Gastify te muestra cuánto te falta y te anima a lograrlo.",
      points: ["Metas personalizadas", "Barra de progreso", "Recordatorios automáticos"],
    },
    {
      icon: <NotificationsOutlinedIcon sx={{ fontSize: 26, color: "#7c3aed" }} />,
      title: "Alertas de presupuesto",
      desc: "Define límites de gasto por categoría y recibe avisos antes de superarlos.",
      points: ["Límites por categoría", "Notificaciones en tiempo real", "Resumen semanal"],
    },
    {
      icon: <TrendingDownOutlinedIcon sx={{ fontSize: 26, color: "#7c3aed" }} />,
      title: "Reduce gastos innecesarios",
      desc: "Identifica fácilmente en qué gastas de más y ajusta tus hábitos con datos reales.",
      points: ["Top gastos del mes", "Comparativas históricas", "Sugerencias de ahorro"],
    },
    {
      icon: <ShieldOutlinedIcon sx={{ fontSize: 26, color: "#7c3aed" }} />,
      title: "100% seguro y privado",
      desc: "Cifrado de extremo a extremo. Tus datos no se comparten con terceros, nunca.",
      points: ["Cifrado AES-256", "Sin publicidad", "Exporta o elimina tus datos"],
    },
  ];

  return (
    <Box id="advantages" sx={{ py: { xs: 10, md: 14 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={sectionLabel}>Ventajas</Typography>
          <Typography variant="h3" sx={{ ...sectionTitle, fontSize: { xs: "2rem", md: "2.5rem" }, mb: 2 }}>
            ¿Por qué elegir Gastify?
          </Typography>
          <Typography sx={{ ...sectionSubtitle, maxWidth: 520, mx: "auto" }}>
            Más que una app de gastos: una herramienta que te ayuda a construir hábitos financieros saludables.
          </Typography>
        </Box>

        {/* Feature image */}
        <Box sx={{ mb: 8, borderRadius: "20px", overflow: "hidden", boxShadow: "0 12px 40px rgba(124,58,237,0.1)", border: "1px solid #e9d5ff" }}>
          <Box
            component="img"
            src="/img/content-img-3.png"
            alt="Finanzas personales y ahorro"
            sx={{ width: "100%", display: "block", height: { xs: 200, md: 320 }, objectFit: "cover" }}
          />
        </Box>

        <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
          {advantages.map((adv) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={adv.title} sx={{ display: "flex" }}>
              <Card
                sx={{
                  backgroundColor: "#faf5ff",
                  border: "1px solid #e9d5ff",
                  borderRadius: "16px",
                  width: "100%",
                  "&:hover": { borderColor: "#a855f7", boxShadow: "0 8px 24px rgba(124,58,237,0.1)", backgroundColor: "#f5f0ff" },
                  transition: "all 0.2s ease",
                  boxShadow: "none",
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: "12px", backgroundColor: "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center", mb: 2.5 }}>
                    {adv.icon}
                  </Box>
                  <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#1e1030", fontSize: "1rem", mb: 1 }}>
                    {adv.title}
                  </Typography>
                  <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.7, mb: 2.5 }}>
                    {adv.desc}
                  </Typography>
                  <Divider sx={{ borderColor: "#e9d5ff", mb: 2 }} />
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {adv.points.map((point) => (
                      <Box key={point} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <CheckCircleOutlineIcon sx={{ fontSize: 15, color: "#7c3aed", flexShrink: 0 }} />
                        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#6b7280", fontSize: "0.8rem" }}>
                          {point}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// Testimonials 
function TestimonialsSection() {
  const testimonials = [
    { name: "Laura M.", role: "Estudiante universitaria", text: "Con Gastify entendí en qué me gastaba el dinero de la mesada. Ahora ahorro el 20% cada mes sin esfuerzo.", avatar: "L" },
    { name: "Carlos R.", role: "Freelancer", text: "Mis ingresos son variables y Gastify me ayuda a saber exactamente cuánto puedo gastar cada semana.", avatar: "C" },
    { name: "Sofía T.", role: "Empleada y mamá", text: "Llevaba el presupuesto familiar en Excel. Ahora con Gastify lo hago en el celular y en segundos.", avatar: "S" },
  ];

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: "#faf5ff" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography sx={sectionLabel}>Testimonios</Typography>
          <Typography variant="h3" sx={{ ...sectionTitle, fontSize: { xs: "2rem", md: "2.4rem" }, mb: 2 }}>
            Lo que dicen nuestros usuarios
          </Typography>
        </Box>
        <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
          {testimonials.map((t) => (
            <Grid size={{ xs: 12, md: 4 }} key={t.name} sx={{ display: "flex" }}>
              <Box
                sx={{
                  p: 3.5,
                  borderRadius: "16px",
                  border: "1px solid #e9d5ff",
                  backgroundColor: "#fff",
                  width: "100%",
                  boxShadow: "0 4px 16px rgba(124,58,237,0.05)",
                }}
              >
                <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <EmojiEventsOutlinedIcon key={i} sx={{ fontSize: 16, color: "#f59e0b" }} />
                  ))}
                </Box>
                <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#374151", fontSize: "0.9rem", lineHeight: 1.7, mb: 3, fontStyle: "italic" }}>
                  "{t.text}"
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Avatar sx={{ backgroundColor: "#7c3aed", width: 36, height: 36, fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif" }}>
                    {t.avatar}
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#1e1030", fontSize: "0.875rem" }}>
                      {t.name}
                    </Typography>
                    <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#9ca3af", fontSize: "0.78rem" }}>
                      {t.role}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// Contact 
function ContactSection() {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        background: "linear-gradient(135deg, #fff 0%, #faf5ff 100%)",
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography sx={sectionLabel}>Contacto</Typography>
          <Typography variant="h3" sx={{ ...sectionTitle, fontSize: { xs: "2rem", md: "2.4rem" }, mb: 2 }}>
            ¿Tienes alguna pregunta?
          </Typography>
          <Typography sx={sectionSubtitle}>
            Escríbenos y te respondemos en menos de 24 horas.
          </Typography>
        </Box>

        <Box
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: "20px",
            border: "1px solid #e9d5ff",
            backgroundColor: "#fff",
            boxShadow: "0 8px 32px rgba(124,58,237,0.07)",
          }}
        >
          <Grid container spacing={2.5}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                placeholder="Nombre"
                variant="outlined"
                size="small"
                InputProps={{
                  sx: {
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#1e1030",
                    backgroundColor: "#faf5ff",
                    borderRadius: "10px",
                    "& fieldset": { borderColor: "#e9d5ff" },
                    "&:hover fieldset": { borderColor: "#a855f7 !important" },
                    "&.Mui-focused fieldset": { borderColor: "#7c3aed !important" },
                  },
                }}
                inputProps={{ sx: { py: 1.4, fontSize: "0.9rem" } }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                placeholder="Apellido"
                variant="outlined"
                size="small"
                InputProps={{
                  sx: {
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#1e1030",
                    backgroundColor: "#faf5ff",
                    borderRadius: "10px",
                    "& fieldset": { borderColor: "#e9d5ff" },
                    "&:hover fieldset": { borderColor: "#a855f7 !important" },
                    "&.Mui-focused fieldset": { borderColor: "#7c3aed !important" },
                  },
                }}
                inputProps={{ sx: { py: 1.4, fontSize: "0.9rem" } }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                placeholder="Correo electrónico"
                type="email"
                variant="outlined"
                size="small"
                InputProps={{
                  sx: {
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#1e1030",
                    backgroundColor: "#faf5ff",
                    borderRadius: "10px",
                    "& fieldset": { borderColor: "#e9d5ff" },
                    "&:hover fieldset": { borderColor: "#a855f7 !important" },
                    "&.Mui-focused fieldset": { borderColor: "#7c3aed !important" },
                  },
                }}
                inputProps={{ sx: { py: 1.4, fontSize: "0.9rem" } }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                placeholder="¿En qué podemos ayudarte?"
                multiline
                rows={4}
                variant="outlined"
                InputProps={{
                  sx: {
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#1e1030",
                    backgroundColor: "#faf5ff",
                    borderRadius: "10px",
                    "& fieldset": { borderColor: "#e9d5ff" },
                    "&:hover fieldset": { borderColor: "#a855f7 !important" },
                    "&.Mui-focused fieldset": { borderColor: "#7c3aed !important" },
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button
                fullWidth
                variant="contained"
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
                }}
              >
                Enviar mensaje
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

// Export 
export default function Content() {
  return (
    <Box>
      <HeroSection />
      <AboutSection />
      <ObjectivesSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <ContactSection />
    </Box>
  );
}