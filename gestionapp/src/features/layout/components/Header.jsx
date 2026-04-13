import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";

const NAV_ITEMS = [
  { label: "Inicio", id: "hero" },
  { label: "Sobre Nosotros", id: "about" },
  { label: "Objetivos", id: "objectives" },
  { label: "Ventajas", id: "advantages" },
  { label: "Contacto", id: "contact" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setDrawerOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled
            ? "rgba(30, 16, 48, 0.98)"
            : "rgba(30, 16, 48, 0.88)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid",
          borderColor: scrolled
            ? "rgba(237, 58, 58, 0.25)"
            : "rgba(124,58,237,0.12)",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1200px",
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 4 },
            py: 0.8,
          }}
        >
          {/* Logo */}
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1, cursor: "pointer" }}
            onClick={() => scrollToSection("hero")}
          >
            <BarChartRoundedIcon sx={{ color: "#a855f7", fontSize: 26 }} />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.5px",
                fontSize: "1.1rem",
              }}
            >
              Gast
              <Box component="span" sx={{ color: "#a855f7" }}>ify</Box>
            </Typography>
          </Box>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    textTransform: "none",
                    px: 1.5,
                    "&:hover": { color: "#a855f7", backgroundColor: "rgba(168,85,247,0.08)" },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                onClick={() => navigate("/api")}
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  textTransform: "none",
                  px: 1.5,
                  "&:hover": { color: "#a855f7", backgroundColor: "rgba(168,85,247,0.08)" },
                }}
              >
                API RyC
              </Button>

              <Button
                onClick={() => navigate("/login")}
                variant="outlined"
                sx={{
                  ml: 1,
                  borderColor: "rgba(168,85,247,0.5)",
                  color: "#a855f7",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "8px",
                  px: 2,
                  py: 0.7,
                  "&:hover": {
                    backgroundColor: "rgba(168,85,247,0.1)",
                    borderColor: "#a855f7",
                  },
                }}
              >
                Iniciar sesión
              </Button>
              <Button
                onClick={() => navigate("/register")}
                variant="contained"
                sx={{
                  ml: 1,
                  backgroundColor: "#7c3aed",
                  color: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "8px",
                  px: 2,
                  py: 0.7,
                  boxShadow: "none",
                  "&:hover": { backgroundColor: "#6d28d9", boxShadow: "none" },
                }}
              >
                Registrarse
              </Button>
            </Box>
          )}

          {/* Mobile */}
          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "#a855f7", mr: 3.5 }}
              aria-label="Abrir menú"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 270,
            backgroundColor: "#1e1030",
            borderLeft: "1px solid rgba(124,58,237,0.2)",
            px: 1,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2, py: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <BarChartRoundedIcon sx={{ color: "#a855f7", fontSize: 22 }} />
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#fff" }}>
              Gast<Box component="span" sx={{ color: "#a855f7" }}>ify</Box>
            </Typography>
          </Box>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "rgba(255,255,255,0.5)" }}
            aria-label="Cerrar menú"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => scrollToSection(item.id)}
                sx={{ borderRadius: "8px", mx: 1, "&:hover": { backgroundColor: "rgba(168,85,247,0.1)" } }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "0.95rem",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => { setDrawerOpen(false); navigate("/api"); }}
              sx={{ borderRadius: "8px", mx: 1, "&:hover": { backgroundColor: "rgba(168,85,247,0.1)" } }}
            >
              <ListItemText
                primary="API RyC"
                primaryTypographyProps={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.95rem",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>

        <Box sx={{ px: 2, mt: 2, display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Button
            fullWidth
            onClick={() => { setDrawerOpen(false); navigate("/login"); }}
            variant="outlined"
            sx={{
              borderColor: "rgba(168,85,247,0.5)",
              color: "#a855f7",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "8px",
              py: 1.1,
              "&:hover": { backgroundColor: "rgba(168,85,247,0.1)", borderColor: "#a855f7" },
            }}
          >
            Iniciar sesión
          </Button>
          <Button
            fullWidth
            onClick={() => { setDrawerOpen(false); navigate("/register"); }}
            variant="contained"
            sx={{
              backgroundColor: "#7c3aed",
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "8px",
              py: 1.1,
              boxShadow: "none",
              "&:hover": { backgroundColor: "#6d28d9", boxShadow: "none" },
            }}
          >
            Registrarse
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

