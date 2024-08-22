import { Box } from "@mui/material";
import { contacts } from "../../database/contacts";

export function Contacts() {
  return (
    <>
      <Box
        id="contacts"
        sx={{
          textAlign: "justify",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 2, md: 3, lg: 4 },
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          borderTop: "1px solid #fff",
          color: "#fff",
          bgcolor: "#1d1c1a",
        }}
      >
        <h1 style={{
          textShadow: "2px 2px 2px rgba(0,0,0,1)",
          color: "white",
        }}>Contatos</h1>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "auto auto",
              sm: "auto auto",
              md: "auto auto auto auto",
              lg: "auto auto auto auto",
            },
            gap: { xs: 2, sm: 2, md: 3, lg: 4 },
            alignItems: "center",
          }}
        >
          {contacts.map((contact) => (
            <a
              target="_blank"
              href={contact.link}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Box
                key={contact.name}
                sx={{
                  height: {
                    xs: "120px",
                    sm: "150px",
                    md: "180px",
                    lg: "200px",
                  },
                  width: { xs: "150px", sm: "200px", md: "220px", lg: "250px" },
                  fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                  borderTopLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  boxShadow:
                    "5px 5px 5px 1px rgba(0,0,0,1), -2px -2px 8px #fff",
                  borderTop: "2px solid white",
                  borderLeft: "2px solid white",
                  backdropFilter: "blur(5px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  bgcolor: "rgba(255,255,255,.3)",
                }}
              >
                <h2 style={{
                  textShadow: "2px 2px 2px rgba(0,0,0,1)",
                  color: "white",
                }}>{contact.name}</h2>
                <img src={contact.img} alt={contact.name} color="white" height={"50px"} />
              </Box>
            </a>
          ))}
        </Box>
      </Box>
    </>
  );
}
