import HomePage from "./pages/home";
import "./shared/styles/style.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DarkMode } from "./widgets/DarkMode";
import CssBaseline from "@mui/material/CssBaseline";
import { DataList } from "./widgets/DataList";
import { BlockProvider } from "./entities/provider/BlockProvider";
import { Header } from "./shared/ui/Header";
import { Main } from "./shared/ui/Main";
import { Footer } from "./shared/ui/Footer";
import { AddButton } from "./shared/ui/AddButton";
const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BlockProvider>
        <CssBaseline />
        <Header>
          <DataList />
        </Header>
        <Main>
          <HomePage />
        </Main>
        <Footer>
          <p>Done by ivan41kd</p>
        </Footer>
        <DarkMode />
      </BlockProvider>
    </ThemeProvider>
  );
}

export default App;
