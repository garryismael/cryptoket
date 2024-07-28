import Hero from "./app/sections/Hero";
import "./App.css";
import Header from "./app/sections/Header";
import TopSellers from "./app/sections/TopSellers";
import HotBids from "./app/sections/HotBids";
import Footer from "./app/sections/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <TopSellers />
      <HotBids />
      <Footer />
    </>
  );
}

export default App;
