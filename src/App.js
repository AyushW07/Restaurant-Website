import "./App.css";
import Navbar from "./Components/molecules/Navbar/Navbar";
import About from "./Components/organism/About/About";
import Awards from "./Components/organism/Awards/Awards";
import Chef from "./Components/organism/Chef/Chef";
import Gallery from "./Components/organism/Gallery/Gallery";
import Header from "./Components/organism/Header/Header";
import Intro from "./Components/organism/Intro/Intro";
import Menu from "./Components/organism/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Chef />
      <Intro />
      <Awards />
      <Gallery />
    </div>
  );
}

export default App;
