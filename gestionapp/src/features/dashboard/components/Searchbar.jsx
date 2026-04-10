import { Box, Typography, Select, MenuItem, FormControl } from "@mui/material"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"

const MESES = [
  { value: 1, label: "Enero" }, { value: 2, label: "Febrero" },
  { value: 3, label: "Marzo" }, { value: 4, label: "Abril" },
  { value: 5, label: "Mayo" }, { value: 6, label: "Junio" },
  { value: 7, label: "Julio" }, { value: 8, label: "Agosto" },
  { value: 9, label: "Septiembre" }, { value: 10, label: "Octubre" },
  { value: 11, label: "Noviembre" }, { value: 12, label: "Diciembre" },
]

const anioActual = new Date().getFullYear()
const ANIOS = Array.from({ length: 5 }, (_, i) => anioActual - i)

const selectSx = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.875rem",
  color: "#1e1030",
  backgroundColor: "#fff",
  borderRadius: "10px",
  "& fieldset": { borderColor: "#e9d5ff" },
  "&:hover fieldset": { borderColor: "#a855f7 !important" },
  "&.Mui-focused fieldset": { borderColor: "#7c3aed !important" },
}

export default function SearchBar({ filtroMes, setFiltroMes, filtroAnio, setFiltroAnio }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <CalendarMonthOutlinedIcon sx={{ color: "#7c3aed", fontSize: 20 }} />
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#1e1030", fontSize: "0.875rem" }}>
          Período:
        </Typography>
      </Box>

      <FormControl size="small" sx={{ minWidth: 140 }}>
        <Select
          value={filtroMes}
          onChange={(e) => setFiltroMes(e.target.value)}
          sx={selectSx}
        >
          {MESES.map((m) => (
            <MenuItem key={m.value} value={m.value} sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem" }}>
              {m.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 100 }}>
        <Select
          value={filtroAnio}
          onChange={(e) => setFiltroAnio(e.target.value)}
          sx={selectSx}
        >
          {ANIOS.map((a) => (
            <MenuItem key={a} value={a} sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem" }}>
              {a}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}