import {
    Box, Container, InputAdornment,
    Pagination, TextField, Typography,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { useApiRyC } from "../hooks/UseApiRyC"
import CharacterGrid from "../components/Characters"

export default function ApiRyC() {
    const { characters, page, info, query, loading, handleSearch, handlePageChange } = useApiRyC()

    return (
        <Box sx={{ backgroundColor: "#faf5ff", minHeight: "100vh", pt: 12, pb: 8 }}>
            <Container maxWidth="lg">

                {/* Título */}
                <Box sx={{ textAlign: "center", mb: 5 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700,
                            color: "#1e1030",
                            letterSpacing: "-0.5px",
                            mb: 1,
                        }}
                    >
                        Rick &amp; Morty{" "}
                        <Box component="span" sx={{ color: "#7c3aed" }}>Characters</Box>
                    </Typography>
                    <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#6b7280", fontSize: "0.95rem" }}>
                        Explora los personajes del universo de Rick and Morty
                    </Typography>
                </Box>

                {/* Buscador */}
                <Box sx={{ maxWidth: 480, mx: "auto", mb: 5 }}>
                    <TextField
                        fullWidth
                        placeholder="Buscar personaje..."
                        onChange={handleSearch}
                        variant="outlined"
                        size="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: "#c4b5fd", fontSize: 20 }} />
                                </InputAdornment>
                            ),
                            sx: {
                                fontFamily: "'DM Sans', sans-serif",
                                backgroundColor: "#fff",
                                borderRadius: "12px",
                                "& fieldset": { borderColor: "#e9d5ff" },
                                "&:hover fieldset": { borderColor: "#a855f7 !important" },
                                "&.Mui-focused fieldset": { borderColor: "#7c3aed !important" },
                            },
                        }}
                        inputProps={{
                            sx: { py: 1.4, fontFamily: "'DM Sans', sans-serif", "&::placeholder": { color: "#c4b5fd" } },
                        }}
                    />
                </Box>

                {/* Grid de personajes */}
                <CharacterGrid characters={characters} loading={loading} query={query} />

                {/* Paginación */}
                {!loading && info.pages > 1 && (
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                        <Pagination
                            count={info.pages}
                            page={page}
                            onChange={handlePageChange}
                            sx={{
                                "& .MuiPaginationItem-root": {
                                    fontFamily: "'DM Sans', sans-serif",
                                    color: "#4b3a6e",
                                },
                                "& .MuiPaginationItem-root.Mui-selected": {
                                    backgroundColor: "#7c3aed",
                                    color: "#fff",
                                    "&:hover": { backgroundColor: "#6d28d9" },
                                },
                            }}
                        />
                    </Box>
                )}

            </Container>
        </Box>
    )
}