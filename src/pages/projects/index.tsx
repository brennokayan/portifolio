import { Box } from "@mui/material";
import { ProjectsDatabase } from "../../database/projects";

export function Projects() {
  const color = "black";
  return (
    <>
      <Box
        id="projects"
        sx={{
          textAlign: "justify",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
          borderTop: "1px solid #fff",
          py: 12,
        }}
      >
        <h1>Projetos</h1>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto",
            gap: { xs: 3, sm: 4, md: 5 },
          }}
        >
          {ProjectsDatabase.map((project) => (
            <Box
              key={project.name}
              height={"50vh"}
              display={"flex"}
              sx={{
                width: "70vw",
                gap: 2,
                textAlign: "center",
                fontSize: "12px",
                borderTopLeftRadius: "10px",
                border: "1px solid " + color,
                flexDirection: { xs: "column-reverse", sm: "row" },
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "rgba(255,255,255,.3)",
                backdropFilter: "blur(5px)",
                boxShadow: {
                  xs: "5px 5px 5px 1px rgba(0,0,0,1)",
                  sm: "8px 8px 6px rgba(0,0,0,1)",
                },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: "50%" }, // Largura da imagem responsiva
                  height: {xs: "50%", sm: "100%"}, // Altura da imagem
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={project?.img}
                  alt={project.name}
                  sx={{
                    maxWidth: "95%", // Limita a largura máxima ao tamanho do container
                    maxHeight: {xs: "50%", sm: "100%"}, // Limita a altura máxima ao tamanho do container
                    objectFit: "cover", // Cobre todo o espaço disponível, mantendo o aspecto
                    borderRadius: "8px", // Adiciona borda arredondada à imagem
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", sm: "50%" },
                  padding: { xs: 2, sm: 3 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <h1>{project.name}</h1>
                <p style={{fontSize: "14px"}}>{project.description}</p>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
