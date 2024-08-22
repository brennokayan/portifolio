import { Box, Button } from "@mui/material";
import ImagemPessoal from "../../assets/imagem_minha_para_primeira_tela_editada.png";
export function Home() {
  return (
    <>
      <Box
      id = "home"
        sx={{
          height: "100vh",
          bgcolor: "#1d1c1a",
          display: "flex",
          flexDirection: { xs: "column", lg: "row-reverse" },
          alignItems: { xs: "center", lg: "center" },
          pl: { xs: 0, sm: 8 },
          color: "#fff",
          justifyContent: { xs: "center", lg: "space-between" },
          textAlign: { xs: "center", sm: "start" },
        }}
      >
        <Box sx={{ mb: 5, height: { xs: "240px", lg: "320px" } }}>
          <img src={ImagemPessoal} alt="" height={"100%"} />
        </Box>
        <Box>
          <h1>Olá, eu sou o</h1>
          <h1>
            <strong>Brenno Kayan :)</strong>
          </h1>
          <p style={{ color: "rgba(255,255,255,.7)" }}>
            Desenvolvedor Full-Stack
          </p>
          <Box sx={{ my: 2, display: "flex", gap: 2 }}>
            <Button
              sx={{
                bgcolor: "white",
                color: "black",
                ":hover": { backgroundColor: "rgba(255,255,255,.8)" },
              }}
            >
              Baixar CV
            </Button>
            <Button
              sx={{ color: "white", border: "1px solid white" }}
              variant="outlined"
            >
              Entrar em contato
            </Button>
          </Box>
        </Box>

        
      </Box>
    </>
  );
}
