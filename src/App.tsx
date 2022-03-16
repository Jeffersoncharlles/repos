import { Routers } from "./routes";
import { ThemeProvider } from 'styled-components';
import Global from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
