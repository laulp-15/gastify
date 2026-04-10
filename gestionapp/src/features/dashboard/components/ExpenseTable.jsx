import {
  Box, Typography, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, IconButton,
  Chip, Tooltip,
} from "@mui/material"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined"

const headCellSx = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.75rem",
  fontWeight: 700,
  color: "#9ca3af",
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  borderColor: "#e9d5ff",
  backgroundColor: "#faf5ff",
  py: 1.5,
}

const cellSx = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.85rem",
  color: "#374151",
  borderColor: "#f3e8ff",
  py: 1.5,
}

export default function ExpenseTable() {
  return (
    <Box sx={{ p: { xs: 2, md: 3 }, borderRadius: "16px", border: "1px solid #e9d5ff", backgroundColor: "#fff" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2.5 }}>
        <ReceiptLongOutlinedIcon sx={{ color: "#7c3aed", fontSize: 20 }} />
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#1e1030", fontSize: "1rem" }}>
          Gastos registrados
        </Typography>
        <Chip
          label="0"
          size="small"
          sx={{ backgroundColor: "rgba(124,58,237,0.08)", color: "#7c3aed", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", height: 20, ml: 0.5 }}
        />
      </Box>

      <TableContainer sx={{ borderRadius: "10px", border: "1px solid #f3e8ff", overflowX: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={headCellSx}>Fecha</TableCell>
              <TableCell sx={headCellSx}>Categoría</TableCell>
              <TableCell sx={headCellSx}>Descripción</TableCell>
              <TableCell sx={{ ...headCellSx, textAlign: "right" }}>Valor</TableCell>
              <TableCell sx={{ ...headCellSx, textAlign: "center" }}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1, 2, 3].map((i) => (
              <TableRow key={i} sx={{ opacity: 0.3 }}>
                <TableCell sx={cellSx}>dd/mm/aaaa</TableCell>
                <TableCell sx={cellSx}>
                  <Chip
                    label="Categoría"
                    size="small"
                    sx={{ backgroundColor: "rgba(124,58,237,0.08)", color: "#7c3aed", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600, height: 22 }}
                  />
                </TableCell>
                <TableCell sx={cellSx}>Descripción del gasto</TableCell>
                <TableCell sx={{ ...cellSx, textAlign: "right", fontWeight: 700, color: "#1e1030" }}>$0</TableCell>
                <TableCell sx={{ ...cellSx, textAlign: "center" }}>
                  <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
                    <Tooltip title="Editar">
                      <span>
                        <IconButton
                          size="small"
                          disabled
                          sx={{ color: "#7c3aed", backgroundColor: "rgba(124,58,237,0.06)", borderRadius: "7px" }}
                        >
                          <EditOutlinedIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                      </span>
                    </Tooltip>
                    <Tooltip title="Eliminar">
                      <span>
                        <IconButton
                          size="small"
                          disabled
                          sx={{ color: "#ef4444", backgroundColor: "rgba(239,68,68,0.06)", borderRadius: "7px" }}
                        >
                          <DeleteOutlineIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                      </span>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ textAlign: "center", py: 3 }}>
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#9ca3af", fontSize: "0.875rem" }}>
          Los gastos registrados aparecerán aquí.
        </Typography>
      </Box>
    </Box>
  )
}