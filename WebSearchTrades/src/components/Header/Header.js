import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ShowChart } from "@mui/icons-material";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.

export default function Album() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <ShowChart sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Preço de Ações
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
