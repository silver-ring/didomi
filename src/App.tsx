import * as React from 'react';
import { BrowserRouter } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBarComponent from "./components/app-bar.component";
import DrawerComponent from "./components/drawer.component";
import PageContainerComponent from "./components/page-container.component";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const mdTheme = createTheme();

export default function App() {
  return (
      <BrowserRouter>
          <ThemeProvider theme={mdTheme}>
              <Box sx={{ display: 'flex' }}>
                  <CssBaseline />
                  <AppBarComponent />
                  <DrawerComponent />
                  <PageContainerComponent />
              </Box>
          </ThemeProvider>
      </BrowserRouter>
  );
}
