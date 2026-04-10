import { Box, Typography, Paper } from "@mui/material"
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined"
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined"
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined"
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined"

const CATEGORIAS = [
  { label: "Alimentación", color: "#7c3aed", bg: "rgba(124,58,237,0.08)" },
  { label: "Transporte",   color: "#2563eb", bg: "rgba(37,99,235,0.08)"  },
  { label: "Salud",        color: "#dc2626", bg: "rgba(220,38,38,0.08)"  },
  { label: "Entretenimiento", color: "#d97706", bg: "rgba(217,119,6,0.08)" },
  { label: "Servicios",    color: "#059669", bg: "rgba(5,150,105,0.08)"  },
  { label: "Educación",    color: "#7c3aed", bg: "rgba(124,58,237,0.08)" },
  { label: "Ropa",         color: "#db2777", bg: "rgba(219,39,119,0.08)" },
  { label: "Otros",        color: "#6b7280", bg: "rgba(107,114,128,0.08)"},
]

function StatCard({ icon, iconBg, label, value, sub }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: "14px",
        border: "1px solid #e9d5ff",
        backgroundColor: "#fff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "8px",
            backgroundColor: iconBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>
        <Typography
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 700,
            color: "#9ca3af",
            textTransform: "uppercase",
            letterSpacing: "0.07em",
          }}
        >
          {label}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: "1.5rem",
            color: "#1e1030",
            letterSpacing: "-0.5px",
            mb: 0.4,
          }}
        >
          {value}
        </Typography>
        <Typography
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.78rem",
            color: "#9ca3af",
          }}
        >
          {sub}
        </Typography>
      </Box>
    </Paper>
  )
}

export default function ExpenseSummary() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>

      {/* Tarjetas */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2.5,
          width: "100%",
          marginBottom: 6,
        }}
      >
        {/* Tarjeta 1 */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 calc(33.333% - 16px)" },
            minWidth: 0,
            minHeight: { xs: "auto", sm: "180px" },
          }}
        >
          <StatCard
            icon={<TrendingUpOutlinedIcon sx={{ color: "#7c3aed", fontSize: 18 }} />}
            iconBg="#ede9fe"
            label="Total del mes"
            value="—"
            sub="0 gastos registrados"
          />
        </Box>

        {/* Tarjeta 2 */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 calc(33.333% - 16px)" },
            minWidth: 0,
            minHeight: { xs: "auto", sm: "180px" },
          }}
        >
          <StatCard
            icon={<EmojiEventsOutlinedIcon sx={{ color: "#d97706", fontSize: 18 }} />}
            iconBg="#fef3c7"
            label="Mayor gasto"
            value="—"
            sub="Sin datos aún"
          />
        </Box>

        {/* Tarjeta 3 */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 calc(33.333% - 16px)" },
            minWidth: 0,
            minHeight: { xs: "auto", sm: "180px" },
          }}
        >
          <StatCard
            icon={<ReceiptLongOutlinedIcon sx={{ color: "#16a34a", fontSize: 18 }} />}
            iconBg="#dcfce7"
            label="Nº de gastos"
            value="0"
            sub="Este período"
          />
        </Box>
      </Box>

      {/* Resumen por categoría */}
      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          borderRadius: "14px",
          border: "1px solid #e9d5ff",
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: "8px",
              backgroundColor: "#ede9fe",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PieChartOutlinedIcon sx={{ color: "#7c3aed", fontSize: 18 }} />
          </Box>
          <Typography
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              color: "#1e1030",
              fontSize: "0.95rem",
            }}
          >
            Resumen por categoría
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
          {CATEGORIAS.map((c) => (
            <Box
              key={c.label}
              sx={{
                backgroundColor: c.bg,
                color: c.color,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 600,
                padding: "6px 12px",
                borderRadius: "6px",
                border: `1px solid ${c.color}22`,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {`${c.label} · —`}
            </Box>
          ))}
        </Box>

        <Typography
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.82rem",
            color: "#9ca3af",
          }}
        >
          Los datos aparecerán aquí una vez registres tus gastos.
        </Typography>
      </Paper>

    </Box>
  )
}
