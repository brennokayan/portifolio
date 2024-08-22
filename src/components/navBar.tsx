import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { DefaultIcons } from "../utils/defaultIcons";
import imagemLogo from "../assets/BK Soluções logo2.png";
import { RollToRef } from "../utils/defaultFunctions";


const drawerWidth = "100vw";

const navItems = [
  { name: "Sobre Mim", ref: "#about" },
  { name: "Habilidades", ref: "#skills" },
  { name: "Projetos", ref: "#projects" },
  { name: "Contatos", ref: "#contacts" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        bgcolor: "rgba(0,0,0,.8)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ my: 2, cursor: "pointer" }}>
        <img
          src={imagemLogo}
          alt="Imagem logo Brenno Kayan"
          height={"100px"}
          onClick={() => RollToRef("#home")}
          style={{ cursor: "pointer" }}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", cursor: "pointer" }}
              onClick={() => RollToRef(item.ref)}
              
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;



  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ bgcolor: "rgba(0,0,0,0.5)", borderBottom: "1px solid white", backdropFilter: "blur(3px)" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <DefaultIcons.MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "start",
              alignItems: "center",
              
            }}
          >
            <img
              src={imagemLogo}
              alt="Imagem logo Brenno Kayan"
              height={"80px"}
              onClick={() => RollToRef("#home")}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="outlined"
                sx={{
                  color: "#fff",
                  border: "0px solid white",
                  backgroundColor: "transparent",
                  ":hover": {
                    backgroundColor: "#777",
                    border: "0px solid white",
                  },
                  fontFamily: "unset",
                }}
                onClick={() => RollToRef(item.ref)}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "flex", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "rgba(0,0,0,.1)",
              color: "#fff",
              flexDirection: "column",
              backdropFilter: "blur(3px)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
