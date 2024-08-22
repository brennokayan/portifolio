import { Box } from "@mui/material";
import { habilidadesDataBase } from "../../database/habilidades";
// import { useEffect, useState } from "react";

export function Skills() {
  const color = "rgba(255,255,255,.8)";
  // const colors = ["blue", "purple", "green", "orange", "violet", "red"];
  // const [, setIndex] = useState(0);
  // const [color, setColor] = useState(colors[0]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setIndex((prevIndex) => {
  //       const nextIndex = (prevIndex + 1) % colors.length;
  //       setColor(colors[nextIndex]);
  //       return nextIndex;
  //     });
  //   }, 500); // Muda a cor a cada 1 segundo

  //   return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  // }, [colors]);

  return (
    <Box
      id="skills"
      sx={{
        textAlign: "justify",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, sm: 2, md: 3, lg: 4 },
        height: "auto", //{ xs: "210vh", sm: "265vh", lg: "210vh" },
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#1d1c1a",
        borderTop: "1px solid #fff",
        color: "#fff",
        py: 12,
      }}
    >
      <h1
        style={{
          textShadow: "2px 2px 2px rgba(0,0,0,1)",
          color: "white",
        }}
      >
        Habilidades
      </h1>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "auto auto",
            sm: "auto auto auto",
            md: "auto auto auto auto",
          },
          gap: { xs: 3, sm: 4, md: 5 },
        }}
      >
        {habilidadesDataBase.map((habilidade) => (
          <Box
            key={habilidade.name}
            height={"120px"}
            display={"flex"}
            sx={{
              width: { xs: "150px", sm: "200px", md: "220px", lg: "250px" },
              gap: 2,
              textAlign: "center",
              fontSize: "12px",
              borderTopLeftRadius: "10px",
              borderTop: "2px solid " + color,
              borderLeft: "2px solid " + color,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "rgba(255,255,255,.3)",
              backdropFilter: "blur(5px)",
              boxShadow: {
                xs: "5px 5px 5px 1px rgba(0,0,0,1), -2px -2px 8px " + color,
                sm: "8px 8px 6px rgba(0,0,0,1), -3px -3px 10px " + color,
              },
            }}
          >
            <h2>{habilidade.name}</h2>
            <img src={habilidade.img} alt={habilidade.name} height={"50px"} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
