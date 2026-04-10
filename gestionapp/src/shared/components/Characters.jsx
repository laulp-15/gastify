import { Box, Card, CardContent, CardMedia, Chip, Grid, Skeleton, Typography } from "@mui/material"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"

// Colores por estado 
const STATUS_COLOR = {
    Alive: "#22c55e",
    Dead: "#ef4444",
    unknown: "#9ca3af",
}

// CharacterCard 
function CharacterCard({ character }) {
    const { name, image, status, species, origin } = character

    return (
        <Card
            sx={{
                width: "100%",
                borderRadius: "16px",
                border: "1px solid #e9d5ff",
                boxShadow: "none",
                backgroundColor: "#fff",
                "&:hover": {
                    borderColor: "#a855f7",
                    boxShadow: "0 8px 24px rgba(124,58,237,0.1)",
                    transform: "translateY(-2px)",
                },
                transition: "all 0.2s ease",
            }}
        >
            <CardMedia
                component="img"
                image={image}
                alt={name}
                sx={{ height: 180, objectFit: "cover" }}
            />
            <CardContent sx={{ p: 2 }}>
                <Typography
                    sx={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 700,
                        color: "#1e1030",
                        fontSize: "0.95rem",
                        mb: 1,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {name}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 0.6, mb: 1 }}>
                    <FiberManualRecordIcon sx={{ fontSize: 10, color: STATUS_COLOR[status] ?? "#9ca3af" }} />
                    <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#6b7280" }}>
                        {status}
                    </Typography>
                </Box>

                <Chip
                    label={species}
                    size="small"
                    sx={{
                        backgroundColor: "rgba(124,58,237,0.08)",
                        color: "#7c3aed",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        height: 22,
                        mb: 1,
                    }}
                />

                <Typography
                    sx={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.75rem",
                        color: "#9ca3af",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {origin?.name}
                </Typography>
            </CardContent>
        </Card>
    )
}

// CharacterGrid
export default function CharacterGrid({ characters, loading, query }) {
    if (loading) {
        return (
            <Grid container spacing={3}>
                {[...Array(8)].map((_, i) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
                        <Skeleton variant="rounded" height={320} sx={{ borderRadius: "16px" }} />
                    </Grid>
                ))}
            </Grid>
        )
    }

    if (characters.length === 0) {
        return (
            <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#9ca3af", fontSize: "1rem" }}>
                    No se encontraron personajes para "{query}"
                </Typography>
            </Box>
        )
    }

    return (
        <Grid container spacing={3}>
            {characters.map((char) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={char.id} sx={{ display: "flex" }}>
                    <CharacterCard character={char} />
                </Grid>
            ))}
        </Grid>
    )
}