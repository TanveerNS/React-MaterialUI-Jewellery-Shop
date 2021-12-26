import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Theme from "./components/Theme";
import "./styles.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Collection from "./components/Collection";
import Product from "./components/Product";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Header />
        <Hero />
        <Category />
        <Collection />
        <Product />
        <Blog />
        <Footer />
      </ThemeProvider>
    </>
  );
}
