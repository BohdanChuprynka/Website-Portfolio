import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";

const drawerWidth = 240;
const navItems: [string, string][] = [
  ["Expertise", "expertise"],
  ["History", "history"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (!navbar) return;
      setScrolled(window.scrollY > navbar.clientHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const drawerBg = mode === "dark" ? "#0f1115" : "#ffffff";
  const drawerText = mode === "dark" ? "#ffffff" : "#111111";
  const dividerColor =
    mode === "dark" ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)";
  const hoverBg =
    mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        color: drawerText,
      }}
      role="presentation"
    >
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                py: 2,
                color: "inherit",
                fontWeight: 600,
            }}
        >
            <ListIcon sx={{ color: "inherit" }} />
            <span>Menu</span>
        </Box>

        <Divider sx={{ borderColor: dividerColor }} />

        <List>
            {navItems.map(([label, id]) => (
                <ListItem key={id} disablePadding>
                    <ListItemButton
                        onClick={() => scrollToSection(id)}
                        sx={{
                            textAlign: "center",
                            color: drawerText,
                            "&:hover": { backgroundColor: hoverBg },
                        }}
                    >
                        <ListItemText
                            primary={label}
                            primaryTypographyProps={{
                                component: "span",
                                sx: {
                                    color: drawerText + " !important",
                                    fontWeight: 500,
                                },
                            }}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
      >
        <Toolbar className="navigation-bar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {mode === "dark" ? (
            <LightModeIcon onClick={() => modeChange()} />
          ) : (
            <DarkModeIcon onClick={() => modeChange()} />
          )}

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(([label, id]) => (
              <Button
                key={id}
                onClick={() => scrollToSection(id)}
                sx={{ color: "#fff" }}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: drawerBg,
              color: drawerText,
            },
          }}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;