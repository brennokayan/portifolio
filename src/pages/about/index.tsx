import { Box, Typography } from "@mui/material";
import imagem from "../../assets/Imagem_para_segunda_tela_editada.png";

export function AboutMe() {
  return (
    <>
      <Box
        id="about"
        px={6}
        sx={{
          textAlign: "justify",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          height: {xs: "auto", sm: "100vh"},
          alignItems: "center",
          justifyContent: "center",
          borderTop: "1px solid #fff",
          // bgcolor: "#000",
          py: 4
        }}
      >
        <h1>Sobre Mim</h1>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "center",
            justifyContent: "center",

          }}
        >
          <Box sx={{ height: { xs: "240px", lg: "320px" }}}>
            <img src={imagem} alt="" height={"100%"} style={{borderRadius: "10px"}} />
          </Box>
          <Typography sx={{ fontSize: { xs: 20, sm: 22 }}}>
            Sou Brenno Kayan, Desenvolvedor Full-Stack & Mobile com experiência
            em React.js, Flutter, Node.js e mais. Trabalho no desenvolvimento de
            aplicações completas, da interface ao backend, utilizando
            tecnologias modernas como TypeScript, PostgreSQL, e
            Django-rest-framework. Meu foco é criar soluções robustas,
            escaláveis e intuitivas, sempre buscando entregar produtos de alta
            qualidade.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
