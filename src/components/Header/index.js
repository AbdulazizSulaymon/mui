import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useContext } from "react";
import { DarkModeContext } from "../../App";

export default function Header() {
  const { mode, toggleMode } = useContext(DarkModeContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleMode}
        >
          {mode === "light" ? <ModeNightIcon /> : <LightModeIcon />}
        </IconButton>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
