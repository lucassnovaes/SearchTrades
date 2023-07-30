require("dotenv");
import "@/styles/globals.css";
import { store } from "../src/redux/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function App({ Component, pageProps }) {
  const defaultTheme = createTheme();

  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />;
      </ThemeProvider>
    </Provider>
  );
}
