import {
  Box, Typography, TextField, Button, Grid,
  Select, MenuItem, FormControl, FormHelperText,
} from "@mui/material"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"

const CATEGORIAS = [
  "Alimentación", "Transporte", "Salud", "Entretenimiento",
  "Servicios", "Educación", "Ropa", "Otros",
]

const fieldSx = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.875rem",
  color: "#1e1030",
  backgroundColor: "#fff",
  borderRadius: "10px",
  "& fieldset": { borderColor: "#e9d5ff" },
  "&:hover fieldset": { borderColor: "#a855f7 !important" },
  "&.Mui-focused fieldset": { borderColor: "#7c3aed !important" },
}

const labelSx = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.78rem",
  fontWeight: 600,
  color: "#4b3a6e",
  mb: 0.6,
  display: "block",
}

export default function ExpenseForm({ form, errors, touched, handleChange, handleBlur, handleSubmit }) {
  return (
    <Box sx={{ p: { xs: 2.5, md: 3 }, borderRadius: "16px", border: "1px solid #e9d5ff", backgroundColor: "#faf5ff" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2.5 }}>
        <AddCircleOutlineIcon sx={{ color: "#7c3aed", fontSize: 20 }} />
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#1e1030", fontSize: "1rem" }}>
          Registrar gasto
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Fecha */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography sx={labelSx}>Fecha</Typography>
          <TextField
            fullWidth type="date"
            value={form.fecha}
            onChange={handleChange("fecha")}
            onBlur={handleBlur("fecha")}
            error={touched.fecha && !!errors.fecha}
            helperText={touched.fecha ? errors.fecha : ""}
            size="small"
            InputProps={{ sx: fieldSx }}
            FormHelperTextProps={{ sx: { fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#ef4444", mx: 0 } }}
          />
        </Grid>

        {/* Categoría */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography sx={labelSx}>Categoría</Typography>
          <FormControl fullWidth size="small" error={touched.categoria && !!errors.categoria}>
            <Select
              value={form.categoria}
              onChange={handleChange("categoria")}
              onBlur={handleBlur("categoria")}
              displayEmpty
              sx={fieldSx}
            >
              <MenuItem value="" disabled sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#c4b5fd" }}>
                Selecciona una categoría
              </MenuItem>
              {CATEGORIAS.map((c) => (
                <MenuItem key={c} value={c} sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem" }}>
                  {c}
                </MenuItem>
              ))}
            </Select>
            {touched.categoria && errors.categoria && (
              <FormHelperText sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", mx: 0 }}>
                {errors.categoria}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>

        {/* Valor */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography sx={labelSx}>Valor ($)</Typography>
          <TextField
            fullWidth type="number" placeholder="0"
            value={form.valor}
            onChange={handleChange("valor")}
            onBlur={handleBlur("valor")}
            error={touched.valor && !!errors.valor}
            helperText={touched.valor ? errors.valor : ""}
            size="small"
            InputProps={{ sx: fieldSx }}
            inputProps={{ min: 0, sx: { fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem" } }}
            FormHelperTextProps={{ sx: { fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#ef4444", mx: 0 } }}
          />
        </Grid>

        {/* Descripción */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography sx={labelSx}>Descripción</Typography>
          <TextField
            fullWidth placeholder="Ej: Mercado semanal"
            value={form.descripcion}
            onChange={handleChange("descripcion")}
            onBlur={handleBlur("descripcion")}
            error={touched.descripcion && !!errors.descripcion}
            helperText={touched.descripcion ? errors.descripcion : ""}
            size="small"
            InputProps={{ sx: fieldSx }}
            inputProps={{ sx: { fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", "&::placeholder": { color: "#c4b5fd" } } }}
            FormHelperTextProps={{ sx: { fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#ef4444", mx: 0 } }}
          />
        </Grid>

        {/* Botón */}
        <Grid size={{ xs: 12 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={handleSubmit}
              variant="contained"
              startIcon={<AddCircleOutlineIcon />}
              sx={{
                backgroundColor: "#7c3aed", color: "#fff",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                textTransform: "none", borderRadius: "8px", boxShadow: "none",
                "&:hover": { backgroundColor: "#6d28d9", boxShadow: "none" },
              }}
            >
              Agregar gasto
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}