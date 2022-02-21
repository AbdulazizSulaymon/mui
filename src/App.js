import {
  Button,
  Container,
  CssBaseline,
  Paper,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createContext, useState } from "react";
import AutoComplete from "./components/AutoComplete";
import Header from "./components/Header";
import Title from "./components/Title";
import inputGlobalStyles from "./style/GlobalStyle";
import makeTheme from "./style/makeTheme";

export const DarkModeContext = createContext({
  mode: "light",
  toggleMode: () => {},
});

function App() {
  const [mode, setMode] = useState("light");

  const theme = makeTheme(mode);

  return (
    <DarkModeContext.Provider
      value={{
        mode,
        toggleMode: () => setMode(mode === "light" ? "dark" : "light"),
      }}
    >
      <ThemeProvider theme={theme}>
        {inputGlobalStyles(mode)}
        <CssBaseline />
        <Paper sx={{ borderRadius: 0, minHeight: "100vh" }}>
          <Header />
          <Container sx={{ py: 4 }} maxWidth="md">
            <AutoComplete />
            <Button color="primary" variant="contained" sx={{ boxShadow: 20 }}>
              Primary
            </Button>
            <Title />
          </Container>
        </Paper>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}

export default App;
