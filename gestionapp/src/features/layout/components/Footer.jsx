import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const FOOTER_LINKS = {
  Producto: ["Características", "Precios", "Actualizaciones", "Seguridad"],
  Empresa: ["Sobre nosotros", "Equipo", "Carreras", "Blog"],
  Soporte: ["Documentación", "Centro de ayuda", "Privacidad", "Términos"],
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1e1030",
        borderTop: "1px solid rgba(124,58,237,0.2)",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2, cursor: "pointer" }}
              onClick={() => scrollToSection("hero")}
            >
              <BarChartRoundedIcon sx={{ color: "#a855f7", fontSize: 24 }} />
              <Typography
                variant="h6"
                sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#fff", letterSpacing: "-0.5px", fontSize: "1.05rem" }}
              >
                Gast<Box component="span" sx={{ color: "#a855f7" }}>ify</Box>
              </Typography>
            </Box>

            <Typography
              sx={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: 260, mb: 3 }}
            >
              Tu compañero inteligente para el control de gastos y el ahorro personal.
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              {[
                { icon: <LinkedInIcon fontSize="small" />, href: "#", label: "Ir a LinkedIn" },
                { icon: <TwitterIcon fontSize="small" />, href: "#", label: "Ir a Twitter" },
                { icon: <GitHubIcon fontSize="small" />, href: "https://github.com/laulp-15/gastify", label: "Ver repositorio en GitHub" },
              ].map((social, i) => (
                <IconButton
                  key={i}
                  href={social.href}
                  size="small"
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  sx={{
                    color: "rgba(255,255,255,0.35)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                    width: 34,
                    height: 34,
                    "&:hover": { color: "#a855f7", borderColor: "rgba(168,85,247,0.4)", backgroundColor: "rgba(168,85,247,0.05)" },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <Grid size={{ xs: 6, sm: 4, md: 2.5 }} key={section}>
              <Typography
                sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#fff", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", mb: 2.5 }}
              >
                {section}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                {links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    underline="none"
                    sx={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", "&:hover": { color: "#a855f7" }, transition: "color 0.2s" }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", my: 5 }} />

        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" }, gap: 2 }}
        >
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.25)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Gastify. Todos los derechos reservados.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            {["Privacidad", "Términos", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                underline="none"
                sx={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.25)", fontSize: "0.8rem", "&:hover": { color: "#a855f7" }, transition: "color 0.2s" }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}