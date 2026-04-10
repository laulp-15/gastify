import { Box, Container, Typography, Button, Divider } from "@mui/material"
import { useNavigate } from "react-router-dom"
import LogoutIcon from "@mui/icons-material/Logout"
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded"

import { useDashboard } from "../hooks/UseDashboard"
import SearchBar from "../components/Searchbar"
import ExpenseForm from "../components/ExpenseForm"
import ExpenseSummary from "../components/ExpenseSummary"
import ExpenseTable from "../components/ExpenseTable"

export default function Dashboard() {
  const navigate = useNavigate()
  const db = useDashboard()

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#faf5ff" }}>

      {/* Topbar */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "rgba(30, 16, 48, 0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(124,58,237,0.2)",
          px: { xs: 2, md: 4 },
          py: 1.5,
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <BarChartRoundedIcon sx={{ color: "#a855f7", fontSize: 24 }} />
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#fff", fontSize: "1.05rem" }}>
              Gast<Box component="span" sx={{ color: "#a855f7" }}>ify</Box>
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ mx: 1, borderColor: "rgba(168,85,247,0.3)" }} />
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)", fontSize: "0.85rem" }}>
              Dashboard
            </Typography>
          </Box>

          {/* Filtro + cerrar sesión */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
            <SearchBar
              filtroMes={db.filtroMes}
              setFiltroMes={db.setFiltroMes}
              filtroAnio={db.filtroAnio}
              setFiltroAnio={db.setFiltroAnio}
            />
            <Button
              onClick={() => {
                localStorage.removeItem("token")
                localStorage.removeItem("usuario")
                navigate("/login")
              }}
              variant="outlined"
              startIcon={<LogoutIcon sx={{ fontSize: 16 }} />}
              size="small"
              sx={{
                borderColor: "rgba(168,85,247,0.35)",
                color: "rgba(255,255,255,0.55)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                textTransform: "none",
                borderRadius: "8px",
                fontSize: "0.82rem",
                "&:hover": {
                  borderColor: "#ef4444",
                  color: "#ef4444",
                  backgroundColor: "rgba(239,68,68,0.06)",
                },
              }}
            >
              Cerrar sesión
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Contenido */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <ExpenseSummary />
          <ExpenseForm
            form={db.form}
            errors={db.errors}
            touched={db.touched}
            handleChange={db.handleChange}
            handleBlur={db.handleBlur}
            handleSubmit={db.handleSubmit}
          />
          <ExpenseTable />
        </Box>
      </Container>
    </Box>
  )
}