import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./App.css";
import Trends from "./components/trends/Trends";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Trends />
      <Footer />
    </div>
  );
}

export default App;
