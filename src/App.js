import { Provider } from "react-redux";
import { createTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import store from "./store/index";
import PlaceScreen from "./components/PlaceScreen";

const theme = createTheme({
  palette: {
    primary: red,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Places to Visit</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <PlaceScreen />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}
